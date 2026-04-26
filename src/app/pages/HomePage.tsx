import { Link } from 'react-router';
import { GlassCard } from '../components/GlassCard';
import { ProductCard } from '../components/ProductCard';
import { ArrowRight, Sparkles, Truck, Shield, HeadphonesIcon, Star, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

export function HomePage() {
  const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 34, seconds: 56 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const featuredProducts = [
    { id: '1', name: 'Premium Wireless Headphones', price: 89.99, originalPrice: 129.99, rating: 4.5, reviews: 234, inStock: true, image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777195382/BLOOMPICKS-FLORA-GLOBE-EMS-Boyun-Gerdirme-ve-Yuz-Masaj-Aleti-Cilt-Sikilastirma-Cihazi-1_kp45by.webp' },
    { id: '2', name: 'Designer Summer Dress', price: 59.99, originalPrice: 99.99, rating: 4.8, reviews: 512, inStock: true, image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777197455/pro1_zodhoa.webp' },
    { id: '3', name: 'Smart Tablet Pro', price: 399.99, originalPrice: 499.99, rating: 4.7, reviews: 189, inStock: true, image: 'https://images.unsplash.com/photo-1775288487309-35c588890167?w=400' },
    { id: '4', name: 'Luxury Skincare Set', price: 79.99, originalPrice: 119.99, rating: 4.9, reviews: 421, inStock: true, image: 'https://images.unsplash.com/photo-1770717984645-3e86de003cc3?w=400' },
    { id: '5', name: 'Modern Table Lamp', price: 45.99, originalPrice: 69.99, rating: 4.6, reviews: 156, inStock: true, image: 'https://images.unsplash.com/photo-1531410691118-74e9fbc0f57f?w=400' },
    { id: '6', name: 'Casual Fashion Jacket', price: 89.99, originalPrice: 149.99, rating: 4.7, reviews: 298, inStock: true, image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=400' },
    { id: '7', name: 'Smartphone Accessories Kit', price: 29.99, rating: 4.4, reviews: 176, inStock: true, image: 'https://images.unsplash.com/photo-1775809927436-e6659f35b83d?w=400' },
    { id: '8', name: 'Minimalist Plant Pot', price: 24.99, rating: 4.5, reviews: 89, inStock: true, image: 'https://images.unsplash.com/photo-1621960144741-3935026f401d?w=400' },
  ];

  const categories = [
    { name: 'Fashion', icon: '👗', link: '/shop?category=fashion', gradient: 'from-pink-400 to-purple-500' },
    { name: 'Technology', icon: '💻', link: '/shop?category=tech', gradient: 'from-blue-400 to-cyan-500' },
    { name: 'Beauty', icon: '💄', link: '/shop?category=beauty', gradient: 'from-rose-400 to-pink-500' },
    { name: 'Home Decor', icon: '🏠', link: '/shop?category=home', gradient: 'from-amber-400 to-orange-500' },
  ];

  const flashDeals = [
    { id: 'fd1', name: 'Vintage Camera Collection', price: 149.99, originalPrice: 299.99, rating: 4.8, reviews: 67, inStock: true, image: 'https://images.unsplash.com/photo-1773501942861-a824c059afda?w=400' },
    { id: 'fd2', name: 'Elegant Evening Wear', price: 99.99, originalPrice: 199.99, rating: 4.9, reviews: 143, inStock: true, image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400' },
    { id: 'fd3', name: 'Premium Skincare Bottle', price: 34.99, originalPrice: 59.99, rating: 4.7, reviews: 234, inStock: true, image: 'https://images.unsplash.com/photo-1703174319257-bbacb50fee9c?w=400' },
    { id: 'fd4', name: 'Modern Wall Decor', price: 69.99, originalPrice: 129.99, rating: 4.6, reviews: 98, inStock: true, image: 'https://images.unsplash.com/photo-1608755035200-14b0832dff20?w=400' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Hero Section */}
      {/*<section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E87722]/10 to-[#0B1F3F]/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-lg border border-white/30 mb-6">
                <Sparkles className="w-4 h-4 text-[var(--primary)]" />
                <span className="text-sm">Spring Collection 2026</span>
              </div>
              <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-[#E87722] to-[#0B1F3F] bg-clip-text text-transparent">
                Discover Trends That Bloom
              </h1>
              <p className="text-xl text-[var(--muted-foreground)] mb-8">
                Shop the latest in fashion, tech, beauty, and home decor from around the world. Curated just for you.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/shop"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] text-white hover:shadow-xl transition-all flex items-center gap-2"
                >
                  Shop Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="px-8 py-4 rounded-full bg-white/70 backdrop-blur-lg border border-white/30 hover:border-[var(--primary)] transition-all"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <GlassCard className="p-8" hover>
                <img
                  src="https://images.unsplash.com/photo-1753161023962-665967602405?w=600"
                  alt="Happy Shopping"
                  className="rounded-xl w-full"
                />
              </GlassCard>
              <div className="absolute -bottom-6 -left-6">
                <GlassCard className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] flex items-center justify-center text-white">
                      <Star className="w-6 h-6 fill-current" />
                    </div>
                    <div>
                      <p className="text-sm text-[var(--muted-foreground)]">Customer Rating</p>
                      <p className="text-xl">4.9/5.0</p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>
      </section>*/}

      {/* Featured Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-3">Featured Products</h2>
            <p className="text-[var(--muted-foreground)]">Hand-picked favorites from our collection</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/70 backdrop-blur-lg border border-white/30 hover:border-[var(--primary)] transition-all"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-3">Shop by Category</h2>
            <p className="text-[var(--muted-foreground)]">Explore our curated collections</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.name} to={category.link}>
                <GlassCard className="text-center cursor-pointer" hover>
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.gradient} flex items-center justify-center text-4xl`}>
                    {category.icon}
                  </div>
                  <h3>{category.name}</h3>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Flash Deals */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <GlassCard className="mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] flex items-center justify-center">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="mb-1">Flash Deals</h2>
                  <p className="text-[var(--muted-foreground)]">Limited time offers - up to 50% off!</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-center p-3 rounded-xl bg-white/50 backdrop-blur-sm min-w-[70px]">
                  <div className="text-2xl text-[var(--primary)]">{timeLeft.hours.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-[var(--muted-foreground)]">Hours</div>
                </div>
                <div className="text-2xl">:</div>
                <div className="text-center p-3 rounded-xl bg-white/50 backdrop-blur-sm min-w-[70px]">
                  <div className="text-2xl text-[var(--primary)]">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-[var(--muted-foreground)]">Minutes</div>
                </div>
                <div className="text-2xl">:</div>
                <div className="text-center p-3 rounded-xl bg-white/50 backdrop-blur-sm min-w-[70px]">
                  <div className="text-2xl text-[var(--primary)]">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-[var(--muted-foreground)]">Seconds</div>
                </div>
              </div>
            </div>
          </GlassCard>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {flashDeals.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      

      {/* Trust Badges */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] flex items-center justify-center">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2">Free Shipping</h3>
              <p className="text-[var(--muted-foreground)]">On orders over $50</p>
            </GlassCard>

            <GlassCard className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2">Secure Payment</h3>
              <p className="text-[var(--muted-foreground)]">100% protected transactions</p>
            </GlassCard>

            <GlassCard className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] flex items-center justify-center">
                <HeadphonesIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2">24/7 Support</h3>
              <p className="text-[var(--muted-foreground)]">Always here to help</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-3">What Our Customers Say</h2>
            <p className="text-[var(--muted-foreground)]">Join thousands of happy shoppers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Sarah M.', review: 'Amazing quality and fast shipping! My favorite online store.', rating: 5, image: 'https://images.unsplash.com/photo-1556740714-a8395b3bf30f?w=100' },
              { name: 'John D.', review: 'The customer service is outstanding. Highly recommend!', rating: 5, image: 'https://images.unsplash.com/photo-1556740714-a8395b3bf30f?w=100' },
              { name: 'Emma L.', review: 'Great prices and unique products. Will definitely shop again!', rating: 5, image: 'https://images.unsplash.com/photo-1556740714-a8395b3bf30f?w=100' },
            ].map((testimonial, index) => (
              <GlassCard key={index}>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <p className="text-[var(--muted-foreground)] mb-4">"{testimonial.review}"</p>
                <div className="flex items-center gap-3">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                  <p>{testimonial.name}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
