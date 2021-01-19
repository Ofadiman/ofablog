import { format, parseISO } from 'date-fns'
import React, { VFC } from 'react'

import { StyledDate } from './Date.styles'
import { DateProps } from './Date.types'

export const Date: VFC<DateProps> = ({ className, dateString, formatString = 'LLLL d, yyyy', formatOptions }) => {
  const date = parseISO(dateString)

  return (
    <StyledDate className={className} dateTime={dateString}>
      {format(date, formatString, formatOptions)}
    </StyledDate>
  )
}
