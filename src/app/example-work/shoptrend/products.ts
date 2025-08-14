export type Product = {
  id: string;
  slug: string;
  title: string;
  price: number;
  image: string;
  category: 'Fashion' | 'Electronics' | 'Home' | 'Accessories';
  rating: number;
  blurb: string;
};

export const products: Product[] = [
  { id: 'p1', slug: 'minimal-jacket', title: 'Minimal Jacket', price: 89, image: '/images/jacket.jpg', category: 'Fashion', rating: 4.6, blurb: 'Water-resistant shell with breathable mesh lining.' },
  { id: 'p2', slug: 'wireless-headphones', title: 'Wireless Headphones', price: 129, image: '/images/headphones.jpg', category: 'Electronics', rating: 4.7, blurb: 'Noise-cancelling with 30h battery life.' },
  { id: 'p3', slug: 'ceramic-mug-set', title: 'Ceramic Mug Set', price: 24, image: '/images/mug.jpg', category: 'Home', rating: 4.4, blurb: 'Hand-finished mugs, dishwasher safe.' },
  { id: 'p4', slug: 'organic-cotton-tee', title: 'Organic Cotton Tee', price: 29, image: '/images/tshirt.jpg', category: 'Fashion', rating: 4.5, blurb: 'Soft, pre-shrunk cotton. Unisex fit.' },
  { id: 'p5', slug: 'sunglasses-uv400', title: 'Sunglasses UV400', price: 39, image: '/images/sunglasses.jpg', category: 'Accessories', rating: 4.3, blurb: 'Lightweight frame with UV400 lenses.' },
  { id: 'p6', slug: 'scandi-plant-pot', title: 'Scandi Plant Pot', price: 19, image: '/images/plant.jpg', category: 'Home', rating: 4.2, blurb: 'Matte ceramic pot with tray.' },
  { id: 'p7', slug: 'leather-backpack', title: 'Leather Backpack', price: 169, image: '/images/backpack.jpg', category: 'Fashion', rating: 4.8, blurb: 'Full-grain leather, 15-inch laptop pocket.' },
  { id: 'p8', slug: 'smartwatch-lite', title: 'Smartwatch Lite', price: 99, image: '/images/smartwatch.jpg', category: 'Electronics', rating: 4.1, blurb: 'Fitness tracking and notifications.' },
];
