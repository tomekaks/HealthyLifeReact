import { observer } from "mobx-react-lite";
import { Button, Table } from "react-bootstrap";
import { useStore } from "../../app/stores/store";
import WorkoutRow from "./WorkoutRow";
import { Link } from "react-router-dom";

function WorkoutTable() {
  const { dailySumStore } = useStore();
  const { dailySum } = dailySumStore;
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>Exercise</th>
          <th>Minutes</th>
          <th>Calories burned</th>
        </tr>
      </thead>
      <tbody>
        {dailySum.workouts.map((workout) => (
          <WorkoutRow workout={workout} key={workout.id} />
        ))}
        <tr>
          <th>Total</th>
          <td>
            <Link to={`addWorkouts/${dailySum.id}`}>
              <Button variant="success">Add</Button>
            </Link>
          </td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default observer(WorkoutTable);
