import { ChangeEvent, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useNavigate, useParams } from "react-router-dom";

export default observer(function ProductForm() {
  const { productStore } = useStore();
  const { createProduct, updateProduct, loadProduct } = productStore;
  const { id } = useParams();
  const navigate = useNavigate();

  const initialState = {
    id: 0,
    name: "",
    calories: 0,
    proteins: 0,
    carbs: 0,
    fats: 0,
    fiber: 0,
    price: 0,
    createdBy: "User",
  };

  const [product, setProduct] = useState(initialState);

  useEffect(() => {
    if (id) {
      let selectedProduct = loadProduct(parseInt(id, 10));
      setProduct(selectedProduct!);
    }
  }, [id]);

  function handleSubmit() {
    product.id ? updateProduct(product) : createProduct(product);
    navigate("/products");
  }

  function handleControlChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            value={product.name}
            onChange={handleControlChange}
            readOnly={!!product.id}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formCalories">
          <Form.Label>Calories</Form.Label>
          <Form.Control
            type="text"
            placeholder="Calories per 100g"
            name="calories"
            value={product.calories}
            onChange={handleControlChange}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formProteins">
          <Form.Label>Proteins</Form.Label>
          <Form.Control
            type="text"
            placeholder="Proteins per 100g"
            name="proteins"
            value={product.proteins}
            onChange={handleControlChange}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formCarbs">
          <Form.Label>Carbs</Form.Label>
          <Form.Control
            type="text"
            placeholder="Carbs per 100g"
            name="carbs"
            value={product.carbs}
            onChange={handleControlChange}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formFats">
          <Form.Label>Fats</Form.Label>
          <Form.Control
            type="text"
            placeholder="Fats per 100g"
            name="fats"
            value={product.fats}
            onChange={handleControlChange}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formFiber">
          <Form.Label>Fiber</Form.Label>
          <Form.Control
            type="text"
            placeholder="Fiber per 100g"
            name="fiber"
            value={product.fiber}
            onChange={handleControlChange}
          />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Price per 100g"
            name="price"
            value={product.price}
            onChange={handleControlChange}
          />
        </Form.Group>
        <Link to={"/products"}>
          <Button variant="primary">Back</Button>{" "}
        </Link>

        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
});
