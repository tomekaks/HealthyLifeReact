import { makeAutoObservable, runInAction } from "mobx";
import { Product } from "../models/Product";
import agent from "../api/agent";
import { CreateProduct } from "../models/CreateProduct";
import { UpdateProduct } from "../models/UpdateProduct";

export default class ProductStore {
  products: Product[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  loadProducts = async () => {
    const response = await agent.Products.list();
    runInAction(() => (this.products = response));
  };

  loadProduct = (id: number) => {
    agent.Products.single(id);
    return this.products.find((p) => p.id === id);
  };

  createProduct = async (product: CreateProduct) => {
    console.log("creating");
    await agent.Products.create(product);
    // product.id = this.products.length + 1;
    // this.products.push(product);
  };

  updateProduct = async (product: UpdateProduct) => {
    console.log("updating");
    await agent.Products.update(product);
    // this.products = [
    //   ...this.products.filter((p) => p.id !== product.id),
    //   product,
    // ];
  };

  deleteProduct = async (id: number) => {
    await agent.Products.delete(id);
    // this.products = [...this.products.filter((p) => p.id !== id)];
  };
}
