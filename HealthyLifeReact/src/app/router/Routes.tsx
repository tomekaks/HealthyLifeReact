import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ProductList from "../../features/products/ProductList";
import ProductForm from "../../features/products/ProductForm";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "products", element: <ProductList /> },
      { path: "createProduct", element: <ProductForm key={"create"} /> },
      { path: "editProduct/:id", element: <ProductForm key={"edit"} /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
