import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const CategoriesCard = ({ img, icon, categoryName }) => {
  return (
    <div className="flex items-center justify-center text-center rounded-2xl" style={{ background: `url(${img})`,backgroundSize:'100% 100%', backgroundRepeat:'no-repeat' }}>
      <div className="py-12 rounded-2xl  w-full" style={{background:'rgb(0 0 0 / 47%)'}}>
        <FontAwesomeIcon className="text-5xl text-infinity mb-2" icon={icon} />
        <div>
          <h1 className="text-white font-semibold text-4xl mb-2">{categoryName}</h1>
        </div>
        <Link to={`/category/${categoryName.toLowerCase()}`}>
            <button
              className="inline-block  bg-infinity px-4 py-2 text-white font-medium text-md leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out  mb-3"
              type="submit"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              BROWSE CATEGORIES
            </button>
          </Link>
      </div>
    </div>
  );
};

export default CategoriesCard;
