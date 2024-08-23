import { makeAutoObservable, runInAction } from "mobx";
import { DailySum } from "../models/DailySum";
import agent from "../api/agent";

export default class DailySumStore {
  dailySums: DailySum[] = [];
  dailySum: DailySum | undefined = undefined;
  currentDate: string = new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  constructor() {
    makeAutoObservable(this);
  }

  formatDate = (date: Date): string => {
    return date.toISOString().split("T")[0];
  };

  loadDailySum = async () => {
    const newDate = this.formatDate(new Date());

    const response = await agent.DailySums.byDate(newDate);
    console.log(response);
    runInAction(() => {
      this.dailySum = response;
    });
  };
}
