
import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '@/utils/types';
import { useCart } from '@/utils/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { product, quantity } = item;
  const { updateQuantity, removeFromCart } = useCart();
  
  const price = product.isSpecialOffer && product.discount 
    ? product.price * (1 - product.discount / 100) 
    : product.price;
  
  const totalPrice = price * quantity;
  
  return (
    <div className="flex items-center py-4 animate-fade-in">
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="ml-4 flex flex-1 flex-col">
        <div className="flex justify-between text-base font-medium">
          <h3>{product.name}</h3>
          <p className="ml-4">${totalPrice.toFixed(2)}</p>
        </div>
        
        {product.isSpecialOffer && product.discount && (
          <p className="mt-1 text-sm text-gray-500">
            ${price.toFixed(2)} each ({product.discount}% off)
          </p>
        )}
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center border rounded-full overflow-hidden">
            <button
              onClick={() => updateQuantity(product.id, quantity - 1)}
              className="p-1 text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Decrease quantity"
            >
              <Minus className="h-4 w-4" />
            </button>
            
            <span className="px-3 py-1 text-sm font-medium">
              {quantity}
            </span>
            
            <button
              onClick={() => updateQuantity(product.id, quantity + 1)}
              className="p-1 text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Increase quantity"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          
          <button
            onClick={() => removeFromCart(product.id)}
            className="text-gray-500 hover:text-red-500 transition-colors"
            aria-label="Remove item"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
