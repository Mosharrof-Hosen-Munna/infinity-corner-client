import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useProduct from "../../Hooks/useProduct";
import ProductCard from "./ProductCard";
import PurchaseModal from "./PurchaseModal";

const CategoryProduct = () => {
  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState(null);

  const { categoryName } = useParams();
  const {createProductReport} = useProduct()
  const { user } = useAuth()

  const url = `${process.env.REACT_APP_API_BASE_URL}/api/products/category/${categoryName}`;
  const { data: categoryProducts = [], refetch } = useQuery({
    queryKey: ["categoryProducts", categoryName],
    queryFn: async () => {
      const res = await axios.get(url);
      return res.data;
    },
  });
  console.log(categoryProducts);

  const handleReportProduct = async(product) => {
    const reportObj = {
      reportedProduct: product,
      reportedUser: user.databaseUser
    }
    const data = await createProductReport(reportObj)
    console.log(data)

  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "InfinityCorner | A resale listing platform";
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryProducts &&
          categoryProducts.map((product) => (
            <ProductCard
              setProduct={setProduct}
              showModal={showModal}
              key={product._id}
              product={product}
              setShowModal={setShowModal}
              handleReportProduct={handleReportProduct}
            />
          ))}
      </div>
      {showModal && (
        <PurchaseModal product={product} setShowModal={setShowModal} />
      )}
    </div>
  );
};

export default CategoryProduct;
