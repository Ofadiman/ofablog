import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Typography } from './Typography'
import { TypographyProps } from './Typography.types'

export default {
  argTypes: {
    as: {
      control: {
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', undefined],
        type: 'inline-radio'
      },
      defaultValue: undefined
    },
    variant: {
      control: {
        options: ['button', 'caption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle', 'paragraph'],
        type: 'inline-radio'
      },
      defaultValue: 'h1'
    }
  },
  title: 'Components/Atoms/Typography'
} as Meta

const Template: Story<TypographyProps> = (args) => <Typography {...args} />

export const Main = Template.bind({})
Main.args = {
  children: 'basic typography'
}
