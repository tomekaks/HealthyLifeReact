import { makeAutoObservable, runInAction } from "mobx";
import { DailySum } from "../models/DailySum/DailySum";
import agent from "../api/agent";
import { CreateDailySum } from "../models/DailySum/CreateDailySum";

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
    console.log(response);
    runInAction(() => {
      this.dailySum = response;
      this.loadingInitial = false;
      console.log(this.dailySum);
    });
  };

  createDailySum = async () => {
    const newDate = this.formatDate(new Date());
    const createDailySum: CreateDailySum = { date: newDate };
    console.log(createDailySum);
    await agent.DailySums.create(createDailySum);
  };
}
