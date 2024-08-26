import { makeAutoObservable } from "mobx";

export default class MealStore {
  constructor() {
    makeAutoObservable(this);
  }
}
