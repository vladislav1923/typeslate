import { Module } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupsController } from './groups.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { GroupSchema } from '../../schemas/group.schema';
import { ArticleSchema } from '../../schemas/article.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: 'Group',
                schema: GroupSchema
            },
            {
                name: 'Article',
                schema: ArticleSchema
            }
        ])
    ],
    controllers: [GroupsController],
    providers: [GroupsService],
})
export class GroupsModule {}
