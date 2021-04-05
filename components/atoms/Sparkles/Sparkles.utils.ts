import faker from 'faker'

import { GetSparkleOptions, SparkleProps } from './Sparkles.types'

export const getSparkle = (options: GetSparkleOptions = {}): SparkleProps => {
  const minSparkleSize = options.minSparkleSize ?? 10
  const maxSparkleSize = options.maxSparkleSize ?? 20

  const offsetX = faker.datatype.number({ max: 100, min: 0, precision: 1 })
  const offsetY = faker.datatype.number({ max: 100, min: 0, precision: 1 })
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
    size: faker.datatype.number({ max: maxSparkleSize, min: minSparkleSize, precision: 1 }),
    style
  }
}

export const getSparkles = (quantity: number, options: GetSparkleOptions): SparkleProps[] =>
  new Array(quantity).fill(null).map(() => getSparkle(options))
