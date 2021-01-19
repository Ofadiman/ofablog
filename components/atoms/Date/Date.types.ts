import { format } from 'date-fns'

export type DateProps = {
  className?: string
  dateString: string
  formatOptions?: Parameters<typeof format>[2]
  formatString?: string
}
