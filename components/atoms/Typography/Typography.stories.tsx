import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Typography } from './Typography'
import { TypographyProps } from './Typography.types'

export default {
  title: 'Components/Atoms/Typography'
} as Meta

const Template: Story<TypographyProps> = (args) => <Typography {...args} />

export const Main = Template.bind({})
Main.args = {}
