import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticleInterface } from '../../interfaces/article.interface';

@Controller('articles')
export class ArticlesController {

    private readonly articlesService: ArticlesService;

    constructor(articlesService: ArticlesService) {
        this.articlesService = articlesService;
    }

    @Get()
    public getArticlesByGroupId(): ArticleInterface[] {
        return this.articlesService.getArticlesByGroupId();
    }

    @Post()
    public createArticle(): ArticleInterface {
        return this.articlesService.createArticle();
    }

    @Put()
    public updateArticle(): ArticleInterface {
        return this.articlesService.updateArticle();
    }

    @Delete()
    public deleteArticle(): ArticleInterface {
        return this.articlesService.deleteArticle();
    }

}
