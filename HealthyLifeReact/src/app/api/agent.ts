import axios, { AxiosResponse } from "axios";
import { Product } from "../models/product/Product";
import { MealItem } from "../models/mealItem/MealItem";
import { Meal } from "../models/Meal";
import { DailySum } from "../models/dailySum/DailySum";
import { DailyGoal } from "../models/dailyGoal/DailyGoal";
import { CreateProduct } from "../models/product/CreateProduct";
import { UpdateProduct } from "../models/product/UpdateProduct";
import { CreateDailySum } from "../models/dailySum/CreateDailySum";
import { CreateMealItem } from "../models/mealItem/CreateMealItem";
import { UpdateDailyGoal } from "../models/dailyGoal/UpdateDailyGoal";
import { Exercise } from "../models/exercise/Exercise";
import { CreateExercise } from "../models/exercise/CreateExercise";
import { UpdateExercise } from "../models/exercise/UpdateExercise";
import { Workout } from "../models/workout/Workout";
import { CreateWorkout } from "../models/workout/CreateWorkout";
import { UpdateWorkout } from "../models/workout/UpdateWorkout";

axios.defaults.baseURL = "https://localhost:44306/api/";

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  delete: (url: string) => axios.delete(url).then(responseBody),
};

const Products = {
  list: () => requests.get<Product[]>(`products`),
  single: (id: number) => requests.get<Product>(`products/${id}`),
  create: (product: CreateProduct) => requests.post(`products`, product),
  update: (product: UpdateProduct) => requests.put(`products`, product),
  delete: (id: number) => requests.delete(`products/${id}`),
};

const MealItems = {
  list: (mealId: number) =>
    requests.get<MealItem[]>(`meal-items/by-meal/${mealId}`),
  single: (id: number) => requests.get<MealItem>(`meal-items/${id}`),
  create: (mealItem: CreateMealItem) => requests.post(`meal-items`, mealItem),
  update: (mealItem: MealItem) => requests.put(`meal-items`, mealItem),
  delete: (id: number) => requests.delete(`meal-items/${id}`),
};

const Meals = {
  list: (dailySumId: number) =>
    requests.get<Meal[]>(`meals/by-meal/${dailySumId}`),
  single: (id: number) => requests.get<Meal>(`meals/${id}`),
  create: (mealItem: Meal) => requests.post(`meals`, mealItem),
  update: (mealItem: Meal) => requests.put(`meals`, mealItem),
  delete: (id: number) => requests.delete(`meals/${id}`),
};

const DailySums = {
  list: () => requests.get<DailySum[]>(`daily-sums`),
  single: (id: number) => requests.get<DailySum>(`daily-sums/${id}`),
  byDate: (date: string) =>
    requests.get<DailySum>(`daily-sums/by-date/${date}`),
  create: (dailySum: CreateDailySum) => requests.post(`daily-sums`, dailySum),
  update: (dailySum: DailySum) => requests.put(`daily-sums`, dailySum),
  delete: (id: number) => requests.delete(`daily-sums/${id}`),
};

const DailyGoals = {
  get: () => requests.get<DailyGoal>(`daily-goals`),
  update: (dailyGoal: UpdateDailyGoal) =>
    requests.put(`daily-goals`, dailyGoal),
};

const Exercises = {
  list: () => requests.get<Exercise[]>(`exercises`),
  single: (id: number) => requests.get<Exercise>(`exercises/${id}`),
  create: (exercise: CreateExercise) => requests.post(`exercises`, exercise),
  update: (exercise: UpdateExercise) => requests.put(`exercises`, exercise),
  delete: (id: number) => requests.delete(`exercises/${id}`),
};

const Workouts = {
  list: (dailySumId: number) =>
    requests.get<Workout[]>(`workouts/get-all/${dailySumId}`),
  single: (id: number) => requests.get<Workout>(`workouts/${id}`),
  create: (workout: CreateWorkout) => requests.post(`workouts`, workout),
  update: (workout: UpdateWorkout) => requests.put(`workouts`, workout),
  delete: (id: number) => requests.delete(`workouts/${id}`),
};

const agent = {
  Products,
  MealItems,
  Meals,
  DailySums,
  DailyGoals,
  Exercises,
  Workouts,
};

export default agent;
