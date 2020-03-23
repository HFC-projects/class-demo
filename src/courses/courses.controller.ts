import { Controller, Get, Param, Post, Body, Header, Put, Delete, UseFilters, UseInterceptors } from '@nestjs/common';
import { CreateCourseDto } from './create-course.dto';
import { Course } from './interfaces/course.interface';
import { CoursesService } from './courses.service';
import { ApiParam } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/helpers/http-exceptions.filter';
import { CustomLogger } from 'src/helpers/custom-logger';
import { LoggingInterceptor } from 'src/helpers/logging.interceptor';

@UseInterceptors(LoggingInterceptor)
@UseFilters(new HttpExceptionFilter())
@Controller('courses')
export class CoursesController {

  constructor(private courseService: CoursesService, private logger: CustomLogger) {
    this.logger.setContext('CoursesController')
  }
s
  @Get()
  findAll(): Promise<Course[]> {
    return this.courseService.findAll();
  }


  @Header('Content-Type', 'application/json')
  @Post()
  async create(@Body() createCourseDto: CreateCourseDto): Promise<Course> {
    return this.courseService.create(createCourseDto);
  }


  @ApiParam({ name: 'id', type: String })
  @Get(':id')
  async findOne(@Param('id') id): Promise<Course> {
    return this.courseService.findOne(id);
  }


  @ApiParam({ name: 'id', schema: { type: 'string' } })
  @Header('Content-Type', 'application/json')
  @Put(':id')
  update(@Param('id') id, @Body() createCourseDto: CreateCourseDto): Promise<Course> {
    return this.courseService.update(id, createCourseDto);
  }


  @ApiParam({ name: 'id', type: String })
  @Delete(':id')
  remove(@Param('id') id): Promise<any> {
    return this.courseService.remove(id);
  }

}
