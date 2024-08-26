import { makeAutoObservable } from "mobx";
import agent from "../api/agent";
import { CreateMealItem } from "../models/MealItem/CreateMealItem";

export default class MealItemStore {
  constructor() {
    makeAutoObservable(this);
  }

  createMealItem = async (mealItem: CreateMealItem) => {
    console.log(mealItem);
    await agent.MealItems.create(mealItem);
  };

  deleteMealItem = async (id: number) => {
    await agent.MealItems.delete(id);
  };
}
