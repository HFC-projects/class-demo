import { Controller, Get, Req, Param, Post, Body, Header, Put, Delete } from '@nestjs/common';
import { Request } from 'express';
import { CreateTeacherDto } from './create-teacher.dto';

@Controller('teachers')
export class TeachersController {

  @Get()
  findAll(@Req() request: Request): string {
    return 'this route should return all teachers';
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `this route should return teacher with id ${id}`;
  }

  @Header('Content-Type', 'application/json')
  @Post()
  create(@Body() createTeacherDto: CreateTeacherDto): string {
    return `this route should create new teacher with data ${require('util').inspect(createTeacherDto, {showHidden: false, depth: null})}`;
  }

  @Header('Content-Type', 'application/json')
  @Put(':id')
  update(@Param('id') id): string {
    return `this route should update teacher with id #${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id): string {
    return `this route should delete teacher with id #${id}`;
  }

}
