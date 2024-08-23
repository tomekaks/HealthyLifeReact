import { makeAutoObservable } from "mobx";
import { MealItem } from "../models/MealItem";
import { testMeals } from "../../features/diary/TestMeals";
import { Meal } from "../models/Meal";

export default class MealItemStore {
  meals: Meal[] = testMeals;

  constructor() {
    makeAutoObservable(this);
  }
}
