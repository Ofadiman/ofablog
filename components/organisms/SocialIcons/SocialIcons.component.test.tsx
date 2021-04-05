import { screen } from '@testing-library/react'
import React from 'react'

import { SOCIAL_ICONS } from '../../../constants/socialIcons'
import { renderComponent } from '../../../functions/renderComponent/renderComponent'
import { SocialIcons } from './SocialIcons.component'

describe('SocialIcons component', () => {
  test('should render social links', () => {
    renderComponent(<SocialIcons icons={SOCIAL_ICONS} />)

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(SOCIAL_ICONS.length)
  })
})
