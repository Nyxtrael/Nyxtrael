import { WishlistProvider } from '../../../context/WishlistContext';
import { CartProvider } from '../../../context/CartContext';
import { ThemeProvider } from '../../../context/ThemeContext';

export default function ShopLayout({ children }) {
  return (
    <WishlistProvider>
      <CartProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </CartProvider>
    </WishlistProvider>
  );
}