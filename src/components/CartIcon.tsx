import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { CartContext } from './product/ProductPage';

export const CartIcon = () => {
  const { count } = React.useContext(CartContext);

  return (
    <div className="relative">
      <ShoppingCart className="w-6 h-6 text-[#003545]" />
      {count > 0 && (
        <div className="absolute -top-2 -right-2 bg-[#00796B] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {count}
        </div>
      )}
    </div>
  );
};

export default CartIcon; 