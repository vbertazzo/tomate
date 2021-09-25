import { useCallback, useEffect, useState } from 'react'
import { Activity } from './types'

export function useActivity () {
  const defaultActivities: Activity[] = [
    { id: 1, category: 'work', durationInSeconds: 5, isComplete: false },
    { id: 2, category: 'break', durationInSeconds: 6, isComplete: false },
    { id: 3, category: 'work', durationInSeconds: 5, isComplete: false },
    { id: 4, category: 'break', durationInSeconds: 6, isComplete: false },
  ]
  const [activities, setActivities] = useState<Activity[]>(defaultActivities)
  const currentActivity = activities[0]

  useEffect(() => {
    function moveToNextActivity () {
      if (currentActivity.isComplete) {
        setActivities(activities =>
          activities
            .slice(1)
            .concat({
              ...activities[0],
              id: activities[0].id + 4,
              isComplete: false,
            }),
        )
      }
    }

    moveToNextActivity()
  }, [currentActivity])

  const markActivityComplete = useCallback(() => {
    setActivities(activities => activities.map(activity => {
      if (activity.id === activities[0].id) {
        return {
          ...activity,
          isComplete: true,
        }
      }

      return activity
    }))
  }, [])

  return {
    activities,
    nextActivities: activities.slice(1),
    currentActivity,
    markActivityComplete,
  }
}
