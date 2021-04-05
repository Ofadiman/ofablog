import { Meta, Story } from '@storybook/react'
import React from 'react'

import { Home } from './Home'
import { HomeProps } from './Home.types'

export default {
  argTypes: {
    Footer: {
      table: {
        disable: true
      }
    },
    Header: {
      table: {
        disable: true
      }
    }
  },
  title: 'Components/Templates/Home'
} as Meta

const Template: Story<HomeProps> = (args) => <Home {...args} />

export const Main = Template.bind({})
Main.args = {
  Footer: <footer>{'footer'}</footer>,
  Header: <header>{'header'}</header>,
  children: 'children'
}
