import { screen } from '@testing-library/react'
import React from 'react'

import { renderComponent } from '../../../functions/renderComponent/renderComponent'
import { SideDrawer } from './SideDrawer.component'

describe('SideDrawer component', () => {
  test('should render children', () => {
    renderComponent(<SideDrawer isOpen={true}>{'children'}</SideDrawer>)

    const drawerChildren = screen.getByText('children')
    expect(drawerChildren).toBeInTheDocument()
  })
})
