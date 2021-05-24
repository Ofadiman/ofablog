import { IsEnum, IsNotEmpty, IsString } from 'class-validator'

import { IsISOStringDate } from '../decorators/IsISOStringDate/IsISOStringDate.decorator'
import { PostCategories } from '../enums/PostCategories.enum'

export class PostFrontMatterDto {
  @IsString()
  @IsNotEmpty()
  public title: string

  @IsString()
  @IsNotEmpty()
  public excerpt: string

  @IsNotEmpty()
  @IsISOStringDate()
  public readonly createdAt: string

  @IsNotEmpty()
  @IsISOStringDate()
  public readonly publishedAt: string

  @IsNotEmpty()
  @IsEnum(PostCategories, { each: true })
  public readonly categories: string[]
}
