import { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import RestingAnimation from 'ui/animations/resting.json'
import WorkingAnimation from 'ui/animations/working.json'
import * as S from './animation-style'

type Category = 'work' | 'break'

type AnimationProps = {
  currentCategory: Category
}

export function Animation ({
  currentCategory,
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
        autoplay: true,
        name: 'animation',
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid meet',
        },
      })
    }

    return () => lottie.destroy('animation')
  }, [animationData, containerRef])

  return (
    <S.Wrapper>
      <S.Illustration ref={containerRef} aria-hidden='true' />
    </S.Wrapper>
  )
}
