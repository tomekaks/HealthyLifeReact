import { Meal } from "../../app/models/Meal";

interface Params {
  meal: Meal;
}

export default function TotalsRow(params: Params) {
  const { meal } = params;
  return (
    <tr>
      <td>Totals</td>
      <td></td>
      <td></td>
      <td>{meal.calories}</td>
      <td>{meal.proteins}</td>
      <td>{meal.carbs}</td>
      <td>{meal.fats}</td>
      <td>{meal.fiber}</td>
    </tr>
  );
}
