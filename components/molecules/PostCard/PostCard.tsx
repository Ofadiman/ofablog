import { useHover } from '@react-aria/interactions'
import React, { VFC } from 'react'

import { Typography } from '../../atoms/Typography/Typography'
import * as S from './PostCard.styles'
import { PostCardProps } from './PostCard.types'

export const PostCard: VFC<PostCardProps> = ({ className, excerpt, title, helperText }) => {
  const { isHovered, hoverProps } = useHover({})

  return (
    <S.PostCard className={className} {...hoverProps}>
      <S.Heading isHovered={isHovered}>{title}</S.Heading>
      <S.Body>{excerpt}</S.Body>
      <S.HelperTextWrapper>
        <Typography variant={'paragraph'}>{helperText}</Typography>
        {isHovered && <S.ArrowIcon />}
      </S.HelperTextWrapper>
    </S.PostCard>
  )
}
