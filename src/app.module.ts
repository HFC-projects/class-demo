import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeachersModule } from './teachers/teachers.module';
import { ClassesModule } from './classes/classes.module';
import { StudentsModule } from './students/students.module';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/class-demo'),
    TeachersModule,
    ClassesModule,
    StudentsModule,
    CoursesModule
  ]
})
export class AppModule { }