import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroupsModule } from '../groups/groups.module';
import { ArticlesModule } from "../articles/articles.module";
import { DocumentsModule } from "../documents/documents.module";
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    GroupsModule,
    ArticlesModule,
    DocumentsModule,
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
        useFindAndModify: false,
      }),
      inject: [ConfigService],
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
