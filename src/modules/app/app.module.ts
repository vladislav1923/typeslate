import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroupsModule } from '../groups/groups.module';
import { ArticlesModule } from "../articles/articles.module";
import { DocumentsModule } from "../documents/documents.module";

@Module({
  imports: [GroupsModule, ArticlesModule, DocumentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
