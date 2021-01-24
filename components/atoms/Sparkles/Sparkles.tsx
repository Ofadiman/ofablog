import React, { useState, VFC } from 'react'

import { usePrefersReducedMotion } from '../../../hooks/usePrefersReducedMotion/usePrefersReducedMotion'
import { useRandomInterval } from '../../../hooks/useRandomInterval/useRandomInterval'
import { SPARKLES_CONST } from './Sparkles.const'
import * as S from './Sparkles.styles'
import { SparklesProps } from './Sparkles.types'
import { getSparkle, getSparkles } from './Sparkles.utils'

export const Sparkles: VFC<SparklesProps> = ({ className, children, maxSparkleSize, minSparkleSize }) => {
  const hasReducedMotion = usePrefersReducedMotion()
  const [sparkles, setSparkles] = useState(() => {
    if (hasReducedMotion) {
      return []
    }

    return getSparkles(3, { maxSparkleSize, minSparkleSize })
  })

  useRandomInterval({
    callback: () => {
      setSparkles((prevSparkles) => {
        const newSparkle = getSparkle({ maxSparkleSize, minSparkleSize })
        const nextSparkles = prevSparkles.filter((sparkle) => {
          const delta = Date.now() - sparkle.createdAt

          return delta < SPARKLES_CONST.SPARKLE_DELTA
        })

        return [...nextSparkles, newSparkle]
      })
    },
    maxDelay: hasReducedMotion ? null : SPARKLES_CONST.MAX_DELAY,
    minDelay: hasReducedMotion ? null : SPARKLES_CONST.MIN_DELAY
  })

  return (
    <S.SparklesWrapper className={className}>
      {sparkles.map(({ style, size, id }) => (
        <S.SparkleWrapper key={id} style={style}>
          <S.SparkleSvg height={size} width={size}>
            <S.SparklePath />
          </S.SparkleSvg>
        </S.SparkleWrapper>
      ))}
      <S.Children>{children}</S.Children>
    </S.SparklesWrapper>
  )
}
