import { observer } from "mobx-react-lite";
import { Button, Col, Row, Table } from "react-bootstrap";
import { useStore } from "../../app/stores/store";
import { Link } from "react-router-dom";

function DailyTotals() {
  const { dailySumStore, dailyGoalStore } = useStore();
  const { dailySum } = dailySumStore;
  const { dailyGoal } = dailyGoalStore;

  return (
    <Row>
      <Col md="3"></Col>
      <Col md="5">
        <Table>
          <thead>
            <tr>
              <th>
                <Link to={"/diary/updateGoals"}>
                  <Button variant="secondary">Update goals</Button>
                </Link>
              </th>
              <th>Calories</th>
              <th>Proteins</th>
              <th>Carbs</th>
              <th>Fats</th>
              <th>Fiber</th>
            </tr>
            <tr>
              <th>Daily totals</th>
              <td>{dailySum.calories}</td>
              <td>{dailySum.proteins}</td>
              <td>{dailySum.carbs}</td>
              <td>{dailySum.fats}</td>
              <td>{dailySum.fiber}</td>
            </tr>
            <tr>
              <th>Your daily goals</th>
              <td>{dailyGoal.calories}</td>
              <td>{dailyGoal.proteins}</td>
              <td>{dailyGoal.carbs}</td>
              <td>{dailyGoal.fats}</td>
              <td>{dailyGoal.fiber}</td>
            </tr>
            <tr>
              <th>Remaining</th>
              <td>{dailyGoal.calories - dailySum.calories}</td>
              <td>{dailyGoal.proteins - dailySum.proteins}</td>
              <td>{dailyGoal.carbs - dailySum.carbs}</td>
              <td>{dailyGoal.fats - dailySum.fats}</td>
              <td>{dailyGoal.fiber - dailySum.fiber}</td>
            </tr>
          </thead>
        </Table>
      </Col>
    </Row>
  );
}
export default observer(DailyTotals);
