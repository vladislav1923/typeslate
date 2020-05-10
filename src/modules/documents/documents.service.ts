import { BadRequestException, Injectable } from '@nestjs/common';
import { DocumentInterface } from '../../interfaces/document.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DocumentDto } from '../../dtos/document.dto';
import { GroupInterface } from '../../interfaces/group.interface';

@Injectable()
export class DocumentsService {

    constructor(
      @InjectModel('Document') private documentModel: Model<DocumentInterface>,
      @InjectModel('Group') private groupModel: Model<GroupInterface>
    ) {}

    public async getDocuments(): Promise<DocumentDto[]> {
        return this.documentModel.find();
    }

    public async getDocumentById(id: string): Promise<DocumentDto> {
        return this.documentModel.findOne({_id: id});
    }

    public async createDocument(data: DocumentDto): Promise<DocumentDto> {
        const document = { ...data} as DocumentInterface;
        delete document._id;

        return new this.documentModel(document).save();
    }

    public async updateDocument(id: string, data: DocumentDto): Promise<DocumentDto> {
        const document = { ...data} as DocumentInterface;
        delete document._id;

        return this.documentModel.findOneAndUpdate({_id: id}, document, {
            new: true
        });
    }

    public async deleteDocument(id: string): Promise<DocumentDto> {
        const groups = await this.groupModel.find();
        const relatedGroups = groups.filter((group: GroupInterface) => group.documentId === id);

        if (relatedGroups.length > 0) {
            throw new BadRequestException('Bad request', 'Document has related groups');
        } else {
            return this.documentModel.findOneAndDelete({_id: id});
        }
    }

}
