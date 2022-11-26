import React from 'react'
import MacbookImg from '../../../images/macbook.webp'
import AsusImg from '../../../images/asus.webp'
import DellImg from '../../../images/dell.jpg'
import HpImg from '../../../images/hp.png'

import CategoriesCard from './CategoriesCard'
import { faLaptop,faLaptopFile } from '@fortawesome/free-solid-svg-icons'

const Categories = () => {
  return (
    <div className='py-20 '>
        <div className="container mx-auto">
        <h1 className='text-5xl  text-infinity font-semibold text-center mb-12'>All Categories</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
                <CategoriesCard img={MacbookImg} icon={faLaptop} categoryName='Macbook'/>
                <CategoriesCard img={AsusImg} icon={faLaptopFile} categoryName='Asus'/>
                <CategoriesCard img={DellImg} icon={faLaptop} categoryName='Dell'/>
                <CategoriesCard img={HpImg} icon={faLaptopFile} categoryName='Hp'/>
            </div>
        </div>
    </div>
  )
}

export default Categories