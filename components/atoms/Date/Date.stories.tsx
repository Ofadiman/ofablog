import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Date } from './Date'
import { DateProps } from './Date.types'

export default {
  title: 'Components/Atoms/Date'
} as Meta

const Template: Story<DateProps> = (args) => <Date {...args} />

export const Main = Template.bind({})
Main.args = {
  dateString: '2021-01-19T19:18:15.352Z'
}
