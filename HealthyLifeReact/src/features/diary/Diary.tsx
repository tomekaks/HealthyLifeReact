import { Col, Container, Row, Table } from "react-bootstrap";
import MealRow from "./MealRow";
import { testMealItems } from "./TestMealItems";
import { MealItem } from "../../app/models/MealItem";
import MealItemRow from "./MealItemRow";

export default function Diary() {
  const mealItems: MealItem[] = testMealItems;
  return (
    <>
      <Container>
        <Row>
          <Col md-8>
            <div>
              <h1>Your dairy for:</h1>{" "}
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th></th>
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
                <MealRow name="First meal" />
                {mealItems
                  .filter((mealItem) => mealItem.mealId === 1)
                  .map((mealItem) => (
                    <MealItemRow mealItem={mealItem} />
                  ))}
                <MealRow name="Second meal" />
                {mealItems
                  .filter((mealItem) => mealItem.mealId === 2)
                  .map((mealItem) => (
                    <MealItemRow mealItem={mealItem} />
                  ))}
                <MealRow name="Third meal" />
                {mealItems
                  .filter((mealItem) => mealItem.mealId === 3)
                  .map((mealItem) => (
                    <MealItemRow mealItem={mealItem} />
                  ))}
                <MealRow name="Fourth meal" />
                {mealItems
                  .filter((mealItem) => mealItem.mealId === 4)
                  .map((mealItem) => (
                    <MealItemRow mealItem={mealItem} />
                  ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}
