import './App.css';

import CurrencyProvider from './context/currencycontext';
import StoreHeader from './components/storeheader';
import ProductList from './components/productlist';
import CheckoutCart from './components/checkoutcart';

function App() {
  return (
    <CurrencyProvider>
      <StoreHeader />
      <ProductList />
      <CheckoutCart />
    </CurrencyProvider>
  );
}

export default App;