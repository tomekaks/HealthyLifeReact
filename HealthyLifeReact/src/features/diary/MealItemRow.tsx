import { Button } from "react-bootstrap";
import { MealItem } from "../../app/models/mealItem/MealItem";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";

interface Props {
  mealItem: MealItem;
}

function MealItemRow(props: Props) {
  const { mealItem } = props;
  const { mealItemStore } = useStore();

  return (
    <tr>
      <td>
        <Button
          variant="danger"
          onClick={() => mealItemStore.deleteMealItem(mealItem.id)}
        >
          Remove
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
export default observer(MealItemRow);
