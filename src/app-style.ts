import styled, { css } from 'styled-components/macro'
import { ArrowRight, Pause, Reset, Play } from 'ui/icons'

export const Main = styled.main`${({ theme }) => css`
  background: ${theme.colors.background};
  min-height: 100vh;
  padding: 2.4rem;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    'header'
    'timer'
    'animation'
    'schedule'
    'actions'
  ;


  @media (min-width: ${theme.breakpoints.forTabletLandscapeUp}) {
    grid-template-columns: 1fr 1rem 1fr;
    grid-template-areas:
      'animation divider header'
      'animation divider timer'
      'animation divider schedule'
      'animation divider actions'
    ;
    align-items: center;
    justify-content: center;
  }
`}`

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
  gap: clamp(2.4rem, 5vw, 3.6rem);
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
  gap: clamp(0.2rem, 2vw, 1rem);
  justify-content: center;
`

export const ArrowRightIcon = styled(ArrowRight)`
  height: clamp(2rem, 5vw, 3.2rem);
  width: clamp(2rem, 5vw, 3.2rem);
`

export const ActivityItemTime = styled.p`
  font-size: clamp(2.4rem, 5vw, 3.6rem);
`

export const ActivityItemCategory = styled.p`
  font-size: clamp(1.8rem, 5vw, 2.6rem);
`

export const Actions = styled.section`
  grid-area: actions;

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
