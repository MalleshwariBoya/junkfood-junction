
import React, { useState, useEffect } from 'react';
import { categories, getProductsByCategory } from '@/utils/data';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [products, setProducts] = useState(getProductsByCategory('all'));
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    // Simulate loading of products
    setIsLoading(true);
    const timer = setTimeout(() => {
      setProducts(getProductsByCategory(selectedCategory));
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [selectedCategory]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 md:px-6 pt-28 pb-16">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-up">
          <h1 className="text-4xl font-display font-bold tracking-tight mb-4">
            Our Menu
          </h1>
          <p className="text-lg text-gray-600">
            Explore our wide selection of delicious junk food options
          </p>
        </div>
        
        <div className="flex justify-center mb-12 overflow-x-auto pb-2 animate-fade-up" style={{ animationDelay: '200ms' }}>
          <div className="flex space-x-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                  ${selectedCategory === category.id
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <div 
                key={index} 
                className="aspect-square rounded-2xl bg-gray-200 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className="animate-fade-up" 
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
        
        {products.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No products found in this category.</p>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Products;
