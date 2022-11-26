import React from "react";
import { Link } from "react-router-dom";
import Moment from 'react-moment';

const FeaturedCard = () => {
  return (
    <div className="bg-white p-2 rounded-t-md shadow-md shadow-slate-200">
      <Link>
      
      <div className="relative">
        <img
          src="https://demo.spoonthemes.net/themes/adifier/wp-content/uploads/2018/02/adr-22-355x250.jpg"
          alt=""
          className="w-full rounded-t-md "
        />
        <span className="bg-sky-500  px-4  text-white font-semibold absolute top-0">
          Featured
        </span>
      </div>
      <div className="p-2">
        <div className="flex items-start mb-1">
          <div className="avatar">
            <div className="w-5 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <h1 className="text-sm ml-1">Mosharrof Hosen Munna</h1>
            <Moment className="text-sm ml-1" fromNow>2022-04-19T12:59-0500</Moment>
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
            <span className="text-sky-600 text-lg font-semibold">50$</span>
            <span className="text-sm line-through">(100$)</span>
          </div>
          <div className="text-sm">excellent</div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default FeaturedCard;
