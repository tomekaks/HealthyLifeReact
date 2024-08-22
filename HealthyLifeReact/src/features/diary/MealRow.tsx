import { Link } from "react-router-dom";
import { Meal } from "../../app/models/Meal";
import MealItemRow from "./MealItemRow";
import TotalsRow from "./TotalsRow";
import { Button } from "react-bootstrap";

interface Props {
  meal: Meal;
}

export default function MealRow(props: Props) {
  const { meal } = props;
  return (
    <>
      <tr>
        <td>{meal.name}</td>
        <td>
          <Link to={`addProducts/${meal.id}`}>
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
        <MealItemRow mealItem={mealItem} key={mealItem.id} />
      ))}
      <TotalsRow meal={meal} />
    </>
  );
}
