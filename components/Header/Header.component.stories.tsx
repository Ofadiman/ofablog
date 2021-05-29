import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Header } from './Header.component'
import { HeaderProps } from './Header.component.types'

export default {
  title: 'Components/Header'
} as Meta

const Template: Story<HeaderProps> = (args) => <Header {...args} />

export const Main = Template.bind({})
Main.args = {}
