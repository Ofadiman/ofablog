import styled, { css } from 'styled-components'

export const TextWrapper = styled.span`
  padding: 0 0.5rem;
`

export const IconWrapper = styled.span`
  height: 2rem;
  margin: 0 0.5rem;
  width: 2rem;
`

export const Button = styled.button`
  ${({ theme }) => css`
    ${theme.typography.button};
    background-color: ${theme.palette.primary.main};
    border: none;
    border-radius: 0.4rem;
    color: ${theme.palette.primary.contrastText};
    cursor: pointer;
    display: flex;
    outline: none;
    overflow: hidden;
    padding: 1rem 1rem;
    position: relative;

    :hover {
      background-color: ${theme.palette.primary.hover};
    }

    :focus {
      box-shadow: 0 0 0 2px ${theme.palette.primary.outline};
    }
  `}
`
