import { Controller, Get, Param, Post, Body, Header, Put, Delete, UseFilters, UseInterceptors } from '@nestjs/common';
import { CreateTeacherDto } from './create-teacher.dto';
import { Teacher } from './interfaces/teacher.interface';
import { TeachersService } from './teachers.service';
import { ApiParam } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/helpers/http-exceptions.filter';
import { CustomLogger } from 'src/helpers/custom-logger';
import { LoggingInterceptor } from 'src/helpers/logging.interceptor';

@UseInterceptors(LoggingInterceptor)
@UseFilters(new HttpExceptionFilter())
@Controller('teachers')
export class TeachersController {

  constructor(private teacherService: TeachersService, private logger: CustomLogger) {
    this.logger.setContext('TeachersController')
  }
s
  @Get()
  findAll(): Promise<Teacher[]> {
    return this.teacherService.findAll();
  }


  @Header('Content-Type', 'application/json')
  @Post()
  async create(@Body() createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    return this.teacherService.create(createTeacherDto);
  }


  @ApiParam({ name: 'id', type: String })
  @Get(':id')
  async findOne(@Param('id') id): Promise<Teacher> {
    return this.teacherService.findOne(id);
  }


  @ApiParam({ name: 'id', schema: { type: 'string' } })
  @Header('Content-Type', 'application/json')
  @Put(':id')
  update(@Param('id') id, @Body() createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    return this.teacherService.update(id, createTeacherDto);
  }


  @ApiParam({ name: 'id', type: String })
  @Delete(':id')
  remove(@Param('id') id): Promise<any> {
    return this.teacherService.remove(id);
  }

}
