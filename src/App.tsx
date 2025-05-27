import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/Hero'
import { Features } from './components/home/Features'
import { Testimonials } from './components/home/Testimonials'
import { CTA } from './components/home/CTA'
import ProductPage from './components/product/ProductPage'
import CartProvider from './components/CartProvider'
import CartIcon from './components/CartIcon'

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
    </>
  );
};

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-background font-sans antialiased">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ProductPage />} />
            {/* Add more routes as needed */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  )
}

export default App 