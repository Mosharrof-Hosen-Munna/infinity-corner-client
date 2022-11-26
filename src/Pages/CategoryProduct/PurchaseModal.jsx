import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

const PurchaseModal = ({product}) => {
  const {user } = useAuth()
  const [orderData,setOrderData] = useState({})


    const handleOnChange = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      const newOrderData = { ...orderData };
      newOrderData[field] = value;
      setOrderData(newOrderData);
    };
  

    const handleSubmit = ()=>{
      const order = {
        ...orderData,
        createAt: new Date(),
       orderProduct:  product,

      }
    }

    useEffect(()=>{
      setOrderData({
        buyer: user?.databaseUser
      })
    },[user])

  return (
    <div>
      <input type="checkbox" id="purchase-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="purchase-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{"name"}</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-3">
            <input
              type="text"
              name="name"
              value={user?.displayName}
              disabled
              className="input w-full shadow-lg"
            />
            <input
              name="email"
              type="email"
              value={user?.email}
              disabled
              className="input w-full shadow-lg"
            />
            <input
              name="price"
              value={'resalePrice'}
              disabled
              type="number"
              className="input w-full shadow-lg"
            />
            <input
              name="phone"
              required
              type="tel"
              placeholder="Your Phone Number"
              className="input w-full shadow-lg"
              onChange={handleOnChange}
            />
            <input
              name="location"
              required
              type="text"
              placeholder="Meeting Location"
              className="input w-full shadow-lg"
              onChange={handleOnChange}
            />
            <input
              type="submit"
              className="inline-block  bg-infinity px-4 py-2 text-white font-medium text-md leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out  "
              value="Order"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PurchaseModal;
