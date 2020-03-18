import { Controller, Get, Req, Param, Post, Body, Header, Put, Delete } from '@nestjs/common';
import { Request } from 'express';
import { CreateTeacherDto } from './create-teacher.dto';
import { Teacher } from './interfaces/teacher.interface';
import { TeachersService } from './teachers.service';

@Controller('teachers')
export class TeachersController {

  constructor(private teacherService: TeachersService){}

  @Get()
  findAll(): Promise<Teacher[]> {
    return this.teacherService.findAll();
  }


  @Header('Content-Type', 'application/json')
  @Post()
  async create(@Body() createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    return this.teacherService.create(createTeacherDto);
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<Teacher> {
    return this.teacherService.findOne(id);
  }

  @Header('Content-Type', 'application/json')
  @Put(':id')
  update(@Param('id') id, @Body() createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    return this.teacherService.update(id, createTeacherDto);
  }

  @Delete(':id')
  remove(@Param('id') id): Promise<any> {
    return this.teacherService.remove(id);
  }

}
