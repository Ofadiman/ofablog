import { GuideFrontmatter } from './GuideFrontmatter.type'

export type GuideData = GuideFrontmatter & {
  guide: string
  id: string
  transformedMdx: string
}
