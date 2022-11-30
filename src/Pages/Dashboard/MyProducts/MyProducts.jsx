import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import useAuth from "../../../Hooks/useAuth";
import MyProductCard from "./MyProductCard";

const MyProducts = () => {
  const { user } = useAuth();

  const url = `${process.env.REACT_APP_API_BASE_URL}/api/products/seller/${user.email}`;
  const { data: myProducts = [], refetch } = useQuery({
    queryKey: ["myProducts", user],
    queryFn: async () => {
      const res = await axios.get(url);
      return res.data;
    },
  });
  return (
    <div className="pb-16 pt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myProducts &&
          myProducts.map((product) => <MyProductCard product={product} refetch={refetch}/>)}
      </div>
    </div>
  );
};

export default MyProducts;
