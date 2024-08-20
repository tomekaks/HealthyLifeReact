import { LoaderFunctionArgs } from "react-router-dom";
import { store } from "../../app/stores/store";

export default function productLoader({ params }: LoaderFunctionArgs) {
  const { id } = params;
  if (id) {
    const product = store.productStore.loadProduct(parseInt(id, 10));
    console.log(product);
    return product ?? null;
  }
  return null;
}
