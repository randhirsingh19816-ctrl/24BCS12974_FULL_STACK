import React, { useContext } from "react";
import { CurrencyContext } from "../context/currencycontext";

const CheckoutCart = () => {
  const { formatPrice } = useContext(CurrencyContext);

  return (
    <div>
      <h3>Order Summary</h3>
      <p>Subtotal: {formatPrice(150)}</p>
    </div>
  );
};

export default CheckoutCart;