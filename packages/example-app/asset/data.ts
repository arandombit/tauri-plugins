export interface Workout {
  startDate: string
  endDate: string
  workoutType: string
  calories: number
  distance: number
}

export const workout: Workout = {
  startDate: new Date(2024, 12, 20).toISOString(),
  endDate: new Date(2024, 12, 20, 1).toISOString(),
  workoutType: '',
  calories: 400,
  distance: 5
};
