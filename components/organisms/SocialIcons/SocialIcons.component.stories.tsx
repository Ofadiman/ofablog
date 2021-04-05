import { Meta, Story } from '@storybook/react'
import React from 'react'

import { SOCIAL_ICONS } from '../../../constants/socialIcons'
import { SocialIcons } from './SocialIcons.component'
import { SocialIconsProps } from './SocialIcons.component.types'

export default {
  argTypes: {
    icons: {
      table: {
        disable: true
      }
    }
  },
  title: 'Components/Organisms/SocialIcons'
} as Meta

const Template: Story<SocialIconsProps> = (args) => <SocialIcons {...args} />

export const Main = Template.bind({})
Main.args = {
  icons: SOCIAL_ICONS
}
