import axios from "axios";

const useOrder = () => {
  const saveNewOrder = async (orderData) => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/api/order/create`;
    const res = await axios.post(url, orderData);
    return res.data;
  };

//   const { data: allProducts = [], refetch:allProductsRefech } = useQuery({
//     queryKey: ["allproducts"],
//     queryFn: async () => {
//       const res = await fetch(
//         `${process.env.REACT_APP_SERVER_URL}/allproducts`
//       );
//       const data = await res.json();
//       return data;
//     },
//   });

  return {
    saveNewOrder,
  };
};


export default useOrder;
