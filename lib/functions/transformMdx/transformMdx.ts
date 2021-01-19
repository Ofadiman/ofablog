import renderToString from 'next-mdx-remote/render-to-string'

import { MDX_COMPONENTS } from '../../const/mdxComponents'
import { Frontmatter } from '../../types/Frontmatter.type'

export const transformMdx = async (content: string, frontmatter: Frontmatter): ReturnType<typeof renderToString> => {
  return renderToString(content, {
    components: MDX_COMPONENTS,
    mdxOptions: {
      rehypePlugins: [],
      remarkPlugins: []
    },
    scope: frontmatter
  })
}
