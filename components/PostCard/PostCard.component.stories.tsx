import { Meta, Story } from '@storybook/react'
import React from 'react'

import { PostCard } from './PostCard.component'
import { Props } from './PostCard.component.types'

export default {
  title: 'Components/PostCard'
} as Meta

const Template: Story<Props> = (args) => <PostCard {...args} />

export const Main = Template.bind({})
Main.args = {}
