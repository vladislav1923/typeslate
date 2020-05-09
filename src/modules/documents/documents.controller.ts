import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { DocumentDto } from '../../dtos/document.dto';


@Controller('documents')
export class DocumentsController {

    private readonly documentsService: DocumentsService;

    constructor(documentsService: DocumentsService) {
        this.documentsService = documentsService;
    }

    @Get()
    public async getDocuments(): Promise<DocumentDto[]> {
        return await this.documentsService.getDocuments();
    }

    @Get(':id')
    public async getDocumentById(@Param() params): Promise<DocumentDto> {
        return await this.documentsService.getDocumentById(params.id);
    }

    @Post()
    public async createDocument(@Body() data: DocumentDto): Promise<DocumentDto> {
        return await this.documentsService.createDocument(data);
    }

    @Put(':id')
    public async updateDocument(@Param() params, @Body() data: DocumentDto): Promise<DocumentDto> {
        return await this.documentsService.updateDocument(params.id, data);
    }

    @Delete(':id')
    public deleteDocument(@Param() params): Promise<DocumentDto> {
        return this.documentsService.deleteDocument(params.id);
    }

}
