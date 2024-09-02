import { createContext, useContext } from "react";
import ProductStore from "./productStore";
import MealItemStore from "./mealItemStore";
import MealStore from "./mealStore";
import DailySumStore from "./dailySumStore";
import DailyGoalStore from "./dailyGoalStore";
import ExerciseStore from "./exerciseStore";
import WorkoutStore from "./workoutStore";

interface Store {
  productStore: ProductStore;
  mealItemStore: MealItemStore;
  mealStore: MealStore;
  dailySumStore: DailySumStore;
  dailyGoalStore: DailyGoalStore;
  exerciseStore: ExerciseStore;
  workoutStore: WorkoutStore;
}

export const store: Store = {
  productStore: new ProductStore(),
  mealItemStore: new MealItemStore(),
  mealStore: new MealStore(),
  dailySumStore: new DailySumStore(),
  dailyGoalStore: new DailyGoalStore(),
  exerciseStore: new ExerciseStore(),
  workoutStore: new WorkoutStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
