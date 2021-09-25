import { useCallback, useRef, useState } from 'react'

export function useTimer () {
  const intervalRef = useRef<number | null>(null)
  const [timer, setTimer] = useState(0)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [isTimerComplete, setIsTimerComplete] = useState(false)

  const setTimerDuration = useCallback((durationInSeconds: number) => {
    setTimer(durationInSeconds)
  }, [])

  function startTimer () {
    intervalRef.current = window.setInterval(() => {
      setTimer(timer => {
        if (timer - 1 === 0) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current)
          }
          setIsTimerRunning(false)
          setIsTimerComplete(true)
        }

        return timer - 1
      })
    }, 1000)

    setIsTimerRunning(true)
    setIsTimerComplete(false)
  }

  function pauseTimer () {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      setIsTimerRunning(false)
    }
  }

  function resetTimer (durationInSeconds: number) {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      setTimer(durationInSeconds)
      setIsTimerRunning(false)
      setIsTimerComplete(false)
    }
  }

  function formatTimer (durationInSeconds: number) {
    const minutes = Math.floor(durationInSeconds / 60)
    const minutesString = `${Math.floor(durationInSeconds / 60)}`.padStart(2, '0')
    const secondsString = `${durationInSeconds - minutes * 60}`.padStart(2, '0')

    return {
      minutes: minutesString,
      seconds: secondsString,
    }
  }

  return {
    timer: formatTimer(timer),
    setTimerDuration,
    startTimer,
    pauseTimer,
    resetTimer,
    isTimerRunning,
    isTimerComplete,
  }
}
