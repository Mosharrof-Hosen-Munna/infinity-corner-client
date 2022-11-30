import React  from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const AdminRoute = ({ children }) => {
    const {user,loading} = useAuth()
    const location = useLocation()

    const isAdmin = user.databaseUser.role === 'admin'? true : false

    if (loading ) {
        return <div>loading..........</div>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    if (!isAdmin) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children
};

export default AdminRoute;