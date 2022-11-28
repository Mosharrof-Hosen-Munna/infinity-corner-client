import userEvent from '@testing-library/user-event'
import React, { useEffect } from 'react'
import useAuth from '../../Hooks/useAuth'
import AddProduct from './AddProduct/AddProduct'
import AllSeller from './AllSeller/AllSeller'

const Dashboard = () => {
  const {user} = useAuth()

  const userRole = user?.databaseUser?.role
  
  return (
    <div>
      {userRole === 'admin' && <AllSeller></AllSeller>}
      {userRole === 'buyer' && <AllSeller></AllSeller>}
      {userRole === 'seller' && <AddProduct></AddProduct>}
    </div>
  )
}

export default Dashboard