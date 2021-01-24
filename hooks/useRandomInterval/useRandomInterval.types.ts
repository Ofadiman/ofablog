export type UseRandomIntervalOptions = {
  callback: () => void
  maxDelay: number | null
  minDelay: number | null
}

export type UseRandomIntervalReturn = {
  cancel: () => void
}
