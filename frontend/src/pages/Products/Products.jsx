import { Link, useParams } from "react-router-dom";
import Titulo from "../../components/Titulos/Titulos";
import InputText from "../../components/InputText/InputText";
import Button from "../../components/Button/Button";
import useDataProducts from "../../hooks/useDataProducts";
import { useForm } from "react-hook-form";
import './Products.css';

const Products = () => {
  const { id } = useParams();
  const methods = useForm();
  const { register, handleSubmit, errors } = useDataProducts(methods);

  return (
        <div className="homebg">
    <div className="backproducts d-flex flex-column align-items-center">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
  <Link
    to="/home"
    className="btn btn-secondary mb-4 mt-5"
  >
    Regresar a Dashboard
  </Link>

  <form
    onSubmit={handleSubmit}
    className="border border-gray-300 bg-white shadow-md rounded-lg p-4 mx-auto d-flex flex-column align-items-center"
    style={{ maxWidth: "600px" }}
  >
    <Titulo titulo="Product Information" />

    <div className="mt-3 w-100 row gx-3 gy-3">
      <InputText
        type="text"
        name="producto"
        label="Product Name"
        placeholder="Escribe el nombre del producto"
        register={register}
        error={errors?.producto?.message}
        className="col-12 col-sm-6"
      />

      <InputText
        type="number"
        name="precio"
        label="Price"
        placeholder="Escribe el precio"
        register={register}
        error={errors?.precio?.message}
        className="col-12 col-sm-6"
      />

      <InputText
        type="text"
        name="categoria"
        label="Categoría"
        placeholder="Escribe la categoría"
        register={register}
        error={errors?.categoria?.message}
        className="col-12 col-sm-6"
      />

      <InputText
        type="number"
        name="stock"
        label="Stock"
        placeholder="Escribe el stock"
        register={register}
        error={errors?.stock?.message}
        className="col-12 col-sm-6"
      />
    </div>

    <div className="mt-4 w-100 d-flex justify-content-center">
      <Button type="submit" text={id ? "Guardar cambios" : "Guardar producto"} />
    </div>
  </form>
</div>
</div>
</div>
  );
};

export default Products;
