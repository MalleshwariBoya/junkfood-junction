
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { getFeaturedProducts } from '@/utils/data';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-black/5 text-sm font-medium tracking-wide mb-3 animate-fade-in">
              Our Selection
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight animate-fade-up">
              Featured Items
            </h2>
          </div>
          
          <Link 
            to="/products" 
            className="hidden md:flex items-center gap-2 font-medium transition-all duration-200 hover:translate-x-1 group"
          >
            View all menu 
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-fade-up" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <Link 
            to="/products" 
            className="inline-flex items-center gap-2 font-medium text-gray-800 transition-all duration-200"
          >
            View all menu 
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
