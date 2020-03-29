import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClassesController } from './classes.controller';
import { ClassesService } from './classes.service';
import { ClassSchema } from './schemas/class.schema';
import { CustomLogger } from 'src/helpers/custom-logger';
import { MyLibraryModule } from 'someprefix/my-library';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Class', schema: ClassSchema}]), MyLibraryModule],
  controllers: [ClassesController],
  providers: [
    CustomLogger, 
    ClassesService
  ],
  exports: [
    CustomLogger,
    ClassesService
  ]
})
export class ClassesModule {}