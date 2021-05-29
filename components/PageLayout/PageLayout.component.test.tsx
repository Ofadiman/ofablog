import { screen } from '@testing-library/react'

import { renderComponent } from '../../functions/renderComponent/renderComponent'
import { PageLayout } from './PageLayout.component'
import { t } from './PageLayout.component.test.utils'

describe('PageLayout component', () => {
  test('should render children in main tag, header and footer ', () => {
    renderComponent(
      <PageLayout Footer={<footer>{t.footerContent}</footer>} Header={<header>{t.headerContent}</header>}>
        {t.children}
      </PageLayout>
    )

    const header = screen.getByText(t.headerContent)
    const footer = screen.getByText(t.footerContent)
    const children = screen.getByText(t.children)

    expect(header).toBeInTheDocument()
    expect(footer).toBeInTheDocument()
    expect(children).toBeInTheDocument()
    expect(children.tagName).toEqual('MAIN')
  })
})
