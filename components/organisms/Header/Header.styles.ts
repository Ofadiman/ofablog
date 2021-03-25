import ReactHeadroom from 'react-headroom'
import styled from 'styled-components'

import { Link } from '../../atoms/Link/Link'

export const NavLink = styled(Link)`
  padding: 1rem 3rem;
`

export const IconsWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`

export const Home = styled(Link).attrs({ href: '/' })`
  position: relative;
  overflow: hidden;
  height: 4rem;
  border-radius: 50%;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 60%;
    height: 60%;
  }
`

export const Headroom = styled(ReactHeadroom)`
  .headroom {
    background-color: white;
    box-shadow: 0 0 5px 1px hsl(0, 0%, 90%);
  }
`

export const Header = styled.header`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 64px;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1080px;
  padding: 0 3rem;
`
