import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DocumentsService } from './documents.service';
import { DocumentsController } from './documents.controller';
import { DocumentSchema } from '../../schemas/document.schema';
import { GroupSchema } from '../../schemas/group.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Document',
        schema: DocumentSchema
      },
      {
        name: 'Group',
        schema: GroupSchema
      }
    ])
  ],
  providers: [DocumentsService],
  controllers: [DocumentsController]
})
export class DocumentsModule {}
