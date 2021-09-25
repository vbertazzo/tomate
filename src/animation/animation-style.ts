import styled, { css } from 'styled-components/macro'

export const Wrapper = styled.div`
  grid-area: animation;

  display: flex;
  align-items: center;
  justify-content: center;
`

type IllustrationProps = {
  shrink: boolean
}

export const Illustration = styled.div<IllustrationProps>`${({
  theme,
  shrink,
}) => css`
  max-width: ${shrink ? '65%' : '90%'};

  @media (min-width: ${theme.breakpoints.forTabletLandscapeUp}) {
    width: 90%;
    height: 100%;
  }
`}`
