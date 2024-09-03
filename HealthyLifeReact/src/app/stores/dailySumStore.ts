import { makeAutoObservable, runInAction } from "mobx";
import { DailySum } from "../models/dailySum/DailySum";
import agent from "../api/agent";
import { CreateDailySum } from "../models/dailySum/CreateDailySum";
import { CreateMealItem } from "../models/mealItem/CreateMealItem";
import { CreateWorkout } from "../models/workout/CreateWorkout";
import { UpdateWorkout } from "../models/workout/UpdateWorkout";

export default class DailySumStore {
  dailySums: DailySum[] = [];
  dailySum: DailySum = {
    id: 0,
    userId: "",
    date: "",
    calories: 0,
    proteins: 0,
    carbs: 0,
    fats: 0,
    fiber: 0,
    price: 0,
    caloriesBurned: 0,
    meals: [],
    workouts: [],
  };
  currentDate: string = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }

  formatDate = (date: Date): string => {
    return date.toISOString().split("T")[0];
  };

  loadDailySum = async () => {
    const newDate = this.formatDate(new Date());
    this.loadingInitial = true;
    const response = await agent.DailySums.byDate(newDate);
    runInAction(() => {
      this.dailySum = response;
      this.loadingInitial = false;
    });
  };

  createDailySum = async () => {
    const newDate = this.formatDate(new Date());
    const createDailySum: CreateDailySum = { date: newDate };
    console.log(createDailySum);
    await agent.DailySums.create(createDailySum);
  };

  //Meals
  createMealItem = async (mealItem: CreateMealItem) => {
    await agent.MealItems.create(mealItem);
  };

  deleteMealItem = async (mealItemId: number, mealId: number) => {
    await agent.MealItems.delete(mealItemId);
    runInAction(() => {
      const currentMeal = this.dailySum.meals.find((m) => m.id === mealId);
      if (currentMeal) {
        const deletedMealItem = currentMeal.mealItems.find(
          (item) => item.id === mealItemId
        );

        currentMeal.calories -= deletedMealItem!.calories;
        currentMeal.proteins -= deletedMealItem!.proteins;
        currentMeal.carbs -= deletedMealItem!.carbs;
        currentMeal.fats -= deletedMealItem!.fats;
        currentMeal.fiber -= deletedMealItem!.fiber;

        this.dailySum.calories -= deletedMealItem!.calories;
        this.dailySum.proteins -= deletedMealItem!.proteins;
        this.dailySum.carbs -= deletedMealItem!.carbs;
        this.dailySum.fats -= deletedMealItem!.fats;
        this.dailySum.fiber -= deletedMealItem!.fiber;

        currentMeal.mealItems = currentMeal.mealItems.filter(
          (item) => item.id != mealItemId
        );
      }
    });
  };

  //Workouts

  createWorkout = async (workout: CreateWorkout) => {
    console.log(workout);
    await agent.Workouts.create(workout);
  };

  deleteWorkout = async (workoutId: number) => {
    await agent.Workouts.delete(workoutId);
    runInAction(() => {
      const deletedWorkout = this.dailySum.workouts.find(
        (w) => w.id === workoutId
      );
      if (deletedWorkout) {
        this.dailySum.caloriesBurned -= deletedWorkout.caloriesBurned;
      }
      this.dailySum.workouts = this.dailySum.workouts.filter(
        (w) => w.id != workoutId
      );
    });
  };

  updateWorkout = async (workout: UpdateWorkout) => {
    await agent.Workouts.update(workout);
  };
}
