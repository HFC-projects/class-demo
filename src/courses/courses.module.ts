import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursesController } from './courses.controller';
import { CourseSchema } from './schemas/course.schema';
import { CustomLogger } from 'src/helpers/custom-logger';
import { CoursesService } from './courses.service';
import { ClassesModule } from 'src/classes/classes.module';

@Module({
  controllers: [CoursesController],
  providers: [CustomLogger, CoursesService],
  exports: [CustomLogger],
  imports: [MongooseModule.forFeature([{name: 'Course', schema: CourseSchema}]), ClassesModule]
})
export class CoursesModule {}
