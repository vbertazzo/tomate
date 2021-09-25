import styled, { css } from 'styled-components/macro'
import { ArrowRight, Pause, Reset } from 'ui/icons'

export const Main = styled.main`${({ theme }) => css`
  background: ${theme.colors.background};
  grid-template-areas:
    'header'
    'timer'
    'animation'
    'activities'
    'actions'
  ;
  min-height: 100vh;
  padding: 2.4rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  @media (min-width: ${theme.breakpoints.forTabletLandscapeUp}) {
    grid-template-areas:
      'animation' 'header'
      'animation' 'timer'
      'animation' 'activities'
      'animation' 'actions'
    ;
  }
`}`

export const CurrentActivity = styled.h1`
  font-size: clamp(2.4rem, 5vw, 4.8rem);
  font-weight: ${({ theme }) => theme.font.weights.regular}
`

export const Timer = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: clamp(4.8rem, 10vw, 7.2rem);
  font-weight: ${({ theme }) => theme.font.weights.medium}
`

export const Schedule = styled.section`
  display: flex;
  flex-direction: column;
  gap: clamp(2.4rem, 5vw, 3.6rem);
`

export const ScheduleHeader = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(1.6rem, 5vw, 3.2rem);
`

export const PauseIcon = styled(Pause)``

export const ResetIcon = styled(Reset)`
  width: 2rem;
`
