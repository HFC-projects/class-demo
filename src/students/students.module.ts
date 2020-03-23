import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { StudentSchema } from './schemas/student.schema';
import { CustomLogger } from 'src/helpers/custom-logger';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Student', schema: StudentSchema}])],
  controllers: [StudentsController],
  providers: [CustomLogger, StudentsService],
  exports: [CustomLogger]
})
export class StudentsModule {}
