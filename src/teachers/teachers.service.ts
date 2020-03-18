import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Teacher } from './interfaces/teacher.interface';
import { CreateTeacherDto } from './create-teacher.dto';

@Injectable()
export class TeachersService {
  constructor(@InjectModel('Teacher') private readonly teacherModel: Model<Teacher>) {}

  async create(createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    const createdTeacher = new this.teacherModel(createTeacherDto);
    return createdTeacher.save();
  }

  async findAll(): Promise<Teacher[]> {
    return this.teacherModel.find().exec();
  }

  async findOne(id): Promise<Teacher> {
    return await this.teacherModel.findById(id).exec();
  }

  async update(id, createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    return await this.teacherModel
      .updateOne({_id: id}, createTeacherDto, {new: true});
  }

  async remove(id): Promise<any> {
    return this.teacherModel
      .remove({_id: id});
  }

}