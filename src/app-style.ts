import styled, { css } from 'styled-components/macro'
import { ButtonDefault } from 'ui/button-default'
import { ArrowRight, Pause, Reset, Play, Settings } from 'ui/icons'

export const Main = styled.main`${({ theme }) => css`
  background: ${theme.colors.background};
  min-height: 100%;
  padding: clamp(1rem, 5vw, 2.4rem);

  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    'header'
    'timer'
    'animation'
    'schedule'
    'actions'
  ;
  gap: clamp(0.5rem, 1vh, 2rem);
  align-items: center;
  justify-content: center;

  @media (min-width: ${theme.breakpoints.forTabletLandscapeUp}) {
    grid-template-columns: 1fr 1rem 1fr;
    grid-template-areas:
      'animation divider .'
      'animation divider .'
      'animation divider header'
      'animation divider timer'
      'animation divider schedule'
      'animation divider actions'
      'animation divider .'
      'animation divider .'
    ;
    align-items: center;
    justify-content: center;
  }
`}`

export const SettingsButton = styled(ButtonDefault)`${({ theme }) => css`
  background: transparent;
  position: absolute;
  top: 2rem;
  right: 2rem;

  &:focus {
    outline-offset: 0.1rem;
  }

  &:focus-visible {
    outline-offset: 0.1rem;
  }

  @media (min-width: ${theme.breakpoints.forTabletLandscapeUp}) {
    &:hover {
      background: transparent;

      ${SettingsIcon} {
        color: ${theme.colors.primary};
      }
    }
  }
`}`

export const SettingsIcon = styled(Settings)`
  color: ${({ theme }) => theme.colors.white}
`

export const Divider = styled.div`${({ theme }) => css`
  display: none;

  @media (min-width: ${theme.breakpoints.forTabletLandscapeUp}) {
    background: ${theme.colors.gray};
    display: block;
    grid-area: divider;
    height: 80%;
    opacity: 0.3;
    width: 1px;
  }
`}`

export const ActivityHeader = styled.header`
  grid-area: header;
`

export const CurrentActivity = styled.h1`
  font-size: clamp(2.4rem, 5vw, 4.8rem);
  font-weight: ${({ theme }) => theme.font.weights.regular};
  text-align: center;
  text-transform: capitalize;
`

export const Timer = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: clamp(4.8rem, 10vw, 7.2rem);
  font-weight: ${({ theme }) => theme.font.weights.medium};
  grid-area: timer;
  text-align: center;
`

export const Schedule = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: clamp(1.4rem, 5vw, 2.2rem);
  justify-content: center;
  grid-area: schedule;
`

export const ScheduleHeader = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  width: max(50%, 24rem);
  padding-bottom: clamp(0.8rem, 5vw, 1.2rem);
`

export const ScheduleTitle = styled.h3`${({ theme }) => css`
  font-size: clam(1.6rem, 5vw, 2.4rem);
  font-weight: ${theme.font.weights.medium};
`}`

export const VisuallyHiddenH3 = styled.h3`
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const ActivityList = styled.ul`
  display: flex;
  align-items: center;
  gap: clamp(1.6rem, 5vw, 2.4rem);
  justify-content: center;
`

export const ActivityItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: clamp(0.2rem, 2vw, 0.4rem);
  justify-content: center;
`

export const ArrowRightIcon = styled(ArrowRight)`
  height: clamp(2rem, 5vw, 3.2rem);
  width: clamp(2rem, 5vw, 3.2rem);
  stroke: ${({ theme }) => theme.colors.secondary};
`

export const ActivityItemTime = styled.p`
  font-size: clamp(2.4rem, 5vw, 3.6rem);
`

export const ActivityItemCategory = styled.p`
  font-size: clamp(1.8rem, 5vw, 2.6rem);
`

export const Actions = styled.section`
  grid-area: actions;
  padding: 1rem;

  display: flex;
  align-items: center;
  gap: clamp(1.6rem, 5vw, 3.2rem);
  justify-content: center;
`

export const PauseIcon = styled(Pause)``

export const ResetIcon = styled(Reset)`
  width: 2rem;
`

export const PlayIcon = styled(Play)``
