import { Animation } from 'animation'
import { Fragment, useEffect } from 'react'
import { useActivity } from 'resources/activity/use-activity'
import { useTimer } from 'resources/timer/use-timer'
import { ButtonDefault } from 'ui/button-default'

import * as S from './app-style'

export function App () {
  const {
    nextActivities,
    currentActivity,
    markActivityComplete,
  } = useActivity()
  const {
    timer,
    isTimerRunning,
    isTimerComplete,
    startTimer,
    pauseTimer,
    resetTimer,
    setTimerDuration,
  } = useTimer()

  useEffect(() => {
    if (isTimerComplete) {
      markActivityComplete()
    }
  }, [isTimerComplete, markActivityComplete])

  useEffect(() => {
    setTimerDuration(currentActivity.durationInSeconds)
  }, [currentActivity, setTimerDuration])

  return (
    <S.Main>
      <S.Divider />

      <S.ActivityHeader>
        <S.CurrentActivity>{currentActivity.category}</S.CurrentActivity>
      </S.ActivityHeader>

      <S.Timer>{timer.minutes}:{timer.seconds}</S.Timer>

      <Animation
        currentCategory={currentActivity.category}
        isRunning={isTimerRunning}
      />

      <S.Schedule>
        <S.ScheduleHeader>
          <S.VisuallyHiddenH3>Activities</S.VisuallyHiddenH3>
          <S.ScheduleTitle>Next</S.ScheduleTitle>
        </S.ScheduleHeader>

        <S.ActivityList>
          {nextActivities.map((activity, index) =>
            <Fragment key={activity.id}>
              <S.ActivityItem>
                <S.ActivityItemTime>
                  {activity.durationInSeconds / 60 < 1
                    ? activity.durationInSeconds
                    : activity.durationInSeconds / 60}
                </S.ActivityItemTime>
                <S.ActivityItemCategory>
                  {activity.category}
                </S.ActivityItemCategory>
              </S.ActivityItem>

              {index <= 1 &&
                <S.ArrowRightIcon aria-hidden='true' focusable='false' />}

            </Fragment>,
          )}
        </S.ActivityList>
      </S.Schedule>

      <S.Actions>
        <S.VisuallyHiddenH3>Actions</S.VisuallyHiddenH3>
        {isTimerRunning
          ? (
            <ButtonDefault onClick={pauseTimer}>
              <S.PauseIcon
                aria-hidden='true'
                focusable='false'
              />
              Pause
            </ButtonDefault>
            )
          : (
            <ButtonDefault onClick={startTimer}>
              <S.PlayIcon
                aria-hidden='true'
                focusable='false'
              />
              Play
            </ButtonDefault>
            )}

        <ButtonDefault onClick={() => resetTimer(currentActivity.durationInSeconds)}>
          <S.ResetIcon
            aria-hidden='true'
            focusable='false'
          />
          Reset
        </ButtonDefault>
      </S.Actions>
    </S.Main>
  )
}
