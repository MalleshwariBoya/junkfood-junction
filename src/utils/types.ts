
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'burgers' | 'pizza' | 'desserts' | 'drinks' | 'sides';
  rating: number;
  isSpecialOffer?: boolean;
  discount?: number;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

export interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
}
