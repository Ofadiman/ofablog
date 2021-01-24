import { ReactNode } from 'react'

export type GetSparkleOptions = {
  maxSparkleSize?: number
  minSparkleSize?: number
}

export type SparkleProps = {
  createdAt: number
  id: number
  size: number
  style: {
    bottom?: string
    left?: string
    right?: string
    top?: string
  }
}

export type SparklesProps = GetSparkleOptions & {
  children: ReactNode
  className?: string
}
