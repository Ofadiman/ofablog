import styled, { css } from 'styled-components'

import { ICONS } from '../../../constants/icons'
import { Typography } from '../../atoms/Typography/Typography'
import { HeadingProps } from './PostCard.types'

export const ArrowIcon = styled(ICONS.NavigateNext)`
  ${({ theme }) => css`
    margin-left: 0.8rem;
    path {
      stroke: ${theme.palette.primary.main};
    }
  `}
`

export const HelperTextWrapper = styled.span`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  padding: 1rem 0;
`

export const Body = styled(Typography).attrs({ variant: 'paragraph' })`
  padding: 1.6rem 0;
`

export const Heading = styled(Typography).attrs({ variant: 'h3' })<HeadingProps>`
  ${({ theme, isHovered }) => css`
    color: ${isHovered ? theme.palette.primary.main : theme.palette.typography.main};
    padding: 1rem 0;
  `}
`

export const PostCard = styled.div`
  cursor: pointer;
  padding: 2rem 0;
`
