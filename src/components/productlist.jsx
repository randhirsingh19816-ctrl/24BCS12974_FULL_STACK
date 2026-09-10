import React, { useContext } from "react";
import { CurrencyContext } from "../context/currencycontext";

const ProductList = () => {
  const { formatPrice } = useContext(CurrencyContext);

  return (
    <div>
      <h3>Wireless Headphones</h3>
      <p>Price: {formatPrice(100)}</p>
    </div>
  );
};

export default ProductList;