import { Module } from '@nestjs/common';
import { TeachersController } from './teachers/teachers.controller';

@Module({
  controllers: [TeachersController],
})
export class AppModule {}
