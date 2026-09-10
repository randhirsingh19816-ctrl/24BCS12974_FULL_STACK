import React, { useContext } from "react";
import { CurrencyContext } from "../context/currencycontext";

const StoreHeader = () => {
  const { changeCurrency } = useContext(CurrencyContext);

  const currencies = ["USD", "EUR", "GBP", "JPY"];

  return (
    <div>
      {currencies.map((code) => (
        <button
          key={code}
          onClick={() => changeCurrency(code)}
        >
          {code}
        </button>
      ))}
    </div>
  );
};

export default StoreHeader;