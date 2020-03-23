import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursesController } from './courses.controller';
import { CourseSchema } from './schemas/course.schema';
import { CustomLogger } from 'src/helpers/custom-logger';
import { ClassesService } from 'src/classes/classes.service';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Course', schema: CourseSchema}])],
  controllers: [CoursesController],
  providers: [CustomLogger, ClassesService],
  exports: [CustomLogger]
})
export class CoursesModule {}
