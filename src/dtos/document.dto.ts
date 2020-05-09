import { IsInt, IsString } from 'class-validator';

export class DocumentDto {

  public readonly _id: string;

  @IsString()
  public readonly title: string;

  @IsInt()
  public readonly createDate: number;
}
