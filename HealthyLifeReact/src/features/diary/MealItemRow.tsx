import { MealItem } from "../../app/models/MealItem";

interface Props {
  mealItem: MealItem;
}

export default function MealItemRow(props: Props) {
  const { mealItem } = props;
  return (
    <tr>
      <td></td>
      <td>{mealItem.product.name}</td>
      <td>{mealItem.weight}</td>
      <td>{mealItem.calories}</td>
      <td>{mealItem.proteins}</td>
      <td>{mealItem.carbs}</td>
      <td>{mealItem.fats}</td>
      <td>{mealItem.fiber}</td>
    </tr>
  );
}
