import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import useAuth from "../../../Hooks/useAuth";

const AllSeller = () => {
  const { user } = useAuth();

  const url = `${process.env.REACT_APP_API_BASE_URL}/api/user/seller/all`;
  const { data: allSeller = [], refetch } = useQuery({
    queryKey: ["allSeller", user],
    queryFn: async () => {
      const res = await axios.get(url);
      return res.data;
    },
  });

  return (
    <div className="my-4 mx-2">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
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
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSeller;
