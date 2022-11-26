import React from 'react'
import { Link } from "react-router-dom";
import Moment from 'react-moment';

const ProductCard = () => {
  return (
    <div className="bg-white p-2 rounded-t-md shadow-md shadow-slate-200">
    
    
    <div >
      <img
        src="https://demo.spoonthemes.net/themes/adifier/wp-content/uploads/2018/02/adr-22-355x250.jpg"
        alt=""
        className="w-full rounded-t-md "
      />
     
    </div>
    <div className="p-2 mt-2">
      <div className="flex items-start mb-1">
        <div className="avatar">
          <div className="w-5 rounded-full">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <h1 className="text-sm ml-1">Mosharrof Hosen Munna</h1>
          <Moment className="text-xs ml-1 text-gray-500" fromNow>2022-04-19T12:59-0500</Moment>
        </div>
      </div>

      <h1 className="text-xl font-semibold">Macbook</h1>
      <p className="text-xs text-gray-600">
        Lorem ipsum dolor sit amet co nse ctetur adipisicing elit.
      </p>
      <div className="flex items-center justify-between text-sm mt-1 text-gray-400">
        <h3>macbook</h3>
        <h3>Dhaka</h3>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <span className="text-infinity text-lg font-semibold">50$</span>
          <span className="text-sm line-through">(100$)</span>
        </div>
        <div className="text-sm">excellent</div>
      </div>
      <label htmlFor="purchase-modal" className='inline-block  bg-infinity px-4 py-2 text-white font-medium text-md leading-tight uppercase rounded shadow-md cursor-pointer mt-2 float-right  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out  mb-3'>PURCHASE NOW
     
      </label>
    </div>
    
  </div>
  )
}

export default ProductCard