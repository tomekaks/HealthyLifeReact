import { observer } from "mobx-react-lite";
import { DailyGoal } from "../../app/models/DailyGoal/DailyGoal";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useStore } from "../../app/stores/store";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const dailyGoalSchema = z.object({
  calories: z.number().min(0),
  proteins: z.number().min(0),
  carbs: z.number().min(0),
  fats: z.number().min(0),
  fiber: z.number().min(0),
});

function UpdateGoals() {
  const { dailyGoalStore } = useStore();
  const { dailyGoal, updateDailyGoal } = dailyGoalStore;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: errors,
  } = useForm<DailyGoal>({
    resolver: zodResolver(dailyGoalSchema),
    defaultValues: {
      id: dailyGoal.id,
      calories: dailyGoal.calories,
      proteins: dailyGoal.proteins,
      carbs: dailyGoal.carbs,
      fats: dailyGoal.fats,
      fiber: dailyGoal.fiber,
    },
  });

  function onSubmit(data: DailyGoal) {
    const newDailyGoal: DailyGoal = { ...data, id: dailyGoal.id };
    updateDailyGoal(newDailyGoal);
    navigate("/diary");
  }

  return (
    <Container>
      <Row>
        <Col md="5">
          <h1>Update Daily Goals</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Calories</label>
            <input
              {...register("calories", { valueAsNumber: true })}
              className="form-control"
            />
            {/* {errors.calories && (
    <p className="text-danger">{`${errors.calories.message}`}</p>
  )} */}
            <label>Proteins</label>
            <input
              {...register("proteins", { valueAsNumber: true })}
              className="form-control"
            />
            {/* {errors.proteins && (
    <p className="text-danger">{`${errors.proteins.message}`}</p>
  )} */}
            <label>Carbs</label>
            <input
              {...register("carbs", { valueAsNumber: true })}
              className="form-control"
            />
            {/* {errors.carbs && (
    <p className="text-danger">{`${errors.carbs.message}`}</p>
  )} */}
            <label>Fats</label>
            <input
              {...register("fats", { valueAsNumber: true })}
              className="form-control"
            />
            {/* {errors.fats && (
    <p className="text-danger">{`${errors.fats.message}`}</p>
  )} */}
            <label>Fiber</label>
            <input
              {...register("fiber", { valueAsNumber: true })}
              className="form-control"
            />
            <Link to={"/diary"}>
              <Button className="mt-2" variant="primary">
                Back
              </Button>{" "}
            </Link>
            <Button className="mt-2" variant="success" type="submit">
              Update
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default observer(UpdateGoals);
