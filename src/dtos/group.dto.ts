import { IsInt, IsString } from 'class-validator';

export class GroupDto {

  public readonly _id: string;

  @IsString()
  public readonly documentId: string;

  @IsString()
  public readonly title: string;

  @IsString()
  public readonly description: string;

  @IsInt()
  public readonly createDate: number;
}
