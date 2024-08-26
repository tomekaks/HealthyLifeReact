import { Button } from "react-bootstrap";
import { MealItem } from "../../app/models/MealItem/MealItem";
import { useStore } from "../../app/stores/store";

interface Props {
  mealItem: MealItem;
}

export default function MealItemRow(props: Props) {
  const { mealItem } = props;
  const { mealItemStore } = useStore();

  return (
    <tr>
      <td>
        <Button
          variant="danger"
          onClick={() => mealItemStore.deleteMealItem(mealItem.id)}
        >
          Delete
        </Button>
      </td>
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
