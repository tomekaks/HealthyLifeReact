import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ProductList from "../../features/products/ProductList";
import ProductForm from "../../features/products/ProductForm";
import productLoader from "../../features/products/productLoader";
import Diary from "../../features/diary/Diary";
import ExerciseList from "../../features/exercises/ExerciseList";
import exerciseLoader from "../../features/exercises/exerciseLoader";
import ExerciseForm from "../../features/exercises/ExerciseForm";
import AddMealItems from "../../features/diary/AddMealItems";
import AddWorkouts from "../../features/diary/AddWorkouts";
import UpdateGoalsForm from "../../features/diary/UpdateGoalsForm";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "diary", element: <Diary /> },
      { path: "diary/updateGoals", element: <UpdateGoalsForm /> },
      { path: "diary/addMealItems/:mealId", element: <AddMealItems /> },
      { path: "diary/addWorkouts/:sumId", element: <AddWorkouts /> },
      { path: "products", element: <ProductList /> },
      {
        path: "products/createProduct",
        element: <ProductForm key={"create"} />,
      },
      {
        path: "products/editProduct/:id",
        element: <ProductForm key={"edit"} />,
        loader: productLoader,
      },
      { path: "exercises", element: <ExerciseList /> },
      {
        path: "exercises/createExercise",
        element: <ExerciseForm key={"create"} />,
      },
      {
        path: "exercises/editExercise/:id",
        element: <ExerciseForm key={"edit"} />,
        loader: exerciseLoader,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
