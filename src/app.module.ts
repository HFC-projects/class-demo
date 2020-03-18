import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeachersModule } from './teachers/teachers.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/class-demo'),
    TeachersModule
  ]
})
export class AppModule { }