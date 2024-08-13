import { observer } from "mobx-react-lite";
import ProductList from "../../features/products/ProductList";
import NavBar from "./NavBar";

export default observer(function App() {
  return (
    <div>
      <NavBar />
      <ProductList />
    </div>
  );
});
