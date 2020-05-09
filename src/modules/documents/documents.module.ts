import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DocumentsService } from './documents.service';
import { DocumentsController } from './documents.controller';
import { DocumentSchema } from '../../schemas/document.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Document',
        schema: DocumentSchema
      }
    ])
  ],
  providers: [DocumentsService],
  controllers: [DocumentsController]
})
export class DocumentsModule {}
