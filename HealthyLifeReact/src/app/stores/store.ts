import { createContext, useContext } from "react";
import ProductStore from "./productStore";
import MealItemStore from "./mealItemStore";
import MealStore from "./mealStore";
import DailySumStore from "./dailySumStore";

interface Store {
  productStore: ProductStore;
  mealItemStore: MealItemStore;
  mealStore: MealStore;
  dailySumStore: DailySumStore;
}

export const store: Store = {
  productStore: new ProductStore(),
  mealItemStore: new MealItemStore(),
  mealStore: new MealStore(),
  dailySumStore: new DailySumStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
