import { Document } from 'mongoose';
import { Class } from 'src/classes/interfaces/class.interface';
import { Teacher } from 'src/teachers/interfaces/teacher.interface';

export interface Course extends Document {
  readonly _id: string
  readonly name: string
  readonly class: Class
  readonly teacher: Teacher
}