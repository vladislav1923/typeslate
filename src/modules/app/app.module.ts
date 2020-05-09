import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroupsModule } from '../groups/groups.module';
import { ArticlesModule } from "../articles/articles.module";
import { DocumentsModule } from "../documents/documents.module";

@Module({
  imports: [
    GroupsModule,
    ArticlesModule,
    DocumentsModule,
    MongooseModule.forRoot('mongodb+srv://vlad:JzYOBEYoXOhooYL5@cluster0-zx97w.mongodb.net/test?retryWrites=true&w=majority',
      {useNewUrlParser: true}
    )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
