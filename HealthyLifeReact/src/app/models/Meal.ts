import { Product } from "./Product";

export interface Meal {
  id: number;
  dailySumId: number;
  weight: number;
  calories: number;
  proteins: number;
  carbs: number;
  fats: number;
  fiber: number;
  product: Product;
}
