import { Button, Col, Container, Row, Table } from "react-bootstrap";
import MealRow from "./MealRow";
import { useEffect } from "react";
import { useStore } from "../../app/stores/store";

export default function Diary() {
  const { dailySumStore } = useStore();
  const { dailySum, createDailySum, loadDailySum } = dailySumStore;
  const today = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  useEffect(() => {
    loadDailySum();
  }, [loadDailySum]);

  return (
    <>
      <Container>
        <Row>
          <Col md="8">
            {dailySum && dailySum.id > 0 ? (
              <>
                <div className="mytable">
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
                    {dailySum.meals.map((meal) => (
                      <MealRow meal={meal} key={meal.id} />
                    ))}
                  </tbody>
                </Table>
              </>
            ) : (
              <div className="intialize">
                <p>Create a dairy for {today}</p>
                <Button variant="success" onClick={createDailySum}>
                  Create
                </Button>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
