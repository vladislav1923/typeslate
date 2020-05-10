import { Injectable } from '@nestjs/common';
import { ArticleInterface } from '../../interfaces/article.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { ArticleDto } from '../../dtos/article.dto';

@Injectable()
export class ArticlesService {

    constructor(
      @InjectModel('Article') private articleModel: Model<ArticleInterface>,
    ) {}

    public async getArticles(): Promise<ArticleDto[]> {
        return this.articleModel.find();
    }

    public async getArticleById(id: string): Promise<ArticleDto> {
        return this.articleModel.findOne({_id: id});
    }

    public async createArticle(data: ArticleDto): Promise<ArticleDto> {
        const article = { ...data} as ArticleInterface;
        delete article._id;

        return new this.articleModel(article).save();
    }

    public async updateArticle(id: string, data: ArticleDto): Promise<ArticleDto> {
        const article = { ...data} as ArticleInterface;
        delete article._id;

        return this.articleModel.findOneAndUpdate({_id: id}, article, {
            new: true
        });
    }

    public async deleteArticle(id: string): Promise<ArticleDto> {
        return this.articleModel.findOneAndDelete({_id: id});
    }
}
