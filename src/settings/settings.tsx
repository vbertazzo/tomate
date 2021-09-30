import { ChangeEvent, useState } from 'react'
import { createPortal } from 'react-dom'
import { Activity, Category } from 'resources/activity/types'
import { ButtonDefault } from 'ui/button-default'
import * as S from './settings-style'

type SettingsProps = {
  onSave: (config: Record<Category, number>) => void
  activities: Activity[]
}

export function Settings ({
  onSave,
  activities,
}: SettingsProps) {
  const [workDuration, setWorkDuration] = useState(activities[1].durationInSeconds / 60)
  const [breakDuration, setBreakDuration] = useState(activities[0].durationInSeconds / 60)
  const [error, setError] = useState({ active: false, message: '' })

  const minDurationInSeconds = 1
  const maxDurationInSeconds = 999
  const maxInputDigits = 3

  const handleInputChange = (type: Category) => (e: ChangeEvent<HTMLInputElement>) => {
    const types = {
      work: setWorkDuration,
      break: setBreakDuration,
    }
    const duration = e.target.value.replace(/\D/g, '')

    if (duration.length <= maxInputDigits) {
      types[type](+duration)
    }
  }

  const handleSave = () => {
    if (workDuration <= 0 || breakDuration <= 0) {
      setError({
        active: true,
        message: 'Please, enter values greater than zero.',
      })

      return
    }

    onSave({
      work: workDuration * 60,
      break: breakDuration * 60,
    })
    setError({
      active: false,
      message: '',
    })
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
            onChange={handleInputChange('work')}
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
            onChange={handleInputChange('break')}
            type='number'
            value={breakDuration}
          />
          <span>minutes</span>
        </S.Fieldset>
      </S.Configuration>

      {error.active && <S.Error>{error.message}</S.Error>}

      <ButtonDefault onClick={handleSave}>
        <S.SaveIcon aria-hidden='true' focusable='false' />
        Save
      </ButtonDefault>
    </S.Wrapper>,
    document.body,
  )
}
