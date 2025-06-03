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
      if (!response.ok) throw new Error("Failed to add product");
      toast.success("Product saved successfully");
      navigate("/home");
    } catch (error) {
      toast.error("Error saving product");
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
      if (!response.ok) throw new Error("Failed to update product");
      toast.success("Product updated successfully");
      navigate("/home");
    } catch (error) {
      toast.error("Error updating product");
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
          nombre: product.producto,
          precio: product.precio,
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
