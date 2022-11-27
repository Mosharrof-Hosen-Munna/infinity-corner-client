import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import useAuth from '../../../Hooks/useAuth';
import FeaturedCard from './FeaturedCard'

const FeaturedProduct = () => {
  const {user} = useAuth()

  const url = `${process.env.REACT_APP_API_BASE_URL}/api/products/seller/${user.email}`;
  const { data: featuredProduct = [], refetch } = useQuery({
    queryKey: ["featuredProduct", user],
    queryFn: async () => {
      const res = await axios.get(url);
      return res.data;
    },
  });
  return (
    <section className='py-24 bg-slate-50'>
        <div className="container mx-auto">
          <h1 className='text-5xl text-infinity font-semibold text-center mb-12'>Our Featured Product</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:mx-16">
            <FeaturedCard/>
            <FeaturedCard/>
            <FeaturedCard/>
            <FeaturedCard/>
            <FeaturedCard/>
            <FeaturedCard/>
            <FeaturedCard/>
          </div>
        </div>
    </section>
  )
}

export default FeaturedProduct