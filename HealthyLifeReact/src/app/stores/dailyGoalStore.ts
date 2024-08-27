import { makeAutoObservable, runInAction } from "mobx";
import { DailyGoal } from "../models/DailyGoal/DailyGoal";
import agent from "../api/agent";
import { UpdateDailyGoal } from "../models/DailyGoal/UpdateDailyGoal";

export default class DailyGoalStore {
  dailyGoal: DailyGoal | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  loadDailyGoal = async () => {
    const response = await agent.DailyGoals.get();
    runInAction(() => {
      this.dailyGoal = response;
      console.log(this.dailyGoal);
    });
  };

  updateDailyGoal = async (dailyGoal: UpdateDailyGoal) => {
    await agent.DailyGoals.update(dailyGoal);
  };
}
