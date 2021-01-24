import { Meta, Story } from '@storybook/react'
import React from 'react'

import { storybookAssets } from '../../../lib/storybook-assets/storybook-assets'
import { Sparkles } from './Sparkles'
import { SparklesProps } from './Sparkles.types'

export default {
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    maxSparkleSize: {
      control: {
        options: [20, 50],
        type: 'inline-radio'
      },
      defaultValue: 20
    },
    minSparkleSize: {
      control: {
        options: [10, 20],
        type: 'inline-radio'
      },
      defaultValue: 10
    }
  },
  title: 'Components/Atoms/Sparkles'
} as Meta

const Template: Story<SparklesProps> = (args) => <Sparkles {...args} />

export const OnText = Template.bind({})
OnText.args = {
  children: 'Quickly, indeed.'
}

export const OnImage = Template.bind({})
OnImage.args = {
  children: <img alt={'lorem image'} src={storybookAssets.programming} />
}
