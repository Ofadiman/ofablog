import { ReactElement } from 'react'

import { PageLayout } from '../../components/PageLayout/PageLayout.component'
import { HeaderContainer } from '../Header/Header.container'
import { PageLayoutContainerProps } from './PageLayout.container.types'

export const PageLayoutContainer = ({ children }: PageLayoutContainerProps): ReactElement | null => {
  return (
    <PageLayout Footer={<footer style={{ background: 'blue' }}>{'footer'}</footer>} Header={<HeaderContainer />}>
      {children}
    </PageLayout>
  )
}
