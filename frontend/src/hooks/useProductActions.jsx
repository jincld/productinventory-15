import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { url } from "../utils/ApiUrl"; 

const useProductAction = (getProducts) => {
  const navigate = useNavigate();

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        toast.error("Failed to delete product");
        throw new Error("Failed to delete product");
      }

      toast.success("Producto eliminado exitosamente");
      // Opcional: esperar un poco para que el toast se vea antes de recargar
      setTimeout(() => {
        getProducts();
      }, 1200);
    } catch (error) {
      console.error("Error deleting product:", error);
      // Ya mostraste toast arriba, aquí no hace falta repetir
    }
  };

  const handleUpdateProduct = (id) => {
    navigate(`/products/${id}`);
  };

  return {
    deleteProduct,
    handleUpdateProduct,
  };
};

export default useProductAction;
