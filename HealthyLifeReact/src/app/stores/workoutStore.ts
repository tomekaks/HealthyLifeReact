import { makeAutoObservable } from "mobx";
import { Workout } from "../models/workout/Workout";
import { CreateWorkout } from "../models/workout/CreateWorkout";
import agent from "../api/agent";
import { UpdateWorkout } from "../models/workout/UpdateWorkout";

export default class WorkoutStore {
  workouts: Workout[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  createWorkout = async (workout: CreateWorkout) => {
    console.log(workout);
    await agent.Workouts.create(workout);
  };

  deleteWorkout = async (id: number) => {
    await agent.Workouts.delete(id);
  };

  updateWorkout = async (workout: UpdateWorkout) => {
    await agent.Workouts.update(workout);
  };
}
