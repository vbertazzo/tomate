import { ChangeEvent, useState } from 'react'
import { createPortal } from 'react-dom'
import { Category } from 'resources/activity/types'
import { ButtonDefault } from 'ui/button-default'
import * as S from './settings-style'

type SettingsProps = {
  onSave: (config: Record<Category, number>) => void
}

export function Settings ({ onSave }: SettingsProps) {
  const [workDuration, setWorkDuration] = useState(25)
  const [breakDuration, setBreakDuration] = useState(10)

  const minDurationInSeconds = 1
  const maxDurationInSeconds = 1440

  const handleWorkInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const duration = +e.target.value

    if (duration >= minDurationInSeconds && duration <= maxDurationInSeconds) {
      setWorkDuration(+e.target.value)
    }
  }

  const handleBreakInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const duration = +e.target.value

    if (duration >= minDurationInSeconds && duration <= maxDurationInSeconds) {
      setBreakDuration(+e.target.value)
    }
  }

  const handleSave = () => {
    onSave({ work: workDuration * 60, break: breakDuration * 60 })
  }

  return createPortal(
    <S.Wrapper>
      <S.Logo />

      <S.Configuration>
        <S.Header>
          <S.Title>Settings</S.Title>
        </S.Header>

        <S.Description>How long will each activity take?</S.Description>

        <S.Fieldset>
          <legend>Work</legend>
          <S.Input
            autoFocus
            max={maxDurationInSeconds}
            min={minDurationInSeconds}
            onChange={handleWorkInputChange}
            type='number'
            value={workDuration}
          />
          <span>minutes</span>
        </S.Fieldset>

        <S.Fieldset>
          <legend>Break</legend>
          <S.Input
            max={maxDurationInSeconds}
            min={minDurationInSeconds}
            onChange={handleBreakInputChange}
            type='number'
            value={breakDuration}
          />
          <span>minutes</span>
        </S.Fieldset>
      </S.Configuration>

      <ButtonDefault onClick={handleSave}>
        <S.SaveIcon aria-hidden='true' focusable='false' />
        Save
      </ButtonDefault>
    </S.Wrapper>,
    document.body,
  )
}
