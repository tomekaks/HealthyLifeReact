import axios, { AxiosResponse } from "axios";
import { Product } from "../models/Product";

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
  create: (product: Product) => requests.post(`products`, product),
  update: (product: Product) => requests.put(`products`, product),
  delete: (id: number) => requests.delete(`products/${id}`),
};

const agent = {
  Products,
};

export default agent;
