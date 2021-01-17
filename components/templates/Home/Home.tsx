import React, { VFC } from 'react'

import { StyledHome, StyledMain } from './Home.styles'
import { HomeProps } from './Home.types'

export const Home: VFC<HomeProps> = ({ children, Footer, Header }) => (
  <StyledHome>
    <Header />
    <StyledMain>{children}</StyledMain>
    <Footer />
  </StyledHome>
)
