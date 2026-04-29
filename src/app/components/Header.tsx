import { ShoppingCart, Heart, User, Search, Menu, Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Link, useLocation } from 'react-router';
import React, { useState, useEffect } from 'react';
import logo from '../../imports/image.png';

export function Header() {
  const [cartCount] = useState(3);
  const [cartTotal] = useState('$45.99');
  const [wishlistCount] = useState(5);
  const [currentLang, setCurrentLang] = useState('English');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Language persistence
  useEffect(() => {
    const savedLang = localStorage.getItem('language') || 'English';
    setCurrentLang(savedLang);
  }, []);

  const handleLangChange = (lang: string) => {
    setCurrentLang(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/30 shadow-sm">
      <div className="container mx-auto px-4">

        {/* TOP BAR */}
        <div className="hidden py-2 border-b border-white/20 md:block">
          <div className="flex items-center justify-between">

            <div className="flex-1"></div>

            {/* Links */}
            <div className="flex items-center gap-2 mr-4 text-sm">
              <Link to="/about" className="text-[var(--muted-foreground)] hover:text-[var(--primary)]">About Us</Link>
              <Link to="/contact" className="text-[var(--muted-foreground)] hover:text-[var(--primary)]">Contact Us</Link>
              <Link to="/return-process" className="text-[var(--muted-foreground)] hover:text-[var(--primary)]">Return Process</Link>
            </div>

            {/* Language */}
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/50 border">
                  <Globe className="w-4 h-4" />
                  <span>{currentLang}</span>
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-32">
                <DropdownMenuLabel>Language</DropdownMenuLabel>
                {['English', 'Arabic', 'Turkish', 'French', 'German'].map((lang) => (
                  <DropdownMenuItem key={lang} onClick={() => handleLangChange(lang)}>
                    {lang}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

          </div>
        </div>

        {/* MAIN HEADER */}
        <div className="py-3">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4 lg:gap-6">
            <div className="flex items-center md:hidden">
              <div className="flex flex-1 justify-start">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/50 border"
                  aria-label="Toggle menu"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </div>

              <div className="flex shrink-0 justify-center -ml-3">
                <Link to="/" className="flex-shrink-0">
                  <img src={logo} alt="Bloom Picks" className="h-10" />
                </Link>
              </div>

              <div className="flex flex-1 justify-end">
                <div className="flex items-center gap-1">
                  <Link
                    to="/login"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/50 border"
                    aria-label="Login"
                  >
                    <User className="w-5 h-5" />
                  </Link>

                  <Link
                    to="/favorites"
                    className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white/50 border"
                    aria-label="Favorites"
                  >
                    <Heart className="w-4 h-4" />
                    {wishlistCount > 0 && (
                      <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--primary)] text-xs text-white">
                        {wishlistCount}
                      </span>
                    )}
                  </Link>

                  <button
                    className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white/50 border"
                    aria-label="Cart"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[var(--primary)] px-1 text-xs font-bold text-white">
                      {cartCount}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="hidden md:relative md:-top-[10px] md:flex md:flex-shrink-0">
              <Link to="/" className="flex-shrink-0">
                <img src={logo} alt="Bloom Picks" className="h-10" />
              </Link>
            </div>

            {/* SEARCH */}
            <div className="w-full md:flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products, brands, and more..."
                  className="w-full rounded-full bg-white/80 px-6 py-3 pr-12 border"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] text-white">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="hidden md:ml-auto md:flex md:items-center md:gap-2 lg:gap-4">

              {/* LOGIN */}
              <Link to="/login" className="flex min-w-[116px] items-center justify-center gap-2 rounded-full bg-white/50 px-4 py-2 border">
                <User className="w-5 h-5" />
                <span>Login</span>
              </Link>

              {/* FAVORITES */}
              <Link to="/favorites" className="relative flex min-w-[116px] items-center justify-center gap-2 rounded-full bg-white/50 px-4 py-2 border">
                <Heart className="w-4 h-4" />
                <span>Favorites</span>
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--primary)] text-xs text-white">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* CART */}
              <button className="flex min-w-[116px] items-center justify-center gap-2 rounded-full bg-white/50 px-4 py-2 border">
                <ShoppingCart className="w-5 h-5" />
                <span>Cart</span>
                <span className="min-w-[36px] rounded-full bg-[var(--primary)] px-2 py-0.5 text-center text-xs font-bold text-white">
                  {cartTotal}
                </span>
              </button>

            </div>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav className="hidden md:block py-2 border-t border-white/20">
          <ul className="flex items-center justify-center gap-8">
            <li><Link to="/" className="text-[var(--primary)] underline">BloomPicks</Link></li>
            <li><Link to="/shop">All Products</Link></li>
            <li><Link to="/shop?category=electronic">Electronic</Link></li>
            <li><Link to="/shop?category=male">Male</Link></li>
            <li><Link to="/shop?category=home-furniture">Home & Furniture</Link></li>
            <li><Link to="/shop?category=woman">Woman</Link></li>
            {/*<li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>*/}
          </ul>
        </nav>

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-white/20">
            <ul className="space-y-2">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop All</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        )}

      </div>
    </header>
  );
}
