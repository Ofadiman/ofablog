import { Meta, Story } from '@storybook/react'
import React from 'react'

import { ICONS } from '../../../constants/icons'
import { Button } from './Button'
import { ButtonProps } from './Button.types'

export default {
  argTypes: {
    leftIcon: {
      table: {
        disable: true
      }
    },
    rightIcon: {
      table: {
        disable: true
      }
    }
  },
  title: 'Components/Atoms/Button'
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Main = Template.bind({})
Main.args = {
  children: 'click me'
}

export const WithIcons = Template.bind({})
WithIcons.args = {
  children: 'click me',
  className: 'clsx',
  leftIcon: <ICONS.React />,
  onPress: () => {
    console.info('onPress')
  },
  rightIcon: <ICONS.NavigateNext />
}
