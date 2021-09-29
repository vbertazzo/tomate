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
  const maxDurationInSeconds = 999

  const handleInputChange = (type: Category) => (e: ChangeEvent<HTMLInputElement>) => {
    const types = {
      work: setWorkDuration,
      break: setBreakDuration,
    }
    const duration = e.target.value.replace(/\D/g, '')

    if (duration.length <= 3) {
      types[type](+duration)
    }
  }

  const handleSave = () => {
    onSave({
      work: workDuration * 60,
      break: breakDuration * 60,
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

      <ButtonDefault onClick={handleSave}>
        <S.SaveIcon aria-hidden='true' focusable='false' />
        Save
      </ButtonDefault>
    </S.Wrapper>,
    document.body,
  )
}
