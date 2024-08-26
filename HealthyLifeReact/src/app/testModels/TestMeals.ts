import { Meal } from "../../app/models/Meal";
import { MealItem } from "../models/MealItem/MealItem";
import { Product } from "../../app/models/Product/Product";

function createMealItem(
  id: number,
  mealId: number,
  weight: number,
  product: Product
): MealItem {
  const calculateField = (fieldValue: number) =>
    Math.round((fieldValue / 100) * weight);

  return {
    id: id,
    mealId: mealId,
    weight: weight,
    calories: calculateField(product.calories),
    proteins: calculateField(product.proteins),
    carbs: calculateField(product.carbs),
    fats: calculateField(product.fats),
    fiber: calculateField(product.fiber),
    price: calculateField(product.price),
    product: product,
  };
}

export const testMeals: Meal[] = [
  {
    id: 1,
    dailySumId: 1,
    name: "First meal",
    weight: 450, // Sum of weights of mealItems
    calories: 450, // Sum of calories of mealItems
    proteins: 80, // Sum of proteins of mealItems
    carbs: 34, // Sum of carbs of mealItems
    fats: 30, // Sum of fats of mealItems
    fiber: 6, // Sum of fiber of mealItems
    price: 6, // Sum of price of mealItems
    mealItems: [
      createMealItem(1, 1, 200, {
        id: 3,
        name: "Chicken Breast",
        calories: 165,
        proteins: 31,
        carbs: 0,
        fats: 3.6,
        fiber: 0,
        price: 3.0,
        createdBy: "Admin",
      }),
      createMealItem(2, 1, 150, {
        id: 4,
        name: "Broccoli",
        calories: 55,
        proteins: 3.7,
        carbs: 11.2,
        fats: 0.6,
        fiber: 3.6,
        price: 1.2,
        createdBy: "Admin",
      }),
      createMealItem(3, 1, 100, {
        id: 15,
        name: "Brown Rice",
        calories: 111,
        proteins: 2.6,
        carbs: 23,
        fats: 0.9,
        fiber: 1.8,
        price: 1.0,
        createdBy: "Admin",
      }),
    ],
  },
  {
    id: 2,
    dailySumId: 1,
    name: "Second meal",
    weight: 430,
    calories: 470,
    proteins: 56,
    carbs: 55,
    fats: 15,
    fiber: 9,
    price: 12,
    mealItems: [
      createMealItem(4, 2, 180, {
        id: 6,
        name: "Salmon",
        calories: 208,
        proteins: 20,
        carbs: 0,
        fats: 13,
        fiber: 0,
        price: 10.0,
        createdBy: "Admin",
      }),
      createMealItem(5, 2, 150, {
        id: 9,
        name: "Sweet Potato",
        calories: 86,
        proteins: 1.6,
        carbs: 20,
        fats: 0.1,
        fiber: 3,
        price: 1.0,
        createdBy: "Admin",
      }),
      createMealItem(6, 2, 100, {
        id: 10,
        name: "Quinoa",
        calories: 120,
        proteins: 4.1,
        carbs: 21.3,
        fats: 1.9,
        fiber: 2.8,
        price: 4.5,
        createdBy: "Admin",
      }),
    ],
  },
  {
    id: 3,
    dailySumId: 1,
    name: "Third meal",
    weight: 300,
    calories: 180,
    proteins: 15,
    carbs: 40,
    fats: 20,
    fiber: 15,
    price: 19,
    mealItems: [
      createMealItem(7, 3, 50, {
        id: 5,
        name: "Almonds",
        calories: 579,
        proteins: 21,
        carbs: 22,
        fats: 50,
        fiber: 12.5,
        price: 15.0,
        createdBy: "Admin",
      }),
      createMealItem(8, 3, 150, {
        id: 11,
        name: "Greek Yogurt",
        calories: 59,
        proteins: 10,
        carbs: 3.6,
        fats: 0.4,
        fiber: 0,
        price: 1.5,
        createdBy: "Admin",
      }),
      createMealItem(9, 3, 100, {
        id: 8,
        name: "Oatmeal",
        calories: 68,
        proteins: 2.4,
        carbs: 12,
        fats: 1.4,
        fiber: 1.7,
        price: 0.8,
        createdBy: "Admin",
      }),
    ],
  },
  {
    id: 4,
    dailySumId: 1,
    name: "Fourth meal",
    weight: 470,
    calories: 430,
    proteins: 38,
    carbs: 27,
    fats: 25,
    fiber: 12,
    price: 8,
    mealItems: [
      createMealItem(10, 4, 120, {
        id: 20,
        name: "Turkey Breast",
        calories: 135,
        proteins: 30,
        carbs: 0,
        fats: 1.2,
        fiber: 0,
        price: 4.0,
        createdBy: "Admin",
      }),
      createMealItem(11, 4, 200, {
        id: 12,
        name: "Avocado",
        calories: 160,
        proteins: 2,
        carbs: 9,
        fats: 15,
        fiber: 7,
        price: 1.2,
        createdBy: "Admin",
      }),
      createMealItem(12, 4, 150, {
        id: 14,
        name: "Blueberries",
        calories: 57,
        proteins: 0.7,
        carbs: 14,
        fats: 0.3,
        fiber: 2.4,
        price: 2.5,
        createdBy: "Admin",
      }),
    ],
  },
];
