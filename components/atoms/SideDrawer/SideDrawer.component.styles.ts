import { animated } from '@react-spring/web'
import styled, { css } from 'styled-components/macro'

export const SideDrawer = styled(animated.div)`
  ${({ theme }) => css`
    background-color: ${theme.palette.background};
    height: 100vh;
    position: absolute;
    right: 0;
    top: 0;
    width: 100vw;
    z-index: ${theme.zIndex.drawer};
  `}
`
