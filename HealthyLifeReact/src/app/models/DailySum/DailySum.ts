import { Meal } from "../Meal";
import { Workout } from "../Workout";

export interface DailySum {
  id: number;
  userId: string;
  date: string;
  totalCalories: number;
  totalProteins: number;
  totalCarbs: number;
  totalFats: number;
  totalFiber: number;
  totalPrice: number;
  caloriesBurned: number;
  meals: Meal[];
  workouts: Workout[];
}
