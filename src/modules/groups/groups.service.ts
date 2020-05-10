import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { GroupDto } from '../../dtos/Group.dto';
import { GroupInterface } from '../../interfaces/Group.interface';
import { ArticleInterface } from '../../interfaces/article.interface';

@Injectable()
export class GroupsService {

    constructor(
      @InjectModel('Group') private groupModel: Model<GroupInterface>,
      @InjectModel('Article') private articleModel: Model<ArticleInterface>,
    ) {}

    public async getGroups(): Promise<GroupDto[]> {
        return this.groupModel.find();
    }

    public async getGroupById(id: string): Promise<GroupDto> {
        return this.groupModel.findOne({_id: id});
    }

    public async createGroup(data: GroupDto): Promise<GroupDto> {
        const group = { ...data} as GroupInterface;
        delete group._id;

        return new this.groupModel(group).save();
    }

    public async updateGroup(id: string, data: GroupDto): Promise<GroupDto> {
        const group = { ...data} as GroupInterface;
        delete group._id;

        return this.groupModel.findOneAndUpdate({_id: id}, group, {
            new: true
        });
    }

    public async deleteGroup(id: string): Promise<GroupDto> {
        const articles = await this.articleModel.find();
        const relatedArticles = articles.filter((article: ArticleInterface) => article.groupId === id);

        if (relatedArticles.length > 0) {
            throw new BadRequestException('Bad request', 'Group has related articles');
        } else {
            return this.groupModel.findOneAndDelete({_id: id});
        }
    }

}
