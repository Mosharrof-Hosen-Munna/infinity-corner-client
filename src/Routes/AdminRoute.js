import React  from 'react';
import { Dna } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const AdminRoute = ({ children }) => {
    const {user,loading} = useAuth()
    const location = useLocation()

    const isAdmin = user?.databaseUser?.role === 'admin'? true : false

    if(loading){
        return <div className="container mx-auto ">
        <div className="flex justify-center items-center py-48">
        <Dna
      visible={true}
      height="250"
      width="250"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
        </div>
      </div>
    }

    if (!user || !isAdmin) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    
    return children
};

export default AdminRoute;