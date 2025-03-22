
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Tag, ShoppingBag } from 'lucide-react';
import { Product } from '@/utils/types';
import { useCart } from '@/utils/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { id, name, price, image, rating, isSpecialOffer, discount } = product;
  
  const discountedPrice = isSpecialOffer && discount 
    ? price * (1 - discount / 100) 
    : price;
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };
  
  return (
    <Link 
      to={`/products/${id}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-subtle hover-scale focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
    >
      <div className="relative aspect-square overflow-hidden product-image-container">
        {isSpecialOffer && (
          <div className="absolute top-3 left-3 z-10 flex items-center gap-1 rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
            <Tag className="h-3 w-3" />
            <span>{discount}% OFF</span>
          </div>
        )}
        
        <img 
          src={image} 
          alt={name}
          className="h-full w-full object-cover product-image"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-medium text-base">{name}</h3>
          
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-current text-amber-400" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        
        <div className="mt-3 flex items-center justify-between">
          <div>
            {isSpecialOffer ? (
              <div className="flex items-baseline gap-1.5">
                <span className="text-lg font-semibold">${discountedPrice.toFixed(2)}</span>
                <span className="text-sm text-gray-500 line-through">${price.toFixed(2)}</span>
              </div>
            ) : (
              <span className="text-lg font-semibold">${price.toFixed(2)}</span>
            )}
          </div>
          
          <button
            onClick={handleAddToCart}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-800 transition-all hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            aria-label="Add to cart"
          >
            <ShoppingBag className="h-4 w-4" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
