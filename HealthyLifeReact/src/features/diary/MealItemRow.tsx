import { Button } from "react-bootstrap";
import { MealItem } from "../../app/models/mealItem/MealItem";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";

interface Props {
  mealItem: MealItem;
  mealId: number;
}

function MealItemRow(props: Props) {
  const { mealItem, mealId } = props;
  const { dailySumStore } = useStore();

  return (
    <tr>
      <td>
        <Button
          variant="danger"
          onClick={() => dailySumStore.deleteMealItem(mealItem.id, mealId)}
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
