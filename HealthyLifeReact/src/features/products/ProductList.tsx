import { Button, Col, Container, Row, Table } from "react-bootstrap";
import ProductForm from "./ProductForm";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";

export default observer(function ProductList() {
  const { productStore } = useStore();
  const { products, editMode, openForm, deleteProduct } = productStore;

  return (
    <>
      <Container>
        <Row>
          <Col md="8">
            <h2>Products</h2>
            <div className="mb-3">
              <Button variant="success" onClick={() => openForm()}>
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
                        onClick={() => openForm(product.id)}
                      >
                        Edit
                      </Button>{" "}
                      <Button
                        variant="danger"
                        onClick={() => deleteProduct(product.id)}
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
              <ProductForm />
            </Col>
          )}
        </Row>
      </Container>
    </>
  );
});
