import { Col, Container, Row, Table } from "react-bootstrap";
import MealRow from "./MealRow";
import { Meal } from "../../app/models/Meal";
import { testMeals } from "./TestMeals";

export default function Diary() {
  const meals: Meal[] = testMeals;
  return (
    <>
      <Container>
        <Row>
          <Col md="8">
            <div>
              <h1>Your dairy for:</h1>{" "}
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th></th>
                  <th>Product</th>
                  <th>Weight (g)</th>
                  <th>Calories (kcal)</th>
                  <th>Proteins (g)</th>
                  <th>Carbs (g)</th>
                  <th>Fats (g)</th>
                  <th>Fiber (g)</th>
                </tr>
              </thead>
              <tbody>
                {meals.map((meal) => (
                  <MealRow meal={meal} key={meal.id} />
                ))}
                {/* <MealRow meal={meals[0]} />
                <MealRow meal={meals[1]} />
                <MealRow meal={meals[2]} />
                <MealRow meal={meals[3]} /> */}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}
