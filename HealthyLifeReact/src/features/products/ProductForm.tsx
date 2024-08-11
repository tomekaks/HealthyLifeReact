import { ChangeEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Product } from "../../app/models/Product";

interface Props {
  product: Product | undefined;
  closeForm: () => void;
  createOrEdit: (product: Product) => void;
}

export default function ProductForm({
  product: selectedProduct,
  closeForm,
  createOrEdit,
}: Props) {
  const initialState = selectedProduct ?? {
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

  function handleSubmit() {
    console.log(product);
    createOrEdit(product);
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
            readOnly={!!selectedProduct}
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
        <Button variant="primary" onClick={() => closeForm()}>
          Cancel
        </Button>{" "}
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
