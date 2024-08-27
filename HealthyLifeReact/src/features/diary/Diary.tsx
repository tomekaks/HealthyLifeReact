import { Button, Col, Container, Row, Table } from "react-bootstrap";
import MealRow from "./MealRow";
import { useEffect, useState } from "react";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import DailyTotals from "./DailyTotals";

function Diary() {
  const { dailySumStore, dailyGoalStore } = useStore();
  const { dailySum, createDailySum, loadDailySum, loadingInitial } =
    dailySumStore;
  const { dailyGoal, loadDailyGoal } = dailyGoalStore;
  const today = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  useEffect(() => {
    loadDailySum();
    loadDailyGoal();
  }, [loadDailySum, loadDailyGoal]);

  if (loadingInitial) {
    return <div>Loading data...</div>;
  }

  if (!dailySum || dailySum.id < 1) {
    return (
      <div>
        <p>Create a dairy for {today}</p>
        <Button variant="success" onClick={createDailySum}>
          Create
        </Button>
      </div>
    );
  }

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
                {dailySum.meals.map((meal) => (
                  <MealRow meal={meal} key={meal.id} />
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <DailyTotals />
      </Container>
    </>
  );
}

export default observer(Diary);
