import styled, { css } from 'styled-components'

import { StyledTypographyProps } from './Typography.types'

export const Typography = styled.p<StyledTypographyProps>`
  ${({ theme, variant }) => css`
    ${(() => {
      switch (variant) {
        case 'h1':
          return theme.typography.h1
        case 'h2':
          return theme.typography.h2
        case 'h3':
          return theme.typography.h3
        case 'h4':
          return theme.typography.h4
        case 'h5':
          return theme.typography.h5
        case 'h6':
          return theme.typography.h6
        case 'subtitle':
          return theme.typography.subtitle
        case 'button':
          return theme.typography.button
        case 'caption':
          return theme.typography.caption
        case 'paragraph':
          return theme.typography.paragraph
        default:
          return theme.typography.body
      }
    })()}
  `}
`
