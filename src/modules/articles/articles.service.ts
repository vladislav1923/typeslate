import { Injectable } from '@nestjs/common';
import { ArticleInterface } from '../../interfaces/article.interface';

@Injectable()
export class ArticlesService {

    public getArticlesByGroupId(): ArticleInterface[] {
        return [];
    }

    public createArticle(): ArticleInterface {
        return {} as ArticleInterface;
    }

    public updateArticle(): ArticleInterface {
        return {} as ArticleInterface;
    }

    public deleteArticle(): ArticleInterface {
        return {} as ArticleInterface;
    }

}
