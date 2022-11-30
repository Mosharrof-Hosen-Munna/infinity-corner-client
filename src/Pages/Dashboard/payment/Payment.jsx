import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51M8z11BBJqjHathUJs2ceQ8r60hTAQQuDIRpgUZieoQi2lUCc1CLrmwGoUUSiTkyKrTHC0Zfb239SXagaOECS5IE00K97jFtnP"
);

const Payment = () => {
  const [order, setOrder] = useState({});

  const { orderId } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/api/order/${orderId}`)
      .then((res) => setOrder(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(order);
  console.log(process.env.REACT_APP_STRIPE_PK);

  return (
    <div>
      {order && (
        <h1 className="text-3xl mt-5 font-semibold">
          Payment for {order.orderProduct?.productName} - $
          <span className="text-infinity">
            {order.orderProduct?.resalePrice}
          </span>
        </h1>
      )}
      {/* stripe form */}
      <section className="w-96 my-12">
        <Elements stripe={stripePromise}>
          {order && <CheckoutForm order={order} />}
        </Elements>
      </section>
    </div>
  );
};

export default Payment;
