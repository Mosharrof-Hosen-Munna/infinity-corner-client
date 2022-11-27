import React from "react";
import Moment from "react-moment";

const ProductCard = ({ product, setShowModal, showModal, setProduct }) => {
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
    sellerPhoto
  } = product;
  return (
    <div className="bg-white p-2  rounded-t-md shadow-md shadow-slate-200">
      <div>
        <img src={imageUrl} alt="" className="w-full rounded-t-md h-64" />
      </div>
      <div className="p-2 mt-2">
        <div className="flex items-start mb-1">
          <div className="avatar">
            <div className="w-5 rounded-full">
              <img src={sellerPhoto} />
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <h1 className="text-sm ml-1">{sellerName}</h1>
            <Moment className="text-xs ml-1 text-gray-500" fromNow>
              {createdAt}
            </Moment>
          </div>
        </div>

        <h1 className="text-xl font-semibold">{productName}</h1>
        <p className="text-xs text-gray-600">{descriptions}</p>
        <div className="flex items-center justify-between text-sm mt-1 text-gray-400">
          <h3>{category}</h3>
          <h3>{location}</h3>
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
        <label
          onClick={() => {
            setProduct(product);
            setShowModal(true);
          }}
          htmlFor="purchase-modal"
          className="inline-block  bg-infinity px-4 py-2 text-white font-medium text-md leading-tight uppercase rounded shadow-md cursor-pointer mt-2 float-right  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out  mb-3"
        >
          PURCHASE NOW
        </label>
      </div>
    </div>
  );
};

export default ProductCard;
