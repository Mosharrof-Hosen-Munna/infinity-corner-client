import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import useAuth from '../../../Hooks/useAuth';

const MyOrder = () => {
    const { user } = useAuth();
    const url = `${process.env.REACT_APP_API_BASE_URL}/api/orders/user/${user.email}`;
    const { data: myOrder = [], refetch } = useQuery({
      queryKey: ["myOrder", user],
      queryFn: async () => {
        const res = await axios.get(url);
        return res.data;
      },
    });
    console.log(myOrder)

  return (
    <div className="my-4 mx-2">
      {/* <div className="overflow-x-auto w-full">
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
                        src={order.photoUrl}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{order.name}</div>
                    <div className="text-sm opacity-50">{order.role}</div>
                  </div>
                </div>
              </td>
              <td>
               {order.email}
                
              </td>
              <td>
                {!order.isVerified ? <div className="p-2 bg-infinity inline-block text-white font-semibold">
                     Not verified
                </div>:
                <div className="p-2 bg-green-600 inline-block text-white font-semibold">
                     verified
                </div>}
              </td>
              <th>
              {!order.isVerified && <button  className="inline-block  bg-green-600  p-2 text-white font-medium  leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg mr-2 transition duration-150 ease-in-out "
              type="button"
              onClick={()=>handleVerify(order.email)}
              data-mdb-ripple="true"
              data-mdb-ripple-color="light">
                    Make verified
              </button>}
              <button  className="inline-block  bg-red-600  p-2 text-white font-medium  leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg mr-2 transition duration-150 ease-in-out "
              type="button"
              data-mdb-ripple="true"
              onClick={()=>handleDelete(order._id,order)}
              data-mdb-ripple-color="light">
                    Delete
              </button>
              </th>
            </tr>)}
          </tbody>
        </table>
      </div> */}
    </div>
  )
}

export default MyOrder