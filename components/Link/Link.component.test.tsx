import { screen } from '@testing-library/react'

import { renderComponent } from '../../functions/renderComponent/renderComponent'
import { Link } from './Link.component'

describe('Link component', () => {
  test('should render a link', () => {
    renderComponent(<Link href={'/home'}>{'content'}</Link>)

    const link = screen.getByText('content')

    expect(link).toBeInTheDocument()
  })
})
