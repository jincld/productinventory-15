import { Link, useParams } from "react-router-dom";
import Titulo from "../../components/Titulos/Titulos";
import InputText from "../../components/InputText/InputText";
import Button from "../../components/Button/Button";
import useDataProducts from "../../hooks/useDataProducts";
import { useForm } from "react-hook-form";

const Products = () => {
  const { id } = useParams();
  const methods = useForm();
  const { register, handleSubmit, errors } = useDataProducts(methods);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        to="/home"
        className="text-2xl font-bold text-gray-900 mb-4 bg-green-400 p-2 rounded w-auto text-center hover:bg-green-200 transition-colors"
      >
        Back To Dashboard
      </Link>

      <form
        onSubmit={handleSubmit}
        className="border-b border-gray-900/10 pb-12 bg-white shadow-md rounded-lg flex flex-col p-4"
      >
        <Titulo titulo="Product Information" />

        <div className="mt-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <InputText
            type="text"
            name="nombre"
            label="Product Name"
            placeholder="Enter product name"
            register={register}
            error={errors.nombre?.message}
          />

          <InputText
            type="number"
            name="precio"
            label="Price"
            placeholder="Enter price"
            register={register}
            error={errors.precio?.message}
          />

          <InputText
            type="text"
            name="img"
            label="Image URL"
            placeholder="Enter image URL"
            register={register}
            error={errors.img?.message}
          />
        </div>

        <div className="mt-6 flex justify-start">
          <Button type="submit" text={id ? "Edit Product" : "Save Product"} />
        </div>
      </form>
    </div>
  );
};

export default Products;
