import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Header } from './Header'
import { HeaderProps } from './Header.types'

export default {
  title: 'Components/Organisms/Header'
} as Meta

const Template: Story<HeaderProps> = (args) => <Header {...args} />

export const Main = Template.bind({})
Main.args = {}
