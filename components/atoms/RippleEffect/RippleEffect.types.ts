export type RippleEffectProps = {
  className?: string
  color?: string
  millisecondsDuration?: number
}

export type RippleEffectConfig = {
  id: number
  offsetLeft: number
  offsetTop: number
  size: number
}

export type StyledRippleEffectProps = Pick<RippleEffectConfig, 'offsetLeft' | 'offsetTop' | 'size'> &
  Pick<RippleEffectProps, 'color' | 'millisecondsDuration'> & {}
