import { Table } from "react-bootstrap";
import { Meal } from "../../app/models/Meal";

const meals: Meal[] = [];

export default function MealList() {
  return (
    <Table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Weight</th>
          <th>Calories</th>
          <th>Proteins</th>
          <th>Carbs</th>
          <th>Fats</th>
          <th>Fiber</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {meals.map((meal) => (
            <tr>
              <td>{meal.product.name}</td>
              <td>{meal.weight}</td>
              <td>{meal.calories}</td>
              <td>{meal.proteins}</td>
              <td>{meal.carbs}</td>
              <td>{meal.fats}</td>
              <td>{meal.fiber}</td>
            </tr>
          ))}
        </tr>
      </tbody>
    </Table>
  );
}
