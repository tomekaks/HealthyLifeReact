import { Button, Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import WorkoutsTable from "./WorkoutsTable";
import DailyTotalsTable from "./DailyTotalsTable";
import MealsTable from "./MealsTable";

function Diary() {
  const { dailySumStore, dailyGoalStore } = useStore();
  const { dailySum, createDailySum, loadDailySum, loadingInitial } =
    dailySumStore;
  const { loadDailyGoal } = dailyGoalStore;
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
          {" "}
          <div>
            <h1>Your dairy for: {today}</h1>{" "}
          </div>
        </Row>
        <Row>
          <Col md="7">
            <div>
              <h2>Meals</h2>
            </div>
            <MealsTable />
          </Col>
          <Col md="4">
            <div>
              <h2>Workouts</h2>
            </div>
            <WorkoutsTable />
          </Col>
        </Row>
        <Row>
          <Col md="5">
            <DailyTotalsTable />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default observer(Diary);
