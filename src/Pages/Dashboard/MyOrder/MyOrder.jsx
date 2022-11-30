import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const MyOrder = () => {
  const { user, logOut } = useAuth();
  const url = `${process.env.REACT_APP_API_BASE_URL}/api/orders/user/${user.email}`;
  const { data: myOrder = [], refetch } = useQuery({
    queryKey: ["myOrder", user],
    queryFn: async () => {
      const res = await axios.get(url, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (res.status === 401 || res.status === 403) {
        logOut();
      }

      return res.data;
    },
  });

  console.log(myOrder)

  return (
    <div className="my-4 mx-2">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Profile</th>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myOrder && myOrder.map(order=><tr>
              <td>
            {console.log(order)}
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={order.orderProduct.imageUrl}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{order.orderProduct.productName}</div>
                    <div className="text-sm opacity-50"><Moment className="text-xs ml-1 text-gray-500" fromNow>
              {order.createAt}
            </Moment></div>
                  </div>
                </div>
              </td>
              <td>
               {order.buyer.email}
                
              </td>
              <td>
               {order.buyer.email}
                
              </td>
              
              <th>
              
              {
                order.paid &&<button  className="inline-block  bg-red-600  p-2 text-white font-medium  leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg mr-2 transition duration-150 ease-in-out "
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light">
                      paid
                </button>
              }
              {
                !order.paid && <Link  to={`/dashboard/payment/${order._id}`}>
                <button  className="inline-block  bg-green-600  p-2 text-white font-medium  leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg mr-2 transition duration-150 ease-in-out "
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light">
                      Pay
                </button></Link>
              }
              </th>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
