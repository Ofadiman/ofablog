import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Chip } from './Chip'
import { ChipProps } from './Chip.types'

export default {
  argTypes: {
    children: {
      control: {
        type: 'text'
      },
      defaultValue: 'chip',
      name: 'children'
    },
    onClick: {
      table: {
        disable: true
      }
    }
  },
  title: 'Components/Atoms/Chip'
} as Meta

const Template: Story<ChipProps> = (args) => <Chip {...args} />

export const Main = Template.bind({})
Main.args = {
  isActive: false,
  onClick: () => null
}
