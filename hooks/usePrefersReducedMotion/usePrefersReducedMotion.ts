import { useEffect, useState } from 'react'

const PREFERS_REDUCED_MOTION_QUERY = '(prefers-reduced-motion: no-preference)'
const isServer = typeof window === 'undefined'

export const usePrefersReducedMotion = (): boolean => {
  const [hasReducedMotion, setHasReducedMotion] = useState(() => {
    return isServer ? true : !window.matchMedia(PREFERS_REDUCED_MOTION_QUERY).matches
  })

  useEffect(() => {
    const mediaQueryList = window.matchMedia(PREFERS_REDUCED_MOTION_QUERY)

    const listener = (event: MediaQueryListEvent): void => {
      setHasReducedMotion(!event.matches)
    }
    mediaQueryList.addListener(listener)

    return () => {
      mediaQueryList.removeListener(listener)
    }
  }, [])

  return hasReducedMotion
}
