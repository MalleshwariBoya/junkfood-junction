
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="text-2xl font-display font-bold tracking-tight">
              JunkFood Junction
            </Link>
            <p className="mt-4 text-gray-600 text-sm">
              Indulge in delicious guilty pleasures with our premium selection of irresistible junk food delights.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-black transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-black transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-black transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-black transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/checkout" className="text-gray-600 hover:text-black transition-colors">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-gray-600 hover:text-black transition-colors">
                  Burgers
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-black transition-colors">
                  Pizza
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-black transition-colors">
                  Sides
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-black transition-colors">
                  Desserts
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-black transition-colors">
                  Drinks
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">123 JunkFood Street, Flavor City, FC 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-500 flex-shrink-0" />
                <span className="text-gray-600">(123) 456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-500 flex-shrink-0" />
                <span className="text-gray-600">info@junkfoodjunction.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} JunkFood Junction. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
