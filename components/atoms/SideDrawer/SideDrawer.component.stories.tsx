import { Meta, Story } from '@storybook/react'
import React from 'react'

import { useToggle } from '../../../hooks/useToggle/useToggle'
import { Button } from '../Button/Button'
import { SideDrawer } from './SideDrawer.component'
import { SideDrawerProps } from './SideDrawer.component.types'

export default {
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    isOpen: {
      table: {
        disable: true
      }
    }
  },
  title: 'Components/Atoms/SideDrawer'
} as Meta

const Template: Story<SideDrawerProps> = (args) => {
  const [isOpen, toggle] = useToggle()

  return (
    <>
      <Button onPress={toggle}>{'Toggle side drawer'}</Button>
      <SideDrawer {...args} isOpen={isOpen}>
        <Button onPress={toggle}>{'Toggle side drawer'}</Button>
      </SideDrawer>
    </>
  )
}

export const Main = Template.bind({})
Main.args = {}
