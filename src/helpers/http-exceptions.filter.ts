import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    let res: any = exception.getResponse();
    if (typeof res === 'object') {
      res = {
        error: res.error,
        message: res.message.toString(),
        timestamp: new Date().toISOString(),
        path: request.url
      }
    }


    response
      .status(status)
      .json(res)
  }
}