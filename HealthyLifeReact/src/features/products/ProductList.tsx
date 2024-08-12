import { useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { testProducts } from "./TestProducts";
import { Product } from "../../app/models/Product";
import ProductForm from "./ProductForm";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>(testProducts);
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(
    undefined
  );
  const [editMode, setEditMode] = useState(false);

  function handleSelectProduct(id: number) {
    setSelectedProduct(products.find((p) => p.id === id));
  }

  function handleCancelSelectProduct() {
    setSelectedProduct(undefined);
  }

  function handleFormOpen(id?: number) {
    id ? handleSelectProduct(id) : handleCancelSelectProduct();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  function handleCreateOrEditProduct(product: Product) {
    product.id
      ? setProducts([...products.filter((p) => p.id !== product.id), product])
      : setProducts([...products, product]);
    setEditMode(false);
  }

  function handleDeleteProduct(id: number) {
    setProducts([...products.filter((p) => p.id !== id)]);
  }

  return (
    <>
      <Container>
        <Row>
          <Col md="8">
            <h2>Products</h2>
            <div className="mb-3">
              <Button variant="success" onClick={() => handleFormOpen()}>
                Add new product
              </Button>
            </div>
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
                        variant="info"
                        onClick={() => handleFormOpen(product.id)}
                      >
                        Edit
                      </Button>{" "}
                      <Button
                        variant="danger"
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          {editMode && (
            <Col md="4">
              <ProductForm
                product={selectedProduct}
                closeForm={handleFormClose}
                createOrEdit={handleCreateOrEditProduct}
              />
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
}
