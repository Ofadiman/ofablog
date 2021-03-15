import styled, { css } from 'styled-components'

export const Chip = styled.button<{ isActive: boolean; isClickable: boolean }>`
  ${({ theme, isActive, isClickable }) => css`
    ${theme.typography.caption};
    background-color: transparent;
    border-color: ${isActive ? theme.palette.primary.main : theme.palette.typography.light};
    border-radius: 50px;
    border-style: solid;
    border-width: 0.2rem;
    color: ${isActive ? theme.palette.primary.main : theme.palette.typography.light};
    cursor: ${isClickable ? 'pointer' : 'auto'};
    outline: none;
    overflow: hidden;
    padding: 0.8rem 2rem;
    position: relative;

    :hover {
      border-color: ${theme.palette.primary.light};
      color: ${theme.palette.primary.light};
    }
  `}
`
