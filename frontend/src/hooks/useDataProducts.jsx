import { useEffect } from "react";
import { url } from "../utils/ApiUrl";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import useFetchProducts from "./useFetchProducts";

const useDataProducts = (methods) => {
  const { getProductById, getProducts } = useFetchProducts();
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = methods;

  const saveProductForm = async (dataForm) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataForm),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error al guardar (${response.status}): ${errorText}`);
      }

      toast.success("Producto guardado exitosamente");
      setTimeout(() => {
        navigate("/home");
      }, 0); // <--- retraso para que el toast se vea bien
    } catch (error) {
      toast.error("Error guardando producto");
      console.error("Error POST:", error);
    } finally {
      reset();
      getProducts();
    }
  };

  const editProduct = async (dataForm) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataForm),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error al actualizar (${response.status}): ${errorText}`);
      }

      toast.success("Producto actualizado exitosamente");
      setTimeout(() => {
        navigate("/home");
      }, 0);
    } catch (error) {
      toast.error("Error actualizando producto");
      console.error("Error PUT:", error);
    } finally {
      reset();
      getProducts();
    }
  };

  const handleProductAction = (dataForm) => {
    if (id) {
      editProduct(dataForm);
    } else {
      saveProductForm(dataForm);
    }
  };

  const loadProduct = async () => {
    if (id) {
      const product = await getProductById(id);
      if (product) {
        reset({
          producto: product.producto,
          precio: product.precio,
          categoria: product.categoria,
          stock: product.stock,
        });
      }
    }
  };

  useEffect(() => {
    loadProduct();
  }, [id]);

  return {
    register,
    handleSubmit: handleSubmit(handleProductAction),
    errors,
  };
};

export default useDataProducts;
