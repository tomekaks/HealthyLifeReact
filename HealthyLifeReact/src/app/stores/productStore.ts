import { makeAutoObservable } from "mobx";
import { Product } from "../models/Product";
import { testProducts } from "../../features/products/TestProducts";

export default class ProductStore {
  products: Product[] = testProducts;
  selectedProduct: Product | undefined = undefined;
  editMode = false;

  constructor() {
    makeAutoObservable(this);
  }

  selectProduct = (id: number) => {
    this.selectedProduct = this.products.find((p) => p.id === id);
  };

  cancelSelectProduct = () => {
    this.selectedProduct = undefined;
  };

  openForm = (id?: number) => {
    id ? this.selectProduct(id) : this.cancelSelectProduct();
    this.editMode = true;
  };

  closeForm = () => {
    this.editMode = false;
  };

  createProduct = (product: Product) => {
    // [...this.products, product];
    this.products.push(product);
    this.editMode = false;
  };

  updateProduct = (product: Product) => {
    this.products = [
      ...this.products.filter((p) => p.id !== product.id),
      product,
    ];
    this.editMode = false;
  };

  deleteProduct = (id: number) => {
    this.products = [...this.products.filter((p) => p.id !== id)];
  };
}
