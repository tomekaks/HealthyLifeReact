import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ProductList from "../../features/products/ProductList";
import ProductForm from "../../features/products/ProductForm";
import productLoader from "../../features/products/productLoader";
import Diary from "../../features/diary/Diary";
import AddProducts from "../../features/diary/AddProducts";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "diary", element: <Diary /> },
      { path: "diary/addProducts/:mealId", element: <AddProducts /> },
      { path: "products", element: <ProductList /> },
      { path: "createProduct", element: <ProductForm key={"create"} /> },
      {
        path: "editProduct/:id",
        element: <ProductForm key={"edit"} />,
        loader: productLoader,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
