import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useFirebase from "../../../Hooks/useFirebase";
import useUser from "../../../Hooks/useUser";

const AllSeller = () => {
  const { user } = useAuth();
  const {deleteUser,verifyUser} = useUser()

  const url = `${process.env.REACT_APP_API_BASE_URL}/api/user/seller/all`;
  const { data: allSeller = [], refetch } = useQuery({
    queryKey: ["allSeller", user],
    queryFn: async () => {
      const res = await axios.get(url);
      return res.data;
    },
  });

  const handleVerify =async(email)=>{
    const data =await verifyUser(email)
    refetch()
    console.log(data)
  }

  const handleDelete = async(id,user)=>{
    const res = await deleteUser(id)
    refetch()
  }

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
            {allSeller && allSeller.map(seller=><tr>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://lh3.googleusercontent.com/a/ALm5wu2Qx3jLDMqh2V0OohPI0wyG_tg82XyTr2sC5K6Q=s96-c"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{seller.name}</div>
                    <div className="text-sm opacity-50">{seller.role}</div>
                  </div>
                </div>
              </td>
              <td>
               {seller.email}
                
              </td>
              <td>
                {!seller.isVerified ? <div className="p-2 bg-infinity inline-block text-white font-semibold">
                     Not verified
                </div>:
                <div className="p-2 bg-green-600 inline-block text-white font-semibold">
                     verified
                </div>}
              </td>
              <th>
              {!seller.isVerified && <button  className="inline-block  bg-green-600  p-2 text-white font-medium  leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg mr-2 transition duration-150 ease-in-out "
              type="button"
              onClick={()=>handleVerify(seller.email)}
              data-mdb-ripple="true"
              data-mdb-ripple-color="light">
                    Make verified
              </button>}
              <button  className="inline-block  bg-red-600  p-2 text-white font-medium  leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg mr-2 transition duration-150 ease-in-out "
              type="button"
              data-mdb-ripple="true"
              onClick={()=>handleDelete(seller._id,seller)}
              data-mdb-ripple-color="light">
                    Delete
              </button>
              </th>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSeller;
