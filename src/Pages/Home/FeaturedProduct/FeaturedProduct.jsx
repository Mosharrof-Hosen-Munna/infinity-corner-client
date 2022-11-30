import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react'
import useAuth from '../../../Hooks/useAuth';
import ProductCard from '../../CategoryProduct/ProductCard';
import PurchaseModal from '../../CategoryProduct/PurchaseModal';
import FeaturedCard from './FeaturedCard'

const FeaturedProduct = () => {
  const [showModal, setShowModal] = useState(false);
  const [product,setProduct]= useState(null)
  const {user} = useAuth()

  const url = `${process.env.REACT_APP_API_BASE_URL}/api/product/adverticed/all`;
  const { data: featuredProduct = [], refetch } = useQuery({
    queryKey: ["featuredProduct", user],
    queryFn: async () => {
      const res = await axios.get(url);
      return res.data;
    },
  });

  console.log(featuredProduct)

  return (
   <>
   {featuredProduct[0] &&  <section className='py-24 bg-slate-50'>
        <div className="container mx-auto">
          <h1 className='text-5xl text-infinity font-semibold text-center mb-12'>Our Featured Product</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:mx-16">
            {featuredProduct.map(product=> <ProductCard setProduct={setProduct} isFeatured showModal={showModal} key={product._id} product={product} setShowModal={setShowModal} />)}
           
          </div>
        </div>
        {showModal && <PurchaseModal product={product} setShowModal={setShowModal} />}
    </section>}
   </>
  )
}

export default FeaturedProduct