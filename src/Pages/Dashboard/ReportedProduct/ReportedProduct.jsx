import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useProduct from "../../../Hooks/useProduct";
import { ToastContainer, toast } from 'react-toastify';


const ReportedProduct = () => {
  const { user } = useAuth();
  const {deleteReport} = useProduct()

  const url = `${process.env.REACT_APP_API_BASE_URL}/api/product/reported-product`;
  const { data: reportedProduct = [], refetch } = useQuery({
    queryKey: ["reportedProduct", user],
    queryFn: async () => {
      const res = await axios.get(url);
      return res.data;
    },
  });

  console.log(reportedProduct);

  
  const handleDelete = async (id,productId) => {
      console.log(id,productId)
    const res = await deleteReport(id,productId);
    refetch();
    const deleteToast = toast('Reported product succesfully deleted')
    deleteToast()
  };

  return (
    <div className="my-4 mx-2">
      <ToastContainer/>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Product Details</th>
              <th>Reported User Details</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reportedProduct &&
              reportedProduct.map((report) => (
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={report.reportedProduct.imageUrl}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {report.reportedProduct.productName}
                        </div>
                        <div className="text-sm opacity-50">
                          {report.reportedProduct.descriptions.slice(0, 100)}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={report.reportedUser.photoUrl}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {report.reportedUser.name}
                        </div>
                        <div className="text-sm opacity-50">
                          {report.reportedUser.email}
                        </div>
                      </div>
                    </div>
                  </td>

                  <th>
                    <button
                      className="inline-block  bg-red-600  p-2 text-white font-medium  leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg mr-2 transition duration-150 ease-in-out "
                      type="button"
                      data-mdb-ripple="true"
                      onClick={() => handleDelete(report._id,report.reportedProduct._id)}
                      data-mdb-ripple-color="light"
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportedProduct;
