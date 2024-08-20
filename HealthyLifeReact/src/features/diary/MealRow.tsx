interface Props {
  name: string;
}

export default function MealRow(props: Props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  );
}
