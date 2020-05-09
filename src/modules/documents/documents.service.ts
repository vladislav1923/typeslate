import { Injectable } from '@nestjs/common';
import { DocumentInterface } from '../../interfaces/document.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DocumentDto } from '../../dtos/document.dto';

@Injectable()
export class DocumentsService {

    constructor(
      @InjectModel('Document') private model: Model<DocumentInterface>
    ) {}

    public async getDocuments(): Promise<DocumentDto[]> {
        return this.model.find();
    }

    public async getDocumentById(id: string): Promise<DocumentDto> {
        return this.model.findOne({_id: id});
    }

    public async createDocument(data: DocumentDto): Promise<DocumentDto> {
        const document = { ...data} as DocumentInterface;
        delete document._id;

        return new this.model(document).save();
    }

    public async updateDocument(id: string, data: DocumentDto): Promise<DocumentDto> {
        const document = { ...data} as DocumentInterface;
        delete document._id;

        return this.model.findOneAndUpdate({_id: id}, document, {
            new: true
        });
    }

    public async deleteDocument(id: string): Promise<DocumentDto> {
        return this.model.findOneAndDelete({_id: id});
    }

}
