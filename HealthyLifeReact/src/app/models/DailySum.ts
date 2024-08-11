import { Meal } from "./Meal";
import { Workout } from "./Workout";

export interface DailySum {
  id: number;
  date: string;
  userId: string;
  calorie: number;
  proteins: number;
  carbs: number;
  fats: number;
  fiber: number;
  caloriesBurned: number;
  meals: Meal[];
  workouts: Workout[];
}
