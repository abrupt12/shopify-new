import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartIcon } from '../CartIcon';
import { CartContext } from '../product/ProductPage';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const { count } = useContext(CartContext);
  const [isAnimating, setIsAnimating] = React.useState(false);

  // Trigger animation when cart count changes
  useEffect(() => {
    if (count > 0) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-bold text-[#003545]">
            Lumora
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/blog" className="text-[#003545] hover:text-[#00796B] transition-colors">
              Blog
            </Link>
            <Link to="/features" className="text-[#003545] hover:text-[#00796B] transition-colors">
              Features
            </Link>
            <Link to="/shop" className="text-[#003545] hover:text-[#00796B] transition-colors">
              Shop Now
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <motion.div
              animate={isAnimating ? {
                scale: [1, 1.2, 1],
                rotate: [0, 15, -15, 0],
              } : {}}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <CartIcon />
              </Link>
              <AnimatePresence>
                {count > 0 && isAnimating && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-[#00796B] text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                  >
                    Added to cart!
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
}; 