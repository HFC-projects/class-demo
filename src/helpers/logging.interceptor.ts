import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common'
import { Observable } from  'rxjs';
import { tap } from 'rxjs/operators';
import { Request } from 'express';
import { CustomLogger } from './custom-logger';

@Injectable()
export class LoggingInterceptor implements NestInterceptor{
  constructor(private logger: CustomLogger){}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const className = context.getClass().name;
    this.logger.setContext(className);

    const host = context.switchToHttp();
    const req = host.getRequest<Request>();

    this.logger.log(`starting ${req.method} ${req.url}...`);
    const now =  Date.now();
    return next
      .handle()
      .pipe(
        tap(() => this.logger.log(`processing time of ${req.method} ${req.url}: ${Date.now() - now}ms`))
      )
  }
}