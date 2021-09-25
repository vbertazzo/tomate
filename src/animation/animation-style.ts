import styled, { css } from 'styled-components/macro'

export const Wrapper = styled.div`
  grid-area: animation;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Illustration = styled.div`${({ theme }) => css`
  height: 15rem;

  @media (min-width: ${theme.breakpoints.forTabletLandscapeUp}) {
    width: 90%;
    height: 100%;
  }
`}`
