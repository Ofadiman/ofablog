import { Meta, Story } from '@storybook/react'
import React from 'react'

import { ThemeSwitcher } from './ThemeSwitcher.component'
import { ThemeSwitcherProps } from './ThemeSwitcher.component.types'

export default {
  title: 'Components/ThemeSwitcher'
} as Meta

const Template: Story<ThemeSwitcherProps> = (args) => <ThemeSwitcher {...args} />

export const Main = Template.bind({})
Main.args = {
  isDarkModeOn: true,
  onMoonClick: () => null,
  onSunClick: () => null
}
