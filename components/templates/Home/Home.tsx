import React, { VFC } from 'react'

import * as S from './Home.styles'
import { HomeProps } from './Home.types'

export const Home: VFC<HomeProps> = ({ children, Footer, Header }) => (
  <>
    {Header}
    <S.Main>{children}</S.Main>
    {Footer}
  </>
)
