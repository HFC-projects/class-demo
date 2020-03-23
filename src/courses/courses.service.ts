import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Course } from './interfaces/course.interface';
import { CreateCourseDto } from './create-course.dto';
import { CustomLogger } from 'src/helpers/custom-logger';

@Injectable()
export class CoursesService {
  constructor(@InjectModel('Course') private readonly courseModel: Model<Course>, private logger: CustomLogger) {
    this.logger.setContext('CoursesService');
  }

  async create(createCourseDto: CreateCourseDto): Promise<Course> {
    const createdCourse = new this.courseModel(createCourseDto);
    return createdCourse.save();
  }

  async findAll(): Promise<Course[]> {
    return this.courseModel.find()
      .populate([
        'class',
        'teacher'
      ])
      .exec();
  }

  async findOne(id): Promise<Course> {
    return await this.courseModel.findById(id).exec();
  }

  async update(id, createCourseDto: CreateCourseDto): Promise<Course> {
    return await this.courseModel
      .updateOne({_id: id}, createCourseDto, {new: true});
  }

  async remove(id): Promise<any> {
    return this.courseModel
      .remove({_id: id});
  }

}