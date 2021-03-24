import styled, { css } from 'styled-components'

export const Backdrop = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.palette.backdrop};
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: ${theme.zIndex.modal};
  `}
`
