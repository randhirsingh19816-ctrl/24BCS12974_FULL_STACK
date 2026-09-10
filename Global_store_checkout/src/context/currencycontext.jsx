import React, { createContext, useState } from "react";

export const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD");

  const exchangeRates = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 150
  };

  const symbols = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    JPY: "¥"
  };

  const changeCurrency = (code) => {
    setCurrency(code);
  };

  const formatPrice = (price) => {
    const convertedPrice = price * exchangeRates[currency];

    return `${symbols[currency]} ${convertedPrice.toFixed(2)}`;
  };

  return (
    <CurrencyContext.Provider
      value={{ currency, changeCurrency, formatPrice }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;