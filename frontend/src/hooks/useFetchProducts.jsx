import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { url } from "../utils/ApiUrl";

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

  const getProductById = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`);
      if (!response.ok) {
        toast.error("Failed to fetch product by id");
        return null;
      }
      const product = await response.json();
      return product;
    } catch (error) {
      console.error("Error fetching product by id:", error);
      toast.error("Error fetching product by id");
      return null;
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    dataProducts,
    getProducts,
    getProductById,
  };
};

export default useFetchProducts;
