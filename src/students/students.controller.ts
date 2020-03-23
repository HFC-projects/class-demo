import { Controller, Get, Param, Post, Body, Header, Put, Delete, UseFilters, UseInterceptors } from '@nestjs/common';
import { CreateStudentDto } from './create-student.dto';
import { Student } from './interfaces/student.interface';
import { StudentsService } from './students.service';
import { ApiParam } from '@nestjs/swagger';
import { HttpExceptionFilter } from 'src/helpers/http-exceptions.filter';
import { CustomLogger } from 'src/helpers/custom-logger';
import { LoggingInterceptor } from 'src/helpers/logging.interceptor';

@UseInterceptors(LoggingInterceptor)
@UseFilters(new HttpExceptionFilter())
@Controller('students')
export class StudentsController {

  constructor(private studentService: StudentsService, private logger: CustomLogger) {
    this.logger.setContext('StudentsController')
  }
s
  @Get()
  findAll(): Promise<Student[]> {
    return this.studentService.findAll();
  }


  @Header('Content-Type', 'application/json')
  @Post()
  async create(@Body() createStudentDto: CreateStudentDto): Promise<Student> {
    return this.studentService.create(createStudentDto);
  }


  @ApiParam({ name: 'id', type: String })
  @Get(':id')
  async findOne(@Param('id') id): Promise<Student> {
    return this.studentService.findOne(id);
  }


  @ApiParam({ name: 'id', schema: { type: 'string' } })
  @Header('Content-Type', 'application/json')
  @Put(':id')
  update(@Param('id') id, @Body() createStudentDto: CreateStudentDto): Promise<Student> {
    return this.studentService.update(id, createStudentDto);
  }


  @ApiParam({ name: 'id', type: String })
  @Delete(':id')
  remove(@Param('id') id): Promise<any> {
    return this.studentService.remove(id);
  }

}
