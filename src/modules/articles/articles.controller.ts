import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticleDto } from '../../dtos/article.dto';

@Controller('articles')
export class ArticlesController {

    private readonly articlesService: ArticlesService;

    constructor(articlesService: ArticlesService) {
        this.articlesService = articlesService;
    }

    @Get()
    public async getArticles(): Promise<ArticleDto[]> {
        return await this.articlesService.getArticles();
    }

    @Get(':id')
    public async getArticleById(@Param() params): Promise<ArticleDto> {
        return await this.articlesService.getArticleById(params.id);
    }

    @Post()
    public async createArticle(@Body() data: ArticleDto): Promise<ArticleDto> {
        return await this.articlesService.createArticle(data);
    }

    @Put(':id')
    public async updateArticle(@Param() params, @Body() data: ArticleDto): Promise<ArticleDto> {
        return await this.articlesService.updateArticle(params.id, data);
    }

    @Delete(':id')
    public deleteArticle(@Param() params): Promise<ArticleDto> {
        return this.articlesService.deleteArticle(params.id);
    }

}
