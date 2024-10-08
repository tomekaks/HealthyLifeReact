import { Link } from "react-router-dom";
import { Meal } from "../../app/models/Meal";
import MealItemRow from "./MealItemRow";
import TotalsRow from "./MealTotalsRow";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";

interface Props {
  meal: Meal;
}

function MealRow(props: Props) {
  const { meal } = props;
  return (
    <>
      <tr>
        <th>{meal.name}</th>
        <td>
          <Link to={`addMealItems/${meal.id}`}>
            <Button variant="success">Add</Button>
          </Link>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      {meal.mealItems.map((mealItem) => (
        <MealItemRow mealItem={mealItem} mealId={meal.id} key={mealItem.id} />
      ))}
      <TotalsRow meal={meal} />
    </>
  );
}

export default observer(MealRow);
