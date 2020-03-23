import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from './interfaces/student.interface';
import { CreateStudentDto } from './create-student.dto';
import { CustomLogger } from 'src/helpers/custom-logger';

@Injectable()
export class StudentsService {
  constructor(@InjectModel('Student') private readonly studentModel: Model<Student>, private logger: CustomLogger) {
    this.logger.setContext('StudentsService');
  }

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    const createdStudent = new this.studentModel(createStudentDto);
    return createdStudent.save();
  }

  async findAll(): Promise<Student[]> {
    return this.studentModel.find().exec();
  }

  async findOne(id): Promise<Student> {
    return await this.studentModel.findById(id).exec();
  }

  async update(id, createStudentDto: CreateStudentDto): Promise<Student> {
    return await this.studentModel
      .updateOne({_id: id}, createStudentDto, {new: true});
  }

  async remove(id): Promise<any> {
    return this.studentModel
      .remove({_id: id});
  }

}