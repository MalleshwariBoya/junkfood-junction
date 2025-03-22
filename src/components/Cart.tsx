
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import CartItem from './CartItem';
import { useCart } from '@/utils/CartContext';

const Cart: React.FC = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  const cartTotal = getCartTotal();
  const isEmpty = cart.length === 0;
  
  return (
    <div className="bg-white rounded-2xl shadow-elevated p-6 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Your Cart</h2>
        
        {!isEmpty && (
          <button
            onClick={clearCart}
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Clear all
          </button>
        )}
      </div>
      
      {isEmpty ? (
        <div className="py-12 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShoppingBag className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
          <p className="text-gray-500 mb-6">Add some delicious items to get started</p>
          <Link
            to="/products"
            className="inline-flex justify-center rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-medium shadow-sm hover:bg-gray-50 focus:outline-none"
          >
            Browse Menu
          </Link>
        </div>
      ) : (
        <>
          <div className="divide-y max-h-[400px] overflow-auto pr-2">
            {cart.map(item => (
              <CartItem key={item.product.id} item={item} />
            ))}
          </div>
          
          <div className="mt-6 border-t pt-6">
            <div className="flex justify-between text-base font-medium mb-1">
              <p>Subtotal</p>
              <p>${cartTotal.toFixed(2)}</p>
            </div>
            
            <div className="flex justify-between text-sm text-gray-500 mb-6">
              <p>Shipping & taxes calculated at checkout</p>
            </div>
            
            <button
              onClick={() => navigate('/checkout')}
              className="w-full rounded-full bg-black px-6 py-3 text-center text-sm font-medium text-white hover:bg-gray-900 focus:outline-none transition-colors"
            >
              Proceed to Checkout
            </button>
            
            <div className="mt-4 text-center">
              <Link
                to="/products"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
