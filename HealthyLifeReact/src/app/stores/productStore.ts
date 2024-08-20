import { makeAutoObservable } from "mobx";
import { Product } from "../models/Product";
import { testProducts } from "../../features/products/TestProducts";

export default class ProductStore {
  products: Product[] = testProducts;

  constructor() {
    makeAutoObservable(this);
  }

  loadProduct = (id: number) => {
    return this.products.find((p) => p.id === id);
  };

  createProduct = (product: Product) => {
    console.log("creating");
    product.id = this.products.length + 1;
    this.products.push(product);
  };

  updateProduct = (product: Product) => {
    console.log("updating");
    this.products = [
      ...this.products.filter((p) => p.id !== product.id),
      product,
    ];
  };

  deleteProduct = (id: number) => {
    this.products = [...this.products.filter((p) => p.id !== id)];
  };
}
