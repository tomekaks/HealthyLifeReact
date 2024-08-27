import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default observer(function ProductList() {
  const { productStore } = useStore();
  const { products, deleteProduct } = productStore;

  useEffect(() => {
    productStore.loadProducts();
  }, [productStore]);

  return (
    <>
      <Container>
        <Row>
          <Col md="8">
            <h2>Products</h2>
            <div className="mb-3">
              <Link to={"createProduct"}>
                <Button variant="success">Add new product</Button>
              </Link>
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
                      <Link to={`editProduct/${product.id}`}>
                        <Button variant="info">Edit</Button>{" "}
                      </Link>
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
        </Row>
      </Container>
    </>
  );
});
