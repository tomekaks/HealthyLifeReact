import { Meal } from "../Meal";
import { Workout } from "../Workout";

export interface DailySum {
  id: number;
  userId: string;
  date: string;
  calories: number;
  proteins: number;
  carbs: number;
  fats: number;
  fiber: number;
  price: number;
  caloriesBurned: number;
  meals: Meal[];
  workouts: Workout[];
}
