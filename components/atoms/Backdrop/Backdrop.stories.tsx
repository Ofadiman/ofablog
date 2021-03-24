import { Meta, Story } from '@storybook/react'
import React from 'react'

import { useToggle } from '../../../hooks/useToggle/useToggle'
import { Button } from '../Button/Button'
import { Backdrop } from './Backdrop'
import { BackdropProps } from './Backdrop.types'

export default {
  title: 'Components/Atoms/Backdrop'
} as Meta

const Template: Story<BackdropProps> = (args) => {
  const [isBackdropVisible, toggleIsBackdropVisible] = useToggle()

  return (
    <>
      <Button onPress={toggleIsBackdropVisible}>{'toggle backdrop'}</Button>
      <Backdrop {...args} isVisible={isBackdropVisible} onClick={toggleIsBackdropVisible} />
    </>
  )
}

export const Main = Template.bind({})
Main.args = {}
