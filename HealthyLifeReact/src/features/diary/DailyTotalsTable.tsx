import { observer } from "mobx-react-lite";
import { Button, Table } from "react-bootstrap";
import { useStore } from "../../app/stores/store";
import { Link } from "react-router-dom";

function DailyTotalsTable() {
  const { dailySumStore, dailyGoalStore } = useStore();
  const { dailySum } = dailySumStore;
  const { dailyGoal } = dailyGoalStore;

  return (
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
          <th>Burned</th>
          <td>{dailySum.caloriesBurned}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
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
          <td>
            {dailyGoal.calories - dailySum.calories + dailySum.caloriesBurned}
          </td>
          <td>{dailyGoal.proteins - dailySum.proteins}</td>
          <td>{dailyGoal.carbs - dailySum.carbs}</td>
          <td>{dailyGoal.fats - dailySum.fats}</td>
          <td>{dailyGoal.fiber - dailySum.fiber}</td>
        </tr>
      </thead>
    </Table>
  );
}
export default observer(DailyTotalsTable);
