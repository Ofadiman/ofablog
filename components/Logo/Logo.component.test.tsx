import { screen } from '@testing-library/react'

import { renderComponent } from '../../functions/renderComponent/renderComponent'
import { Logo } from './Logo.component'

describe('Logo component', () => {
  test('should render logo', () => {
    renderComponent(<Logo href={'/home'} />)

    const link = screen.getByRole('link')

    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/home')
  })
})
