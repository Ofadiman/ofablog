import { getRandomIntegerInRange } from '@ofadiman/shared'

import { GetSparkleOptions, SparkleProps } from './Sparkles.types'

export const getSparkle = (options: GetSparkleOptions = {}): SparkleProps => {
  const minSparkleSize = options.minSparkleSize ?? 10
  const maxSparkleSize = options.maxSparkleSize ?? 20

  const offsetX = getRandomIntegerInRange(0, 100)
  const offsetY = getRandomIntegerInRange(0, 100)
  const style = {} as SparkleProps['style']

  if (offsetX > 50) {
    style.right = `${100 - offsetX}%`
  } else {
    style.left = `${offsetX}%`
  }

  if (offsetY > 50) {
    style.bottom = `${100 - offsetY}%`
  } else {
    style.top = `${offsetY}%`
  }

  return {
    createdAt: Date.now(),
    id: Math.random(),
    size: getRandomIntegerInRange(minSparkleSize, maxSparkleSize),
    style
  }
}

export const getSparkles = (quantity: number, options: GetSparkleOptions): SparkleProps[] =>
  new Array(quantity).fill(null).map(() => getSparkle(options))
