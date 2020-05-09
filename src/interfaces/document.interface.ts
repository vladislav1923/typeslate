import * as mongoose from 'mongoose';

export interface DocumentInterface extends mongoose.Document {
    id: number;
    title: string;
    createDate: number;
}
