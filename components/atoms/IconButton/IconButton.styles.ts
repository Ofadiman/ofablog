import styled, { css } from 'styled-components'

import { WrapperProps } from './IconButton.types'
import { getSize } from './IconButton.utils'

export const Wrapper = styled.button<WrapperProps>`
  ${({ size }) => css`
    align-items: center;
    background-color: transparent;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    height: ${getSize(size)};
    justify-content: center;
    outline: none;
    overflow: hidden;
    padding: 0.5rem;
    position: relative;
    width: ${getSize(size)};

    svg {
      max-height: 100%;
      max-width: 100%;
    }
  `}
`
