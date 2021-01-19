import { Frontmatter } from './Frontmatter.type'

export type PostData = Frontmatter & { id: string; transformedMdx: string }
