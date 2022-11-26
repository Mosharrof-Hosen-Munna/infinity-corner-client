import React, { useEffect } from 'react'
import ProductCard from './ProductCard'
import PurchaseModal from './PurchaseModal'

const CategoryProduct = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title= 'InfinityCorner | A resale listing platform'
      }, [])
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
        <PurchaseModal/>
    </div>
  )
}

export default CategoryProduct