import axios, { AxiosResponse } from "axios";
import { Product } from "../models/Product/Product";
import { MealItem } from "../models/MealItem/MealItem";
import { Meal } from "../models/Meal";
import { DailySum } from "../models/DailySum/DailySum";
import { DailyGoal } from "../models/DailyGoal/DailyGoal";
import { CreateProduct } from "../models/Product/CreateProduct";
import { UpdateProduct } from "../models/Product/UpdateProduct";
import { CreateDailySum } from "../models/DailySum/CreateDailySum";
import { CreateMealItem } from "../models/MealItem/CreateMealItem";
import { get } from "mobx";
import { UpdateDailyGoal } from "../models/DailyGoal/UpdateDailyGoal";

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

const agent = {
  Products,
  MealItems,
  Meals,
  DailySums,
  DailyGoals,
};

export default agent;
