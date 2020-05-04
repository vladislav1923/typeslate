import {DocumentsEnum} from "../enums/documents.enum";

export interface ArticleInterface {
    id: number;
    groupId: number;
    title: string;
    content: string;
    origin: string;
    document: DocumentsEnum;
    createDate: number;
}
