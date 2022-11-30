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

  const adverticeProduct = async (id) => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/api/product/advertised/${id}`;
    const res = await axios.get(url);
    return res.data;
  };

  const createProductReport = async (data) => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/api/report-product/create`;
    const res = await axios.post(url, data);
    return res.data;
  };

  const deleteReport = async(id,productId)=>{
    const url = `${process.env.REACT_APP_API_BASE_URL}/api/reported-product/delete?reportId=${id}&&productId=${productId}`
    const res = await axios.delete(url)
    return res.data
}

  return {
    createProduct,
    deleteProduct,
    deleteReport,
    adverticeProduct,
    createProductReport,
  };
};

export default useProduct;
