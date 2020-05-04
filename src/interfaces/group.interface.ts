import {DocumentsEnum} from "../enums/documents.enum";

export interface GroupInterface {
    id: number;
    name: string;
    document: DocumentsEnum;
    createDate: number;
}
