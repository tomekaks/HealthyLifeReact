import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useStore } from "../../app/stores/store";
import { useForm } from "react-hook-form";
import { CreateExercise } from "../../app/models/exercise/CreateExercise";
import { UpdateExercise } from "../../app/models/exercise/UpdateExercise";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Col, Container, Row } from "react-bootstrap";
import { observer } from "mobx-react-lite";

const exerciseSchema = z.object({
  name: z.string().min(2),
  caloriesPerHour: z.number().min(0),
});

function ExerciseForm() {
  const { exerciseStore } = useStore();
  const { createExercise, updateExercise } = exerciseStore;
  const { id } = useParams();
  const exercise = useLoaderData() as UpdateExercise | null;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CreateExercise | UpdateExercise>({
    resolver: zodResolver(exerciseSchema),
    defaultValues: {
      id: exercise?.id || 0,
      name: exercise?.name || "",
      caloriesPerHour: exercise?.caloriesPerHour || 0,
    },
  });

  const onSubmit = (data: CreateExercise | UpdateExercise) => {
    if (id) {
      const updateData: UpdateExercise = { ...data, id: Number(id) };
      updateExercise(updateData);
    } else {
      const createData: CreateExercise = { ...data, createdBy: "" };
      createExercise(createData);
    }
    navigate("/exercises");
  };

  return (
    <Container>
      {Number(id) > 0 ? <h1>Edit Exercise</h1> : <h1>Create Exercise</h1>}
      <Row>
        <Col md="5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input {...register("name")} className="form-control" />
            {errors.name && (
              <p className="text-danger">{errors.name.message}</p>
            )}
            <label>Calories per hour</label>
            <input
              {...register("caloriesPerHour", { valueAsNumber: true })}
              className="form-control"
            />
            {errors.caloriesPerHour && (
              <p className="text-danger">{errors.caloriesPerHour.message}</p>
            )}
            <Link to={"/exercises"}>
              <Button className="mt-2" variant="primary">
                Back
              </Button>
            </Link>
            <Button className="mt-2" variant="success" type="submit">
              Submit
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default observer(ExerciseForm);
