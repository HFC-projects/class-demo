import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Class } from './interfaces/class.interface';
import { CreateClassDto } from './create-class.dto';
import { CustomLogger } from 'src/helpers/custom-logger';
import { MyLibraryService } from 'someprefix/my-library';

@Injectable()
export class ClassesService {
  constructor(@InjectModel('Class') private readonly classModel: Model<Class>, private logger: CustomLogger, private lib: MyLibraryService) {
    this.logger.setContext('ClasssService');
  }

  async create(createClassDto: CreateClassDto): Promise<Class> {
    const createdClass = new this.classModel(createClassDto);
    return createdClass.save();
  }

  async findAll(): Promise<Class[]> {
    this.lib.sayHello();
    return this.classModel.find().exec();
  }

  async findOne(id): Promise<Class> {
    return await this.classModel.findById(id).exec();
  }

  async update(id, createClassDto: CreateClassDto): Promise<Class> {
    return await this.classModel
      .updateOne({_id: id}, createClassDto, {new: true});
  }

  async remove(id): Promise<any> {
    return this.classModel
      .remove({_id: id});
  }

}