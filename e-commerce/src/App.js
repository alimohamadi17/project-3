import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Cart from './Cart';
import Home from './Home';
import { CartProvider } from 'react-use-cart'


function App() {
  return (
    <div >
      <CartProvider>
        <Home />
        <Cart />
      </CartProvider>
    </div>
  );
}

export default App;
