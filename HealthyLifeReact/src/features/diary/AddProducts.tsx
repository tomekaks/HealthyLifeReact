import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useStore } from "../../app/stores/store";
import { useForm } from "react-hook-form";
import { MealItem } from "../../app/models/mealItem/MealItem";
import { useState } from "react";
import { Product } from "../../app/models/product/Product";
import { CreateMealItem } from "../../app/models/mealItem/CreateMealItem";

export default function AddProducts() {
  const { productStore, mealItemStore } = useStore();
  const { products } = productStore;
  const { mealId } = useParams();
  const { register, handleSubmit, formState: errors } = useForm<MealItem>();
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(
    undefined
  );

  function selectProduct(productId: number) {
    setSelectedProduct(products.find((x) => x.id === productId));
  }

  function cancelAdding() {
    setSelectedProduct(undefined);
  }

  function onSubmit(data: MealItem) {
    const calculateField = (fieldValue: number, weight: number) =>
      Math.round((fieldValue / 100) * weight);

    const mealItem: CreateMealItem = {
      weight: Number(data.weight),
      calories: calculateField(selectedProduct!.calories, data.weight),
      proteins: calculateField(selectedProduct!.proteins, data.weight),
      carbs: calculateField(selectedProduct!.carbs, data.weight),
      fats: calculateField(selectedProduct!.fats, data.weight),
      fiber: calculateField(selectedProduct!.fiber, data.weight),
      price: calculateField(selectedProduct!.price, data.weight),
      productId: selectedProduct!.id,
      mealId: Number(mealId),
    };
    console.log(mealItem);
    mealItemStore.createMealItem(mealItem);
  }

  return (
    <>
      <Container>
        <h2>Add Products</h2>
        <Row>
          <Col md="8">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Calories</th>
                  <th>Proteins</th>
                  <th>Carbs</th>
                  <th>Fats</th>
                  <th>Fiber</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.calories}</td>
                    <td>{product.proteins}</td>
                    <td>{product.carbs}</td>
                    <td>{product.fats}</td>
                    <td>{product.fiber}</td>
                    <td>
                      <Button
                        variant="success"
                        onClick={() => selectProduct(product.id)}
                      >
                        Add
                      </Button>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col md="4">
            {selectedProduct && (
              <form onSubmit={handleSubmit(onSubmit)}>
                <label>Product</label>
                <input
                  className="form-control"
                  value={selectedProduct.name}
                  disabled
                />
                <label>Weight</label>
                <input
                  {...register("weight")}
                  className="form-control"
                  type="number"
                />
                <Button
                  className="mt-2"
                  variant="primary"
                  onClick={() => cancelAdding()}
                >
                  Cancel
                </Button>{" "}
                <Button className="mt-2" variant="success" type="submit">
                  Submit
                </Button>
              </form>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
