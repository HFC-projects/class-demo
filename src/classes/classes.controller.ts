import { Controller, Get, Param, Post, Body, Header, Put, Delete, UseFilters, UseInterceptors } from '@nestjs/common';
import { CreateClassDto } from './create-class.dto';
import { Class } from './interfaces/class.interface';
import { ClassesService } from './classes.service';
import { ApiParam } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/helpers/http-exceptions.filter';
import { CustomLogger } from 'src/helpers/custom-logger';
import { LoggingInterceptor } from 'src/helpers/logging.interceptor';

@UseInterceptors(LoggingInterceptor)
@UseFilters(new HttpExceptionFilter())
@Controller('classes')
export class ClassesController {

  constructor(private classesService: ClassesService, private logger: CustomLogger) {
    this.logger.setContext('ClassesController')
  }
s
  @Get()
  findAll(): Promise<Class[]> {
    return this.classesService.findAll();
  }


  @Header('Content-Type', 'application/json')
  @Post()
  async create(@Body() createClassDto: CreateClassDto): Promise<Class> {
    return this.classesService.create(createClassDto);
  }


  @ApiParam({ name: 'id', type: String })
  @Get(':id')
  async findOne(@Param('id') id): Promise<Class> {
    return this.classesService.findOne(id);
  }


  @ApiParam({ name: 'id', schema: { type: 'string' } })
  @Header('Content-Type', 'application/json')
  @Put(':id')
  update(@Param('id') id, @Body() createClassDto: CreateClassDto): Promise<Class> {
    return this.classesService.update(id, createClassDto);
  }


  @ApiParam({ name: 'id', type: String })
  @Delete(':id')
  remove(@Param('id') id): Promise<any> {
    return this.classesService.remove(id);
  }

}
