import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'
import { Dna } from  'react-loader-spinner'


const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth()
    
    const location = useLocation()

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
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
      }

  return children
}

export default PrivateRoute