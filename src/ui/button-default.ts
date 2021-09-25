import styled, { css } from 'styled-components/macro'

export const ButtonDefault = styled.button`${({ theme }) => css`
  background: ${theme.colors.primary};
  border: none;
  border-radius: 3rem;
  color: ${theme.colors.background};
  font-size: clamp(1.6rem, 5vw, 2rem);
  font-weight: ${theme.font.weights.medium};
  padding: 1.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(0.6rem, 5vw, 0.8rem);

  &:focus {
    outline: solid 2px ${theme.colors.primary};
    outline-offset: 1rem;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:focus-visible {
    outline: solid 2px ${theme.colors.primary};
    outline-offset: 1rem;
  }

  @media (min-width: ${theme.breakpoints.forTabletLandscapeUp}) {
    cursor: pointer;
    transition: background 0.3s ease-in-out;

    &:hover {
      background: ${theme.colors.primaryDark}
    }
  }
`}`
