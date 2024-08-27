import { LoaderFunctionArgs } from "react-router-dom";
import { store } from "../../app/stores/store";

export default function exerciseLoader({ params }: LoaderFunctionArgs) {
  const { id } = params;
  if (id) {
    const exercise = store.exerciseStore.loadExercise(Number(id));
    console.log(exercise);
    return exercise ?? null;
  }
  return null;
}
