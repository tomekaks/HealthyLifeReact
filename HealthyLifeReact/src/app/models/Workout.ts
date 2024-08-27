import { Exercise } from "./exercise/Exercise";

export interface Workout {
  id: number;
  dailySumId: number;
  caloriesBurned: number;
  minutes: number;
  exercise: Exercise;
}
