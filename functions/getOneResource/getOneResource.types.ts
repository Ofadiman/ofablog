import { ClassConstructor } from 'class-transformer'

export type GetOneResourceArgs = {
  dto: ClassConstructor<object>
  fileName: string
  resourcePath: string
}
