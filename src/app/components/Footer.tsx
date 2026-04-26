import { Link } from 'react-router';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../../imports/image.png';

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#0B1F3F] to-[#1E3A8A] text-white mt-20">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>

      <div className="relative container mx-auto px-4 py-12">
        {/* Newsletter */}
        <div className="mb-12 p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-white/80 mb-6">Get the latest deals and exclusive offers delivered to your inbox!</p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] hover:shadow-lg transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <img src={logo} alt="Bloom Picks" className="h-10 mb-4 brightness-0 invert" />
            <p className="text-white/80 mb-4">
              Your global destination for trending products across fashion, technology, personal care, and home decor.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-white/80 hover:text-white transition-colors">Shop All Products</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/return-process" className="text-white/80 hover:text-white transition-colors">Return Process</Link></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Shipping Information</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Track Your Order</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-white/80">Levent, Istanbul, Turkey</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-white/80">+90 212 XXX XX XX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-white/80">info@bloompicks.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/20 text-center text-white/60">
          <p>&copy; 2026 Bloom Picks. All rights reserved. Made with ❤️ in Istanbul.</p>
        </div>
      </div>
    </footer>
  );
}
