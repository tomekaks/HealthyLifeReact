import { Col, Container, Row, Table } from "react-bootstrap";
import MealRow from "./MealRow";
import { Meal } from "../../app/models/Meal";
import { testMeals } from "./TestMeals";
import { useEffect } from "react";
import { useStore } from "../../app/stores/store";

export default function Diary() {
  const { dailySumStore } = useStore();
  const meals: Meal[] = testMeals;
  const today = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  useEffect(() => {
    dailySumStore.loadDailySum();
  }, [dailySumStore]);

  return (
    <>
      <Container>
        <Row>
          <Col md="8">
            <div>
              <h1>Your dairy for: {today}</h1>{" "}
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
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}
