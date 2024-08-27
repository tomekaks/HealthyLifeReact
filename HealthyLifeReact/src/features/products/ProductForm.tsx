import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Product } from "../../app/models/product/Product";
import { Button, Col, Container, Row } from "react-bootstrap";
import { CreateProduct } from "../../app/models/product/CreateProduct";
import { UpdateProduct } from "../../app/models/product/UpdateProduct";

const productSchema = z.object({
  name: z.string(),
  calories: z.number().min(0),
  proteins: z.number().min(0),
  carbs: z.number().min(0),
  fats: z.number().min(0),
  fiber: z.number().min(0),
  price: z.number().min(0),
});

export default observer(function ProductForm() {
  const { productStore } = useStore();
  const { createProduct, updateProduct } = productStore;
  const { id } = useParams();
  const product = useLoaderData() as UpdateProduct | null;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CreateProduct | UpdateProduct>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      id: product?.id || 0,
      name: product?.name || "",
      calories: product?.calories || 0,
      proteins: product?.proteins || 0,
      carbs: product?.carbs || 0,
      fats: product?.fats || 0,
      fiber: product?.fiber || 0,
      price: product?.price || 0,
    },
  });

  const onSubmit = (data: CreateProduct | UpdateProduct) => {
    if (id) {
      const updateData: UpdateProduct = { ...data, id: Number(id) };
      updateProduct(updateData);
    } else {
      const createData: CreateProduct = { ...data, createdBy: "" };
      createProduct(createData);
    }
    navigate("/products");
  };

  return (
    <Container>
      {Number(id) > 0 ? <h1>Edit product</h1> : <h1>Create product</h1>}
      <Row>
        <Col md="5">
          {" "}
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input {...register("name")} className="form-control" />
            {errors.name && (
              <p className="text-danger">{`${errors.name.message}`}</p>
            )}
            <label>Calories</label>
            <input
              {...register("calories", { valueAsNumber: true })}
              className="form-control"
            />
            {errors.calories && (
              <p className="text-danger">{`${errors.calories.message}`}</p>
            )}
            <label>Proteins</label>
            <input
              {...register("proteins", { valueAsNumber: true })}
              className="form-control"
            />
            {errors.proteins && (
              <p className="text-danger">{`${errors.proteins.message}`}</p>
            )}
            <label>Carbs</label>
            <input
              {...register("carbs", { valueAsNumber: true })}
              className="form-control"
            />
            {errors.carbs && (
              <p className="text-danger">{`${errors.carbs.message}`}</p>
            )}
            <label>Fats</label>
            <input
              {...register("fats", { valueAsNumber: true })}
              className="form-control"
            />
            {errors.fats && (
              <p className="text-danger">{`${errors.fats.message}`}</p>
            )}
            <label>Fiber</label>
            <input
              {...register("fiber", { valueAsNumber: true })}
              className="form-control"
            />
            {errors.fiber && (
              <p className="text-danger">{`${errors.fiber.message}`}</p>
            )}
            <label>Price</label>
            <input
              {...register("price", { valueAsNumber: true })}
              className="form-control"
            />
            {errors.price && (
              <p className="text-danger">{`${errors.price.message}`}</p>
            )}
            <Link to={"/products"}>
              <Button className="mt-2" variant="primary">
                Back
              </Button>{" "}
            </Link>
            <Button className="mt-2" variant="success" type="submit">
              Submit
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
});
