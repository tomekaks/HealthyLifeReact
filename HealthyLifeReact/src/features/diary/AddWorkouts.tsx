import { useForm } from "react-hook-form";
import { useStore } from "../../app/stores/store";
import { Workout } from "../../app/models/workout/Workout";
import { useState } from "react";
import { Exercise } from "../../app/models/exercise/Exercise";
import { CreateWorkout } from "../../app/models/workout/CreateWorkout";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function AddWorkouts() {
  const { exerciseStore, workoutStore } = useStore();
  const { exercises } = exerciseStore;
  const { sumId } = useParams();
  const { register, handleSubmit, formState: errors } = useForm<Workout>();
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(
    null
  );

  function selectExercise(exerciseId: number) {
    const exercise = exercises.find((x) => x.id === exerciseId);
    setSelectedExercise(exercise || null);
  }

  function cancelAdding() {
    setSelectedExercise(null);
  }

  function onSubmit(data: Workout) {
    if (selectedExercise) {
      const workout: CreateWorkout = {
        minutes: Number(data.minutes),
        caloriesBurned: Math.round(
          selectedExercise?.caloriesPerHour * (Number(data.minutes) / 60)
        ),
        exerciseId: selectedExercise.id,
        dailySumId: Number(sumId),
      };
      console.log(workout);
      workoutStore.createWorkout(workout);
    }
  }

  return (
    <>
      <Container>
        <h2>Add Workouts</h2>
        <Row>
          <Col md="8">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Calories per hour</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {exercises.map((exercise) => (
                  <tr key={exercise.id}>
                    <td>{exercise.name}</td>
                    <td>{exercise.caloriesPerHour}</td>
                    <td>
                      <Button
                        variant="success"
                        onClick={() => selectExercise(exercise.id)}
                      >
                        Add
                      </Button>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col md="4">
            {selectedExercise && (
              <form onSubmit={handleSubmit(onSubmit)}>
                <label>Product</label>
                <input
                  className="form-control"
                  value={selectedExercise.name}
                  disabled
                />
                <label>Minutes</label>
                <input
                  {...register("minutes")}
                  className="form-control"
                  type="number"
                />
                <Button
                  className="mt-2"
                  variant="primary"
                  onClick={() => cancelAdding()}
                >
                  Cancel
                </Button>{" "}
                <Button className="mt-2" variant="success" type="submit">
                  Submit
                </Button>
              </form>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
