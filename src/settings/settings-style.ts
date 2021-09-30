import styled, { css } from 'styled-components/macro'
import { Save } from 'ui/icons'
import { ReactComponent as TomateLogo } from './tomate-logo.svg'

export const Wrapper = styled.section`${({ theme }) => css`
  background: ${theme.colors.background};
  inset: 0;
  max-width: 100%;
  overflow: hidden;
  padding: 4rem;
  position: fixed;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: clamp(2rem, 5vh, 4rem);

  @media (min-width: ${theme.breakpoints.forTabletLandscapeUp}) {
    border: solid 1px ${theme.colors.primary};
    border-radius: 4rem;
    height: 58.4rem;
    left: 50%;
    max-width: fit-content;
    padding: 2rem 6rem;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`}`

export const Logo = styled(TomateLogo)``

export const Configuration = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Header = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  padding-bottom: clamp(0.8rem, 5vw, 1.2rem);
  width: 100%;
`

export const Title = styled.h3`${({ theme }) => css`
  font-size: clam(1.6rem, 5vw, 2.4rem);
  font-weight: ${theme.font.weights.medium};
`}`

export const Description = styled.p`
  font-size: clamp(1.6rem, 5vw, 1.8rem);
`

export const Fieldset = styled.fieldset`
  padding: 1.2rem;

  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: center;
`

export const Input = styled.input`${({ theme }) => css`
  background: transparent;
  border: none;
  border-bottom: solid 2px ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: 1.8rem;
  max-width: 8rem;
  padding: 1rem;
  text-align: center;

  &:focus {
    outline: solid 2px ${theme.colors.primary};
    outline-offset: 0.3rem;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:focus-visible {
    outline: solid 2px ${theme.colors.primary};
    outline-offset: 0.3rem;
  }
`}`

export const Error = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.5rem;
`

export const SaveIcon = styled(Save)``
