import { Injectable } from '@nestjs/common';
import { DocumentInterface } from '../../interfaces/document.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DocumentsService {

    constructor(
      @InjectModel('Document') private model: Model<DocumentInterface>
    ) {}

    public getDocuments(): DocumentInterface[] {
        return [];
    }

    public async createDocument(data: DocumentInterface): Promise<DocumentInterface> {
        const createdDocument = new this.model(data);

        return createdDocument.save();
    }

    public updateDocument(): DocumentInterface {
        return {} as DocumentInterface;
    }

    public deleteDocument(): DocumentInterface {
        return {} as DocumentInterface;
    }

}
