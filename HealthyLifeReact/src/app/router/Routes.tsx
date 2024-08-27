import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ProductList from "../../features/products/ProductList";
import ProductForm from "../../features/products/ProductForm";
import productLoader from "../../features/products/productLoader";
import Diary from "../../features/diary/Diary";
import AddProducts from "../../features/diary/AddProducts";
import UpdateGoals from "../../features/diary/UpdateGoals";
import ExerciseList from "../../features/exercises/ExerciseList";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "diary", element: <Diary /> },
      { path: "diary/updateGoals", element: <UpdateGoals /> },
      { path: "diary/addProducts/:mealId", element: <AddProducts /> },
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
        path: "products/createProduct",
        element: <ProductForm key={"create"} />,
      },
      {
        path: "products/editProduct/:id",
        element: <ProductForm key={"edit"} />,
        loader: productLoader,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
