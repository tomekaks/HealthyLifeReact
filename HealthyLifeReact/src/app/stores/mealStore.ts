import { makeAutoObservable } from "mobx";
import { testMeals } from "../../features/diary/TestMeals";
import { Meal } from "../models/Meal";
import { MealItem } from "../models/MealItem";

export default class MealStore {
  meals: Meal[] = testMeals;

  constructor(mealId: number) {
    makeAutoObservable(this);
  }

  deleteMealItem(mealId: number, mealItemId: number): void {
    const currentMeal = this.meals.find((x) => x.id === mealId);
    const mealItem = currentMeal?.mealItems.find(
      (item) => item.id === mealItemId
    );
  }
}
