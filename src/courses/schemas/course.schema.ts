import * as mongoose from 'mongoose';

export const CourseSchema = new mongoose.Schema({
  name: String,
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class'
  },
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teacher'
  }
});