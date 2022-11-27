import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useProduct = () => {
  const createProduct = async (data) => {
    const res = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/api/product/create`,
      data
    );
    return res.data;
  };

  const LoadCategoryProducts = async (categoryName) => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/api/products/category/${categoryName}`;
    const { data: categoryProducts = [], refetch } = useQuery({
      queryKey: ["allproducts"],
      queryFn: async () => {
        const res = await axios.get(url);
        return res.data;
      },
    });
    return { categoryProducts };
  };

  return {
    createProduct,
    LoadCategoryProducts,
  };
};

export default useProduct;
