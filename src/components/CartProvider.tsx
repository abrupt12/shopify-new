import React, { useState } from 'react';
import { CartContext } from './product/ProductPage';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CartContext.Provider value={{ count, setCount }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider; 