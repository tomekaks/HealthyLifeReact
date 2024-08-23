import axios, { AxiosResponse } from "axios";
import { Product } from "../models/Product";
import { MealItem } from "../models/MealItem";
import { Meal } from "../models/Meal";
import { DailySum } from "../models/DailySum";
import { DailyGoal } from "../models/DailyGoal";
import { CreateProduct } from "../models/CreateProduct";
import { UpdateProduct } from "../models/UpdateProduct";

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
  create: (mealItem: MealItem) => requests.post(`meal-items`, mealItem),
  update: (mealItem: MealItem) => requests.put(`meal-items`, mealItem),
  delete: (id: number) => requests.delete(`meal-item/${id}`),
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
  create: (dailySum: DailySum) => requests.post(`daily-sums`, dailySum),
  update: (dailySum: DailySum) => requests.put(`daily-sums`, dailySum),
  delete: (id: number) => requests.delete(`daily-sums/${id}`),
};

const DailyGoals = {
  single: () => requests.get<DailyGoal[]>(`daily-goals`),
  create: (dailyGoal: DailyGoal) => requests.post(`daily-goals`, dailyGoal),
  update: (dailyGoal: DailyGoal) => requests.put(`daily-goals`, dailyGoal),
};

const agent = {
  Products,
  MealItems,
  Meals,
  DailySums,
  DailyGoals,
};

export default agent;
