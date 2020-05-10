import * as mongoose from 'mongoose';

export interface DocumentInterface extends mongoose.Document {
    _id: string;
    title: string;
    description: string;
    createDate: number;
}
