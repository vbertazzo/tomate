import { Animation } from 'animation'
import { ButtonDefault } from 'ui/button-default'

import * as S from './app-style'

export function App () {
  return (
    <S.Main>
      <S.Divider />

      <S.ActivityHeader>
        <S.CurrentActivity>Working</S.CurrentActivity>
      </S.ActivityHeader>

      <S.Timer>25:00</S.Timer>

      <Animation currentCategory='work' />

      <S.Schedule>
        <S.ScheduleHeader>
          <S.VisuallyHiddenH3>Activities</S.VisuallyHiddenH3>
          <S.ScheduleTitle>Next</S.ScheduleTitle>
        </S.ScheduleHeader>

        <S.ActivityList>
          <S.ActivityItem>
            <S.ActivityItemTime>10</S.ActivityItemTime>
            <S.ActivityItemCategory>break</S.ActivityItemCategory>
          </S.ActivityItem>

          <S.ArrowRightIcon aria-hidden='true' focusable='false' />

          <S.ActivityItem>
            <S.ActivityItemTime>25</S.ActivityItemTime>
            <S.ActivityItemCategory>work</S.ActivityItemCategory>
          </S.ActivityItem>

          <S.ArrowRightIcon aria-hidden='true' focusable='false' />

          <S.ActivityItem>
            <S.ActivityItemTime>10</S.ActivityItemTime>
            <S.ActivityItemCategory>break</S.ActivityItemCategory>
          </S.ActivityItem>
        </S.ActivityList>
      </S.Schedule>

      <S.Actions>
        <S.VisuallyHiddenH3>Actions</S.VisuallyHiddenH3>
        <ButtonDefault>
          <S.PauseIcon aria-hidden='true' focusable='false' />
          Pause
        </ButtonDefault>
        <ButtonDefault>
          <S.ResetIcon aria-hidden='true' focusable='false' />
          Reset
        </ButtonDefault>
      </S.Actions>
    </S.Main>
  )
}
