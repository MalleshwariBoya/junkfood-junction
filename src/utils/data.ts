
import { Product, PaymentMethod } from './types';

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    description: "Our signature burger with Angus beef patty, melted cheddar, lettuce, tomato, and special sauce on a brioche bun.",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=2115&auto=format&fit=crop",
    category: "burgers",
    rating: 4.8,
    featured: true
  },
  {
    id: 2,
    name: "Double Bacon Deluxe",
    description: "Double beef patties, crispy bacon, American cheese, caramelized onions and our secret sauce.",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=1968&auto=format&fit=crop",
    category: "burgers",
    rating: 4.9,
    isSpecialOffer: true,
    discount: 15
  },
  {
    id: 3,
    name: "Pepperoni Pizza",
    description: "Thin crust pizza with our signature tomato sauce, mozzarella, and crispy pepperoni.",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=2080&auto=format&fit=crop",
    category: "pizza",
    rating: 4.7,
    featured: true
  },
  {
    id: 4,
    name: "Supreme Pizza",
    description: "Loaded with pepperoni, sausage, bell peppers, onions, olives, and extra cheese.",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?q=80&w=1974&auto=format&fit=crop",
    category: "pizza",
    rating: 4.6
  },
  {
    id: 5,
    name: "Chocolate Milkshake",
    description: "Creamy chocolate milkshake made with premium ice cream and topped with whipped cream.",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?q=80&w=2069&auto=format&fit=crop",
    category: "drinks",
    rating: 4.5,
    isSpecialOffer: true,
    discount: 10
  },
  {
    id: 6,
    name: "Crispy Chicken Tenders",
    description: "Golden-fried chicken tenders served with your choice of dipping sauce.",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=2073&auto=format&fit=crop",
    category: "sides",
    rating: 4.4
  },
  {
    id: 7,
    name: "Loaded Nachos",
    description: "Crispy tortilla chips covered with melted cheese, jalapeños, guacamole, sour cream and salsa.",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=2035&auto=format&fit=crop",
    category: "sides",
    rating: 4.6,
    featured: true
  },
  {
    id: 8,
    name: "Chocolate Brownie Sundae",
    description: "Warm chocolate brownie topped with vanilla ice cream, chocolate sauce, and whipped cream.",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=2127&auto=format&fit=crop",
    category: "desserts",
    rating: 4.9,
    isSpecialOffer: true,
    discount: 20
  },
  {
    id: 9,
    name: "Garlic Parmesan Fries",
    description: "Crispy fries tossed in garlic, parmesan cheese, and herbs.",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=2074&auto=format&fit=crop",
    category: "sides",
    rating: 4.7
  },
  {
    id: 10,
    name: "Classic Vanilla Shake",
    description: "Creamy vanilla milkshake topped with whipped cream and a cherry.",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=2070&auto=format&fit=crop",
    category: "drinks",
    rating: 4.3
  },
  {
    id: 11,
    name: "BBQ Chicken Pizza",
    description: "Tangy BBQ sauce, grilled chicken, red onions, and cilantro on a hand-tossed crust.",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop",
    category: "pizza",
    rating: 4.5
  },
  {
    id: 12,
    name: "Cheesecake Slice",
    description: "Creamy New York style cheesecake with a graham cracker crust and strawberry topping.",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1965&auto=format&fit=crop",
    category: "desserts",
    rating: 4.8,
    featured: true
  }
];

export const categories = [
  { id: 'all', name: 'All' },
  { id: 'burgers', name: 'Burgers' },
  { id: 'pizza', name: 'Pizza' },
  { id: 'sides', name: 'Sides' },
  { id: 'desserts', name: 'Desserts' },
  { id: 'drinks', name: 'Drinks' }
];

export const paymentMethods: PaymentMethod[] = [
  { id: 'credit', name: 'Credit Card', icon: 'credit-card' },
  { id: 'paypal', name: 'PayPal', icon: 'paypal' },
  { id: 'apple', name: 'Apple Pay', icon: 'apple' },
  { id: 'google', name: 'Google Pay', icon: 'smartphone' }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getSpecialOffers = (): Product[] => {
  return products.filter(product => product.isSpecialOffer);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};
