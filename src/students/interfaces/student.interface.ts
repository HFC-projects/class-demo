import { Document } from 'mongoose';

export interface Student extends Document {
  readonly _id: string
  readonly name: string
}