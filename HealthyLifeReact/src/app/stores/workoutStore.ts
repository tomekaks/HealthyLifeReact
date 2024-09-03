import { makeAutoObservable, runInAction } from "mobx";
import { Workout } from "../models/workout/Workout";
import { CreateWorkout } from "../models/workout/CreateWorkout";
import agent from "../api/agent";
import { UpdateWorkout } from "../models/workout/UpdateWorkout";
import { store } from "./store";

export default class WorkoutStore {
  // workouts: Workout[] = store.dailySumStore.dailySum.workouts;

  constructor() {
    makeAutoObservable(this);
  }

  createWorkout = async (workout: CreateWorkout) => {
    console.log(workout);
    await agent.Workouts.create(workout);
  };

  deleteWorkout = async (id: number) => {
    await agent.Workouts.delete(id);
    // runInAction(() => {
    //   this.workouts = this.workouts.filter((w) => w.id != id);
    // });
  };

  updateWorkout = async (workout: UpdateWorkout) => {
    await agent.Workouts.update(workout);
  };
}
