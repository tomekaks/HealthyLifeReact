import { observer } from "mobx-react-lite";
import { Workout } from "../../app/models/workout/Workout";
import { Button } from "react-bootstrap";
import { useStore } from "../../app/stores/store";

interface Params {
  workout: Workout;
}

function WorkoutRow(params: Params) {
  const { workout } = params;
  const { workoutStore } = useStore();
  return (
    <>
      <tr>
        <td>
          <Button
            variant="danger"
            onClick={() => workoutStore.deleteWorkout(workout.id)}
          >
            Remove
          </Button>
        </td>
        <td>{workout.exercise.name}</td>
        <td>{workout.minutes}</td>
        <td>{workout.caloriesBurned}</td>
      </tr>
    </>
  );
}

export default observer(WorkoutRow);
