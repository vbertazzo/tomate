import { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import RestingAnimation from 'ui/animations/resting.json'
import WorkingAnimation from 'ui/animations/working.json'
import { Category } from 'resources/activity/types'
import * as S from './animation-style'

type AnimationProps = {
  currentCategory: Category
  isRunning: boolean
}

export function Animation ({
  currentCategory,
  isRunning,
}: AnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationData =
    currentCategory === 'break' ? RestingAnimation : WorkingAnimation

  useEffect(() => {
    if (containerRef.current) {
      lottie.loadAnimation({
        container: containerRef.current,
        animationData: animationData,
        renderer: 'svg',
        loop: true,
        autoplay: false,
        name: 'animation',
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid meet',
        },
      })
    }

    return () => lottie.destroy('animation')
  }, [animationData, containerRef])

  useEffect(() => {
    if (isRunning) {
      lottie.play('animation')
    } else {
      lottie.pause('animation')
    }
  }, [isRunning])

  return (
    <S.Wrapper>
      <S.Illustration
        ref={containerRef}
        aria-hidden='true'
        shrink={currentCategory === 'break'}
      />
    </S.Wrapper>
  )
}
