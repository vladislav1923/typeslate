import * as mongoose from 'mongoose';


export interface GroupInterface extends mongoose.Document {
    _id: string;
    documentId: string;
    title: string;
    description: string;
    createDate: number;
}
