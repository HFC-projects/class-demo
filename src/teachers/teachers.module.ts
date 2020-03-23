import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TeachersController } from './teachers.controller';
import { TeachersService } from './teachers.service';
import { TeacherSchema } from './schemas/teacher.schema';
import { CustomLogger } from 'src/helpers/custom-logger';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Teacher', schema: TeacherSchema}])],
  controllers: [TeachersController],
  providers: [CustomLogger, TeachersService],
  exports: [CustomLogger]
})
export class TeachersModule {}
