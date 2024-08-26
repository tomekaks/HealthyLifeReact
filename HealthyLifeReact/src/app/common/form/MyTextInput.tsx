import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Product } from "../../models/Product/Product";

interface Props {
  label: string;
  name: string;
  placeholder: string;
  readOnly?: boolean;
  asNumber?: boolean;
}

function MyTextInput(props: Props) {
  const {
    register,
    formState: { errors },
  } = useForm({});

  return (
    // <Form.Group className="mb-2" controlId={`form${props.name}`}>
    //   <Form.Label>{props.label}</Form.Label>
    //   <Field
    //     {...field}
    //     name={props.name}
    //     placeholder={props.placeholder}
    //     as={Form.Control}
    //     isInvalid={meta.touched && !!meta.error}
    //     readOnly={props.readOnly}
    //   />
    //   {meta.touched && meta.error ? (
    //     <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
    //   ) : null}
    // </Form.Group >
    <Form.Group className="mb-2" controlId={`form${props.name}`}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        {...register(`${props.name}`)}
        placeholder={props.placeholder}
      />
      {errors.name && (
        <Form.Control.Feedback type="invalid">{`${errors.name.message}`}</Form.Control.Feedback>
      )}
    </Form.Group>
  );
}

export default MyTextInput;
