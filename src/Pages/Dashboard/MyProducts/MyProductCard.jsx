import React from "react";
import Moment from "react-moment";
import useProduct from "../../../Hooks/useProduct";

const MyProductCard = ({ product, refetch }) => {
  const { deleteProduct,adverticeProduct } = useProduct();

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
    isAdvertise
  } = product;

  return (
    <div>
      <div className="bg-white p-2 h-full rounded-t-md shadow-md shadow-slate-200">
        <div>
          <img src={imageUrl} alt="" className="w-full h-64 rounded-t-md " />
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
        </div>
        <div className="dropdown dropdown-bottom dropdown-end float-right w-1/3 m-2">
          <label
            tabIndex={0}
            className="btn w-full bg-infinity m-1 hover:bg-infinity hover:border-infinity border-infinity"
          >
            Edit
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {!isAdvertise && <li  onClick={async()=>{
                await adverticeProduct(_id)
                refetch()
            }}>
              <a>{!isAdvertise ? "Advertise":"Already advertised"}</a>
            </li>}
            {
                isAdvertise && <li  > 
                  <a>Already advertised</a>
                </li>
            }
            <li
              onClick={async() => {
               await deleteProduct(_id);
                refetch();
              }}
            >
              <a>Delete</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyProductCard;
