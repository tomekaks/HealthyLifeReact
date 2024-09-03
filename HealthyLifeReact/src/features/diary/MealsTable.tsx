import { Table } from "react-bootstrap";
import MealRow from "./MealRow";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";

function MealsTable() {
  const { dailySumStore } = useStore();
  const { dailySum } = dailySumStore;
  return (
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
  );
}

export default observer(MealsTable);
