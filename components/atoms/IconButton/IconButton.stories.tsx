import { Meta, Story } from '@storybook/react'
import React from 'react'

import HamburgerSvg from '../../../public/icons/hamburger.svg'
import { IconButton } from './IconButton'
import { IconButtonProps } from './IconButton.types'

export default {
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    size: {
      control: {
        options: ['small', 'medium', 'large'],
        type: 'inline-radio'
      },
      defaultValue: 'large'
    }
  },
  title: 'Components/Atoms/IconButton'
} as Meta

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />

export const Main = Template.bind({})
Main.args = {
  children: <HamburgerSvg />
}
