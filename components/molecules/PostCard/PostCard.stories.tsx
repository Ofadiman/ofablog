import { Meta, Story } from '@storybook/react'
import React from 'react'

import { PostCard } from './PostCard'
import { PostCardProps } from './PostCard.types'

export default {
  title: 'Components/Molecules/PostCard'
} as Meta

const Template: Story<PostCardProps> = (args) => <PostCard {...args} />

export const Main = Template.bind({})
Main.args = {
  excerpt: 'Beauty at the port was the sonic shower of advice, discovered to an ordinary crew mate.',
  helperText: 'Read more',
  title: 'Why does the nano machine yell?'
}
