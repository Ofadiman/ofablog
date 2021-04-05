import faker from 'faker'
import { useCallback, useEffect, useRef } from 'react'

import { UseRandomIntervalOptions, UseRandomIntervalReturn } from './useRandomInterval.types'

export const useRandomInterval = ({
  callback,
  maxDelay,
  minDelay
}: UseRandomIntervalOptions): UseRandomIntervalReturn => {
  const timeoutId = useRef<number | null>(null)
  const savedCallback = useRef(callback)

  useEffect(() => {
    savedCallback.current = callback
  })

  useEffect(() => {
    if (typeof minDelay === 'number' && typeof maxDelay === 'number') {
      const handleTick = (): void => {
        const nextTickAt = faker.datatype.number({ max: maxDelay, min: minDelay, precision: 1 })
        timeoutId.current = window.setTimeout(() => {
          savedCallback.current()
          handleTick()
        }, nextTickAt)
      }
      handleTick()
    }

    return () => {
      if (timeoutId.current !== null) {
        window.clearTimeout(timeoutId.current)
      }
    }
  }, [minDelay, maxDelay])

  const cancel = useCallback(() => {
    if (timeoutId.current !== null) {
      window.clearTimeout(timeoutId.current)
    }
  }, [])

  return { cancel }
}
