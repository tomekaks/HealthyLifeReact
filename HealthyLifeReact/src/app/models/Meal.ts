import { MealItem } from "./MealItem";

export interface Meal {
  id: number;
  dailySumId: number;
  weight: number;
  calories: number;
  proteins: number;
  carbs: number;
  fats: number;
  fiber: number;
  price: number;
  mealItems: MealItem[];
}
