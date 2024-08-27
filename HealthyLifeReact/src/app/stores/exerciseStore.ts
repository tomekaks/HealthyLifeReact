import { makeAutoObservable, runInAction } from "mobx";
import { Exercise } from "../models/exercise/Exercise";
import agent from "../api/agent";
import { CreateExercise } from "../models/exercise/CreateExercise";
import { UpdateExercise } from "../models/exercise/UpdateExercise";

export default class ExerciseStore {
  exercises: Exercise[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  loadExercises = async () => {
    const response = await agent.Exercises.list();
    runInAction(() => (this.exercises = response));
  };

  loadExercise = (id: number) => {
    agent.Exercises.single(id);
    return this.exercises.find((e) => e.id === id);
  };

  createExercise = async (exercise: CreateExercise) => {
    console.log("creating exercise");
    await agent.Exercises.create(exercise);
    // Uncomment the following if you wish to update the store immediately
    // after creation:
    // exercise.id = this.exercises.length + 1; // Assuming an incrementing ID pattern
    // this.exercises.push(exercise);
  };

  updateExercise = async (exercise: UpdateExercise) => {
    console.log("updating exercise");
    await agent.Exercises.update(exercise);
    // Uncomment to update the local store upon successful remote update:
    // this.exercises = [
    //   ...this.exercises.filter((e) => e.id !== exercise.id),
    //   exercise,
    // ];
  };

  deleteExercise = async (id: number) => {
    await agent.Exercises.delete(id);
    // Uncomment to update the local store after deletion:
    // this.exercises = [...this.exercises.filter((e) => e.id !== id)];
  };
}
