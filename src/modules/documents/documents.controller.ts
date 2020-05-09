import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { DocumentInterface } from '../../interfaces/document.interface';


@Controller('documents')
export class DocumentsController {

    private readonly documentsService: DocumentsService;

    constructor(documentsService: DocumentsService) {
        this.documentsService = documentsService;
    }

    @Get()
    public getDocuments(): DocumentInterface[] {
        return this.documentsService.getDocuments();
    }

    @Post()
    public async createDocument(@Body() data: DocumentInterface): Promise<DocumentInterface> {
        return await this.documentsService.createDocument(data);
    }

    @Put()
    public updateDocument(): DocumentInterface {
        return this.documentsService.updateDocument();
    }

    @Delete()
    public deleteDocument(): DocumentInterface {
        return this.documentsService.deleteDocument();
    }

}
