import { IsISOStringDate } from './IsISOStringDate.decorator'

class Post {
  @IsISOStringDate()
  public createdAt: string

  public constructor(createdAt: string) {
    this.createdAt = createdAt
  }
}

export const _invalidCreatedAtPost = new Post('2021-01-19')

export const _validCreatedAtPost = new Post('2021-01-19T19:18:15.352Z')
