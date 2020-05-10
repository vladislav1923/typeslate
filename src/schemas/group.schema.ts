import * as mongoose from 'mongoose';

export const GroupSchema = new mongoose.Schema({
  documentId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createDate: {
    type: Number,
    required: true
  }
});
