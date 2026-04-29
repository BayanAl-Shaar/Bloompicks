import { ShoppingCart, Heart, User, Search, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { useState } from 'react';
import logo from '../../imports/image.png';

export function Header() {
  const [cartCount] = useState(3);
  const [wishlistCount] = useState(5);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/30 shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="py-1 sm:py-1.5 border-b border-white/20">
          <div className="flex items-center justify-center sm:justify-between text-xs sm:text-sm">
            <p className="text-[var(--muted-foreground)] text-center sm:text-left">Welcome to Bloom Picks - Free Shipping on Orders Over $50!</p>
            <div className="hidden sm:flex items-center gap-4">
              <button className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">Track Order</button>
              <button className="text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">Help</button>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="py-3">
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="Bloom Picks" className="h-10" />
            </Link>

            {/* Search bar */}
            <div className="hidden md:flex flex-1 max-w-2xl">
              <div className="relative w-full group">
                <input
                  type="text"
                  placeholder="Search for products, brands, and more..."
                  className="w-full px-6 py-3 pr-12 rounded-full bg-white/50 backdrop-blur-sm border border-orange-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] text-white hover:shadow-lg transition-all">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <Link to="/login" className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-white/30 hover:border-[var(--primary)] transition-all">
                <User className="w-5 h-5" />
                <span>Account</span>
              </Link>

              <Link to="/favorites" className="relative p-2 rounded-full bg-white/50 backdrop-blur-sm border border-white/30 hover:border-[var(--primary)] transition-all">
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--primary)] text-white text-xs rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              <button className="relative p-2 rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] text-white hover:shadow-lg transition-all">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--secondary)] text-white text-xs rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-full bg-white/50 backdrop-blur-sm border border-white/30"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:block py-2 border-t border-white/20">
          <ul className="flex items-center justify-center gap-8">
            <li><Link to="/shop" className={`transition-colors ${location.pathname === '/shop' && !location.search ? 'text-[var(--primary)] underline' : 'hover:text-[var(--primary)]'}`}>All Products</Link></li>
            <li><Link to="/shop?category=electronic" className={`transition-colors ${location.pathname === '/shop' && location.search === '?category=electronic' ? 'text-[var(--primary)] underline' : 'hover:text-[var(--primary)]'}`}>Electronic</Link></li>
            <li><Link to="/shop?category=male" className={`transition-colors ${location.pathname === '/shop' && location.search === '?category=male' ? 'text-[var(--primary)] underline' : 'hover:text-[var(--primary)]'}`}>Male</Link></li>
            <li><Link to="/shop?category=home-furniture" className={`transition-colors ${location.pathname === '/shop' && location.search === '?category=home-furniture' ? 'text-[var(--primary)] underline' : 'hover:text-[var(--primary)]'}`}>Home & Furniture</Link></li>
            <li><Link to="/shop?category=woman" className={`transition-colors ${location.pathname === '/shop' && location.search === '?category=woman' ? 'text-[var(--primary)] underline' : 'hover:text-[var(--primary)]'}`}>Woman</Link></li>
            <li><Link to="/shop?category=sports-outdoors" className={`transition-colors ${location.pathname === '/shop' && location.search === '?category=sports-outdoors' ? 'text-[var(--primary)] underline' : 'hover:text-[var(--primary)]'}`}>Sports & Outdoors</Link></li>
            <li><Link to="/shop?category=supermarket" className={`transition-colors ${location.pathname === '/shop' && location.search === '?category=supermarket' ? 'text-[var(--primary)] underline' : 'hover:text-[var(--primary)]'}`}>Supermarket</Link></li>
            <li><Link to="/about" className={`block py-2 transition-colors ${location.pathname === '/about' ? 'text-[var(--primary)] underline' : 'hover:text-[var(--primary)]'}`}>About Us</Link></li>
            <li><Link to="/contact" className={`block py-2 transition-colors ${location.pathname === '/contact' ? 'text-[var(--primary)] underline' : 'hover:text-[var(--primary)]'}`}>Contact</Link></li>
            <li><Link to="/product/conversion" className={`transition-colors ${location.pathname === '/product/conversion' ? 'text-[var(--primary)] underline' : 'hover:text-[var(--primary)]'}`}>New Product Page</Link></li>
          </ul>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-white/20">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>
            <ul className="space-y-2">
              <li><Link to="/" className={`block py-2 transition-colors ${location.pathname === '/' ? 'text-[var(--primary)] underline' : 'hover:text-[var(--primary)]'}`}>Home</Link></li>
              <li><Link to="/shop" className={`block py-2 transition-colors ${location.pathname === '/shop' && !location.search ? 'text-[var(--primary)] underline' : 'hover:text-[var(--primary)]'}`}>Shop All</Link></li>
              <li><Link to="/shop?category=fashion" className={`block py-2 transition-colors ${location.pathname === '/shop' && location.search === '?category=fashion' ? 'text-[var(--primary)] underline' : 'hover:text-[var(--primary)]'}`}>Fashion</Link></li>
              <li><Link to="/shop?category=tech" className={`block py-2 transition-colors ${location.pathname === '/shop' && location.search === '?category=tech' ? 'text-[var(--primary)] underline' : 'hover:text-[var(--primary)]'}`}>Technology</Link></li>
              <li><Link to="/shop?category=home" className={`block py-2 transition-colors ${location.pathname === '/shop' && location.search === '?category=home' ? 'text-[var(--primary)] underline' : 'hover:text-[var(--primary)]'}`}>Home & Decor</Link></li>
              <li><Link to="/shop?category=beauty" className={`block py-2 transition-colors ${location.pathname === '/shop' && location.search === '?category=beauty' ? 'text-[var(--primary)] underline' : 'hover:text-[var(--primary)]'}`}>Personal Care</Link></li>
              <li><Link to="/about" className={`block py-2 transition-colors ${location.pathname === '/about' ? 'text-[var(--primary)] underline' : 'hover:text-[var(--primary)]'}`}>About Us</Link></li>
              <li><Link to="/contact" className={`block py-2 transition-colors ${location.pathname === '/contact' ? 'text-[var(--primary)] underline' : 'hover:text-[var(--primary)]'}`}>Contact</Link></li>
              <li><Link to="/product/conversion" className={`block py-2 transition-colors ${location.pathname === '/product/conversion' ? 'text-[var(--primary)] underline' : 'hover:text-[var(--primary)]'}`}>New Product Page</Link></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

