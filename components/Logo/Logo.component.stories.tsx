import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Logo } from './Logo.component'
import { LogoProps } from './Logo.component.types'

export default {
  title: 'Components/Logo'
} as Meta

const Template: Story<LogoProps> = (args) => <Logo {...args} />

export const Main = Template.bind({})
Main.args = {
  href: '#'
}
