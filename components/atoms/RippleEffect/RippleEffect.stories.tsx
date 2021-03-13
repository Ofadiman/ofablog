import { Meta, Story } from '@storybook/react'
import React from 'react'

import { RippleEffect } from './RippleEffect'
import { RippleEffectProps } from './RippleEffect.types'

export default {
  title: 'Components/Atoms/RippleEffect'
} as Meta

const Template: Story<RippleEffectProps> = (args) => (
  <button
    style={{
      backgroundColor: 'rebeccapurple',
      border: 'none',
      borderRadius: '0.5rem',
      color: 'white',
      cursor: 'pointer',
      outline: 'none',
      overflow: 'hidden',
      padding: '1rem',
      position: 'relative'
    }}
    type={'button'}
  >
    {'It is a colorful understanding, sir.'}
    <RippleEffect {...args} />
  </button>
)

export const Main = Template.bind({})
Main.args = {
  millisecondsDuration: 1200
}
