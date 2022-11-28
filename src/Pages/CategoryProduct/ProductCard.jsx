import React from "react";
import Moment from "react-moment";

const ProductCard = ({ product, setShowModal, showModal, setProduct,isFeatured ,handleReportProduct}) => {
  const {
    category,
    condition,
    sellerName,
    resalePrice,
    purchaseDate,
    sellerEmail,
    createdAt,
    descriptions,
    imageUrl,
    isAvailable,
    isVerified,
    location,
    yearsOfUse,
    _id,
    originalPrice,
    productName,
    sellerPhoto,
  } = product;
  return (
    <div className="bg-white p-2  rounded-t-md shadow-md shadow-slate-200">
      <div className="relative">
        <img src={imageUrl} alt="" className="w-full rounded-t-md h-64 " />
        {isFeatured &&<span className="bg-infinity -ml-2  px-4  text-white font-semibold absolute top-0">
          Featured
        </span>}
      </div>
      <div className="p-2 mt-2">
        <div className="flex items-start mb-1">
          <div className="avatar">
            <div className="w-5 rounded-full">
              <img src={sellerPhoto} />
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex">
              <h1 className="text-sm mx-1">{sellerName} </h1>
              {isVerified && <input
                type="checkbox"
                checked
                className="checkbox checkbox-success cursor-default checkbox-xs"
              />}
            </div>
            <Moment className="text-xs ml-1 text-gray-500" fromNow>
              {createdAt}
            </Moment>
          </div>
        </div>

        <h1 className="text-xl font-semibold">{productName}</h1>
        <p className="text-xs text-gray-600">{descriptions}</p>
        <div className="flex items-center justify-between text-sm mt-1 text-gray-400">
          <h3>Location: {location}</h3>
          <h3>{isAvailable ? <span className="text-green-600 text-lg font-semibold">Available</span>: <span className="text-red-600 text-lg font-semibold">Sold*</span>}</h3>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-infinity text-lg font-semibold">
              {resalePrice}$
            </span>
            <span className="text-sm line-through">({originalPrice}$)</span>
          </div>
          <div className="text-sm">{condition}</div>
        </div>
        <div className="flex items-center justify-between">
          <div onClick={()=>handleReportProduct(product)} className="text-lg cursor-pointer font-semibold text-red-600">
            Report
          </div>
          <div>
          {isAvailable &&<label
          onClick={() => {
            setProduct(product);
            setShowModal(true);
          }}
          htmlFor="purchase-modal"
          className="inline-block  bg-infinity px-4 py-2 text-white font-medium text-md leading-tight uppercase rounded shadow-md cursor-pointer mt-2 float-right  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out  mb-3"
        >
          PURCHASE NOW
        </label>}
       {!isAvailable&& <label
          className="inline-block  bg-infinity px-4 py-2 text-white font-medium text-md leading-tight uppercase rounded shadow-md  mt-2 float-right  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out cursor-not-allowed  mb-3"
        >
          Sold*
        </label>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
