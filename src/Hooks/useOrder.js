import axios from "axios";

const useOrder = () => {
  const saveNewOrder = async (orderData) => {
    
    const url = `${process.env.REACT_APP_API_BASE_URL}/api/order/create`;
    const res = await axios.post(url, orderData);
    return res.data;
  };

  return {
    saveNewOrder,
  };
};


export default useOrder;
