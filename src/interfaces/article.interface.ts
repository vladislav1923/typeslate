import * as mongoose from "mongoose";

export interface ArticleInterface extends mongoose.Document {
    _id: string;
    groupId: string;
    documentId: string;
    title: string;
    description: string;
    content: string;
    origin: string;
    createDate: number;
}
