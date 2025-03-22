
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ArrowLeft, ShoppingBag, Tag, Plus, Minus } from 'lucide-react';
import { getProductById, getProductsByCategory } from '@/utils/data';
import { useCart } from '@/utils/CartContext';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  
  const product = id ? getProductById(parseInt(id)) : undefined;
  const relatedProducts = product 
    ? getProductsByCategory(product.category).filter(p => p.id !== product.id).slice(0, 4)
    : [];
  
  useEffect(() => {
    // Simulate loading
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [id]);
  
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 md:px-6 pt-28 pb-16 animate-fade-in">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-square rounded-2xl bg-gray-200 animate-pulse" />
              <div className="flex flex-col space-y-4">
                <div className="h-8 w-3/4 rounded bg-gray-200 animate-pulse" />
                <div className="h-4 w-1/2 rounded bg-gray-200 animate-pulse" />
                <div className="h-4 w-1/3 rounded bg-gray-200 animate-pulse" />
                <div className="h-24 w-full rounded bg-gray-200 animate-pulse mt-2" />
                <div className="h-10 w-1/4 rounded bg-gray-200 animate-pulse mt-2" />
                <div className="h-12 w-full rounded bg-gray-200 animate-pulse mt-4" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 md:px-6 pt-28 pb-16">
          <div className="max-w-md mx-auto text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
            <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white font-medium hover:bg-gray-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Products
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  const discountedPrice = product.isSpecialOffer && product.discount 
    ? product.price * (1 - product.discount / 100) 
    : product.price;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 md:px-6 pt-28 pb-16">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="overflow-hidden rounded-2xl bg-gray-50 animate-fade-in">
              <div className="aspect-square product-image-container">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="h-full w-full object-cover product-image"
                />
              </div>
            </div>
            
            <div className="flex flex-col animate-fade-in">
              {product.isSpecialOffer && product.discount && (
                <div className="inline-flex items-center gap-1 rounded-full bg-black px-3 py-1 text-xs font-medium text-white w-fit mb-4">
                  <Tag className="h-3 w-3" />
                  <span>{product.discount}% OFF</span>
                </div>
              )}
              
              <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-2">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-current text-amber-400" />
                  <span className="ml-1 font-medium">{product.rating}</span>
                </div>
                <span className="text-gray-400">|</span>
                <span className="text-gray-600 capitalize">{product.category}</span>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>
              
              <div className="flex items-baseline gap-3 mb-6">
                {product.isSpecialOffer && product.discount ? (
                  <>
                    <span className="text-3xl font-bold">${discountedPrice.toFixed(2)}</span>
                    <span className="text-xl text-gray-500 line-through">${product.price.toFixed(2)}</span>
                  </>
                ) : (
                  <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
                )}
              </div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center border rounded-full overflow-hidden">
                  <button
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  
                  <span className="px-4 py-2 text-sm font-medium">
                    {quantity}
                  </span>
                  
                  <button
                    onClick={() => setQuantity(prev => prev + 1)}
                    className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <button
                onClick={handleAddToCart}
                className="flex items-center justify-center gap-2 w-full rounded-full bg-black px-6 py-3.5 font-medium text-white hover:bg-gray-900 transition-colors button-hover"
              >
                <ShoppingBag className="h-5 w-5" />
                Add to Cart
              </button>
            </div>
          </div>
          
          {relatedProducts.length > 0 && (
            <div className="mt-16 animate-fade-up">
              <h2 className="text-2xl font-display font-bold tracking-tight mb-8">
                You May Also Like
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((product, index) => (
                  <div 
                    key={product.id} 
                    className="animate-fade-up" 
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
