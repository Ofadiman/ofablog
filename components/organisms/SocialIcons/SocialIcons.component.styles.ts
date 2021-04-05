import styled, { css } from 'styled-components/macro'

export const SocialIcons = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column;

    a {
      margin: 1.5rem 0;
    }

    svg {
      height: 3rem;
      width: 3rem;
    }

    ${theme.mediaQueries.up.desktop} {
      flex-flow: row;

      a {
        margin: 0 1.5rem;
      }
    }
  `}
`
