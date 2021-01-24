import styled, { keyframes } from 'styled-components'

const resizeAnimation = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`

export const SparklePath = styled.path.attrs({
  d:
    'M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z'
})``

export const SparkleSvg = styled.svg.attrs({ ariaHidden: true, viewBox: '0 0 160 160' })`
  fill: hsl(50, 100%, 50%);
  @media (prefers-reduced-motion: no-preference) {
    animation-duration: 1200ms;
    animation-fill-mode: forwards;
    animation-name: ${rotateAnimation};
    animation-timing-function: linear;
  }
`

export const SparkleWrapper = styled.span`
  pointer-events: none;
  position: absolute;
  z-index: 550;
  @media (prefers-reduced-motion: no-preference) {
    animation-duration: 1200ms;
    animation-fill-mode: forwards;
    animation-name: ${resizeAnimation};
    animation-timing-function: ease-in-out;
  }
`

export const Children = styled.strong``

export const SparklesWrapper = styled.div`
  display: inline-block;
  position: relative;
`
