import * as mongoose from 'mongoose';

export const DocumentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  createDate: {
    type: Number,
    required: true
  }
});
