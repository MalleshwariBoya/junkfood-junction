
import React, { useState } from 'react';
import { 
  CreditCard, 
  Check, 
  User, 
  Mail, 
  MapPin, 
  Phone, 
  Calendar,
  CreditCardIcon,
  Lock
} from 'lucide-react';
import { useCart } from '@/utils/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";
import { paymentMethods } from '@/utils/data';

const CheckoutForm: React.FC = () => {
  const { getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const cartTotal = getCartTotal();
  const tax = cartTotal * 0.07;
  const shipping = cartTotal > 50 ? 0 : 5.99;
  const total = cartTotal + tax + shipping;
  
  const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0].id);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      toast.success("Order placed successfully!", {
        description: "Your order has been confirmed."
      });
      clearCart();
      navigate('/');
    }, 2000);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in">
      <section className="bg-white rounded-2xl shadow-subtle p-6">
        <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
            <div className="relative">
              <div className="absolute left-3 top-3 text-gray-400">
                <User className="h-5 w-5" />
              </div>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="pl-10 w-full rounded-lg border-gray-200 py-3 px-4 text-sm shadow-sm focus:border-black focus:ring-black"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
            <div className="relative">
              <div className="absolute left-3 top-3 text-gray-400">
                <Mail className="h-5 w-5" />
              </div>
              <input
                type="email"
                id="email"
                placeholder="john@example.com"
                className="pl-10 w-full rounded-lg border-gray-200 py-3 px-4 text-sm shadow-sm focus:border-black focus:ring-black"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
            <div className="relative">
              <div className="absolute left-3 top-3 text-gray-400">
                <Phone className="h-5 w-5" />
              </div>
              <input
                type="tel"
                id="phone"
                placeholder="(123) 456-7890"
                className="pl-10 w-full rounded-lg border-gray-200 py-3 px-4 text-sm shadow-sm focus:border-black focus:ring-black"
                required
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="address" className="block text-sm font-medium mb-2">Delivery Address</label>
            <div className="relative">
              <div className="absolute left-3 top-3 text-gray-400">
                <MapPin className="h-5 w-5" />
              </div>
              <input
                type="text"
                id="address"
                placeholder="123 Main St, City"
                className="pl-10 w-full rounded-lg border-gray-200 py-3 px-4 text-sm shadow-sm focus:border-black focus:ring-black"
                required
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-white rounded-2xl shadow-subtle p-6">
        <h3 className="text-lg font-semibold mb-6">Payment Method</h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {paymentMethods.map((method) => (
            <div key={method.id}>
              <input
                type="radio"
                name="paymentMethod"
                id={method.id}
                value={method.id}
                checked={paymentMethod === method.id}
                onChange={() => setPaymentMethod(method.id)}
                className="peer hidden"
              />
              <label
                htmlFor={method.id}
                className="block cursor-pointer rounded-lg border border-gray-200 p-4 text-center peer-checked:border-black peer-checked:bg-gray-50 hover:border-gray-300 transition-all"
              >
                <div className="flex flex-col items-center gap-1">
                  <div className="text-gray-900">
                    <CreditCardIcon className="h-5 w-5 mx-auto" />
                  </div>
                  <p className="text-sm font-medium">{method.name}</p>
                </div>
              </label>
            </div>
          ))}
        </div>
        
        {paymentMethod === 'credit' && (
          <div className="space-y-4">
            <div>
              <label htmlFor="cardNumber" className="block text-sm font-medium mb-2">Card Number</label>
              <div className="relative">
                <div className="absolute left-3 top-3 text-gray-400">
                  <CreditCard className="h-5 w-5" />
                </div>
                <input
                  type="text"
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  className="pl-10 w-full rounded-lg border-gray-200 py-3 px-4 text-sm shadow-sm focus:border-black focus:ring-black"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="expDate" className="block text-sm font-medium mb-2">Expiration Date</label>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <input
                    type="text"
                    id="expDate"
                    placeholder="MM/YY"
                    className="pl-10 w-full rounded-lg border-gray-200 py-3 px-4 text-sm shadow-sm focus:border-black focus:ring-black"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="cvv" className="block text-sm font-medium mb-2">CVV</label>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <Lock className="h-5 w-5" />
                  </div>
                  <input
                    type="text"
                    id="cvv"
                    placeholder="123"
                    className="pl-10 w-full rounded-lg border-gray-200 py-3 px-4 text-sm shadow-sm focus:border-black focus:ring-black"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
      
      <section className="bg-white rounded-2xl shadow-subtle p-6">
        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
        
        <div className="space-y-2 mb-6">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Tax (7%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Shipping</span>
            <span>{shipping > 0 ? `$${shipping.toFixed(2)}` : 'Free'}</span>
          </div>
          
          <div className="border-t my-4"></div>
          
          <div className="flex justify-between font-medium">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        
        <button
          type="submit"
          disabled={isProcessing}
          className="w-full rounded-full bg-black px-6 py-3 font-medium text-white hover:bg-gray-900 focus:outline-none transition-all disabled:opacity-70 flex items-center justify-center gap-2"
        >
          {isProcessing ? (
            <>
              <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
              <span>Processing...</span>
            </>
          ) : (
            <>
              <Check className="h-5 w-5" />
              <span>Place Order</span>
            </>
          )}
        </button>
      </section>
    </form>
  );
};

export default CheckoutForm;
