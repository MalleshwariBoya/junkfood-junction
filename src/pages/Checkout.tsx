
import React from 'react';
import { useCart } from '@/utils/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Cart from '@/components/Cart';
import CheckoutForm from '@/components/CheckoutForm';

const Checkout: React.FC = () => {
  const { cart } = useCart();
  const isEmpty = cart.length === 0;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 md:px-6 pt-28 pb-16">
        <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-10 animate-fade-in">
          Checkout
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {!isEmpty && <CheckoutForm />}
          </div>
          
          <div>
            <Cart />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Checkout;
