import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { url } from "../utils/ApiUrl"; // Asegúrate de que 'url' apunte a la API de productos

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
      toast.success("Product deleted successfully");
      getProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Failed to delete product");
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
