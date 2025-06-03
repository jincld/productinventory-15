import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { url } from "../utils/ApiUrl"; // Asegúrate de que 'url' apunte a la API de productos

const useFetchProducts = () => {
  const [dataProducts, setDataProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        toast.error("Failed to fetch products");
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setDataProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("Error fetching products");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    dataProducts,
    getProducts,
  };
};

export default useFetchProducts;
