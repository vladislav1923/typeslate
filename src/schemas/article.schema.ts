import * as mongoose from 'mongoose';

export const ArticleSchema = new mongoose.Schema({
  documentId: {
    type: String,
    required: true
  },
  groupId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  content: {
    type: String,
    required: true
  },
  origin: {
    type: String,
    required: true
  },
  createDate: {
    type: Number,
    required: true
  }
});
