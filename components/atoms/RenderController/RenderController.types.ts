import { ReactNode } from 'react'

export type RenderControllerProps = {
  children: ReactNode
  renderOn?: { all?: boolean; desktop?: boolean; mobile?: boolean; tablet?: boolean }
}
