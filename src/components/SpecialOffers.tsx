
import React from 'react';
import { Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getSpecialOffers } from '@/utils/data';
import { useCart } from '@/utils/CartContext';

const SpecialOffers: React.FC = () => {
  const specialOffers = getSpecialOffers();
  const { addToCart } = useCart();
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-black/5 text-sm font-medium tracking-wide mb-3 animate-fade-in">
            Limited Time
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4 animate-fade-up">
            Special Offers
          </h2>
          <p className="text-gray-600 animate-fade-up" style={{ animationDelay: '200ms' }}>
            Take advantage of these amazing deals before they're gone
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialOffers.map((offer, index) => {
            const discountedPrice = offer.price * (1 - (offer.discount || 0) / 100);
            
            return (
              <div 
                key={offer.id}
                className="bg-white rounded-2xl shadow-subtle overflow-hidden hover-scale animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative">
                  <img 
                    src={offer.image} 
                    alt={offer.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-1 rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
                    <Tag className="h-3 w-3" />
                    <span>{offer.discount}% OFF</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{offer.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">{offer.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold">${discountedPrice.toFixed(2)}</span>
                      <span className="text-gray-500 line-through">${offer.price.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex gap-3">
                      <Link 
                        to={`/products/${offer.id}`}
                        className="px-4 py-2 text-sm font-medium rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                      >
                        Details
                      </Link>
                      <button
                        onClick={() => addToCart(offer)}
                        className="px-4 py-2 text-sm font-medium rounded-full bg-black text-white hover:bg-gray-900 transition-colors"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
