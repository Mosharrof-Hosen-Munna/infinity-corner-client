import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import useAuth from '../../../Hooks/useAuth';
import useUser from '../../../Hooks/useUser';

const AllBuyer = () => {
    const { user } = useAuth();
    const {deleteUser} = useUser()
  
    const url = `${process.env.REACT_APP_API_BASE_URL}/api/user/buyer/all`;
    const { data: allBuyer = [], refetch } = useQuery({
      queryKey: ["allBuyer", user],
      queryFn: async () => {
        const res = await axios.get(url);
        return res.data;
      },
    });
  
    
    const handleDelete = async(id)=>{
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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {allBuyer && allBuyer.map(buyer=><tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={buyer.photoUrl}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{buyer.name}</div>
                      <div className="text-sm opacity-50">{buyer.role}</div>
                    </div>
                  </div>
                </td>
                <td>
                 {buyer.email}
                  
                </td>
                
                <th>
                
                <button  className="inline-block  bg-red-600  p-2 text-white font-medium  leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg mr-2 transition duration-150 ease-in-out "
                type="button"
                data-mdb-ripple="true"
                onClick={()=>handleDelete(buyer._id)}
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
}

export default AllBuyer