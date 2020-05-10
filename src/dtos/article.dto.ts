import { IsInt, IsString } from 'class-validator';

export class ArticleDto {

  public readonly _id: string;

  @IsString()
  public readonly documentId: string;

  @IsString()
  public readonly groupId: string;

  @IsString()
  public readonly title: string;

  @IsString()
  public readonly description: string;

  @IsString()
  public readonly content: string;

  @IsString()
  public readonly origin: string;

  @IsInt()
  public readonly createDate: number;

}
