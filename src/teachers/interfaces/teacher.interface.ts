import { Document } from 'mongoose';

export interface Teacher extends Document {
  readonly _id: string
  readonly name: string
}