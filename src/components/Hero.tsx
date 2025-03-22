
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 md:pt-36 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center space-y-6 relative z-10">
          <span className="inline-block px-3 py-1 rounded-full bg-black/5 text-sm font-medium tracking-wide animate-fade-in">
            Premium Junk Food
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-tight md:leading-tight animate-fade-up" style={{ animationDelay: '200ms' }}>
            Indulge in <span className="italic">Delicious</span> Guilty Pleasures
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '400ms' }}>
            Experience the perfect blend of flavor and satisfaction with our premium selection of irresistible junk food delights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-up" style={{ animationDelay: '600ms' }}>
            <Link
              to="/products"
              className="px-8 py-3 rounded-full bg-black text-white font-medium transition-all duration-300 ease-apple hover:shadow-md hover:translate-y-[-2px] active:translate-y-[0px] active:shadow-sm"
            >
              Explore Menu
            </Link>
            
            <Link
              to="/products"
              className="px-8 py-3 rounded-full bg-gray-100 text-gray-800 font-medium transition-all duration-300 ease-apple hover:bg-gray-200 flex items-center justify-center gap-2 group"
            >
              Special Offers
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none z-0" />
    </section>
  );
};

export default Hero;
