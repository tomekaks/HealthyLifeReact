import { Exercise } from "./Exercise";

export interface Workout {
  id: number;
  dailySumId: number;
  caloriesBurned: number;
  minutes: number;
  exercise: Exercise;
}
