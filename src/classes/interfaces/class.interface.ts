import { Document } from 'mongoose';

export interface Class extends Document {
  readonly _id: string
  readonly classNumber: Number
}