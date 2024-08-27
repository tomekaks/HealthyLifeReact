import { observer } from "mobx-react-lite";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useStore } from "../../app/stores/store";
import { useEffect } from "react";

function ExerciseList() {
  const { exerciseStore } = useStore();
  const { exercises, deleteExercise, loadExercises } = exerciseStore;

  useEffect(() => {
    loadExercises();
  }, [exerciseStore]);

  return (
    <>
      <Container>
        <Row>
          <Col md="8">
            <h2>Exercises</h2>
            <div className="mb-3">
              <Link to={"createExercise"}>
                <Button variant="success">Add new exercise</Button>
              </Link>
            </div>
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
                      <Link to={`editExercise/${exercise.id}`}>
                        <Button variant="info">Edit</Button>{" "}
                      </Link>
                      <Button
                        variant="danger"
                        onClick={() => deleteExercise(exercise.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default observer(ExerciseList);
