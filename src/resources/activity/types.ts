export type Category = 'work' | 'break'

export type Activity = {
  id: number
  category: Category
  durationInSeconds: number
  isComplete: boolean
}
