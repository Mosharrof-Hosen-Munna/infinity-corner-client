import userEvent from '@testing-library/user-event'
import React, { useEffect } from 'react'
import useAuth from '../../Hooks/useAuth'
import AddProduct from './AddProduct/AddProduct'
import AllSeller from './AllSeller/AllSeller'
import MyOrder from './MyOrder/MyOrder'

const Dashboard = () => {
  const {user} = useAuth()

  const userRole = user?.databaseUser?.role
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title= 'InfinityCorner | Dashboard'
  }, [])
  return (
    <div>
      {userRole === 'admin' && <AllSeller></AllSeller>}
      {userRole === 'buyer' && <MyOrder></MyOrder>}
      {userRole === 'seller' && <AddProduct></AddProduct>}
    </div>
  )
}

export default Dashboard