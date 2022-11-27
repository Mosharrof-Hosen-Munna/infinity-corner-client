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

  const deleteProduct = async (id) => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/api/product/delete/${id}`;
    const res = await axios.delete(url);
  
    return res.data;
  };

  const adverticeProduct = async(id)=>{
    const url = `${process.env.REACT_APP_API_BASE_URL}/api/product/advertised/${id}`;
    const res = await axios.get(url)
    return res.data
  }

  return {
    createProduct,
    deleteProduct,
    adverticeProduct
  };
};

export default useProduct;
