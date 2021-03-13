import React, { MouseEvent, useCallback, useLayoutEffect, useRef, useState, VFC } from 'react'

import { RIPPLE_EFFECT_CONST } from './RippleEffect.const'
import * as S from './RippleEffect.styles'
import { RippleEffectConfig, RippleEffectProps } from './RippleEffect.types'

export const RippleEffect: VFC<RippleEffectProps> = ({
  className,
  color = RIPPLE_EFFECT_CONST.DEFAULT_COLOR,
  millisecondsDuration = RIPPLE_EFFECT_CONST.DEFAULT_RIPPLE_DURATION
}) => {
  const [rippleArray, setRippleArray] = useState<RippleEffectConfig[]>([])
  const timeoutRef = useRef<number>()

  useLayoutEffect(() => {
    if (rippleArray.length > 0) {
      timeoutRef.current = window.setTimeout(() => {
        setRippleArray([])
        clearTimeout(timeoutRef.current)
      }, millisecondsDuration * 4)
    }

    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [rippleArray.length, millisecondsDuration])

  const handleRippleCreate = useCallback((event: MouseEvent): void => {
    const rippleContainer = event.currentTarget.getBoundingClientRect()

    const size = rippleContainer.width > rippleContainer.height ? rippleContainer.width : rippleContainer.height
    const offsetLeft = event.pageX - rippleContainer.x - rippleContainer.width / 2
    const offsetTop = event.pageY - rippleContainer.y - rippleContainer.width / 2
    const id = Math.random()

    setRippleArray((prevState) => [...prevState, { id, offsetLeft, offsetTop, size }])
  }, [])

  return (
    <S.RippleEffectWrapper className={className} onClick={handleRippleCreate}>
      {rippleArray.length > 0 &&
        rippleArray.map(({ id, size, offsetLeft, offsetTop }) => (
          <S.VisualRippleEffect
            color={color}
            key={id}
            millisecondsDuration={millisecondsDuration}
            offsetLeft={offsetLeft}
            offsetTop={offsetTop}
            size={size}
          />
        ))}
    </S.RippleEffectWrapper>
  )
}
