import { Link } from 'react-router';
import { GlassCard } from '../components/GlassCard';
import { HeroSlider } from '../components/HeroSlider';
import { ProductCard } from '../components/ProductCard';
import { ArrowRight, Truck, Shield, HeadphonesIcon, Star, Clock } from 'lucide-react';
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
    { id: '1', name: 'FLORA GLOBE EMS Neck Lifting and Facial Massager Skin Tightening Device', price: 89.99, originalPrice: 129.99, rating: 4.5, reviews: 234, inStock: true, category: 'woman', image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777195382/BLOOMPICKS-FLORA-GLOBE-EMS-Boyun-Gerdirme-ve-Yuz-Masaj-Aleti-Cilt-Sikilastirma-Cihazi-1_kp45by.webp' },
    { id: '2', name: 'Bloom Picks EN5 ANC Air Pro 2 Noise Cancelling Bluetooth Headphones – Compatible with All Phones', price: 59.99, originalPrice: 99.99, rating: 4.8, reviews: 512, inStock: true, category: 'electronic', image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777197455/pro1_zodhoa.webp' },
    { id: '3', name: 'Bloom Picks Şarjlı Araç Süpürgesi - 2si 1 Arada Güçlü Vakum ve Hava Üfleme Kablosuz El Süpürgesi', price: 399.99, originalPrice: 499.99, rating: 4.7, reviews: 189, inStock: true, category: 'home-furniture', image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777287406/3_ih83rp.webp' },
    { id: '4', name: 'Bloom Picks 1080P Full HD Dual Lens Araç İçi Kamera - 170° Geniş Açı Gece Görüşlü Yol Kayıt Cihazı', price: 79.99, originalPrice: 119.99, rating: 4.9, reviews: 421, inStock: true, category: 'electronic', image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777287407/4_dar3ux.webp' },
    { id: '5', name: 'BLOOMPİCKS Dahili Kablolu 10000mAh 22,5W Hızlı Şarj Powerbank – Type-C & iPhone Uyumlu – LED Ekranlı', price: 45.99, originalPrice: 69.99, rating: 4.6, reviews: 156, inStock: true, category: 'electronic', image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777287407/5_bwalwv.webp' },
    { id: '6', name: 'Bloom Picks EN7 ANC 4. Nesil Gürültü Engelleyici Bluetooth Kulaklık - K2 Çipli iOS & Android Uyumlu', price: 89.99, originalPrice: 149.99, rating: 4.7, reviews: 298, inStock: true, category: 'electronic', image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777287407/6_os6iro.webp' },
    { id: '7', name: '380 mL Şık Tasarım Çift Katmanlı Paslanmaz Çelik Termos Bardak Sızdırmaz Sıcak-Soğuk Araç Uyumu', price: 29.99, rating: 4.4, reviews: 176, inStock: true, category: 'sports-outdoors', image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777287407/7_paqssz.webp' },
    { id: '8', name: '510 mL Şık Tasarım Çift Katmanlı Paslanmaz Çelik Termos Bardak Sızdırmaz Sıcak-Soğuk Araç Uyumu', price: 24.99, rating: 4.5, reviews: 89, inStock: true, category: 'home-furniture', image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777287407/8_u2fgyt.webp' },
  ];

  const categories = [
    { name: 'Electronic', icon: '💻', link: '/shop?category=electronic', gradient: 'from-blue-400 to-cyan-500' },
    { name: 'Male', icon: '👔', link: '/shop?category=male', gradient: 'from-indigo-400 to-blue-500' },
    { name: 'Home & Furniture', icon: '🏠', link: '/shop?category=home-furniture', gradient: 'from-amber-400 to-orange-500' },
    { name: 'Woman', icon: '👗', link: '/shop?category=woman', gradient: 'from-pink-400 to-purple-500' },
    { name: 'Sports & Outdoors', icon: '⚽', link: '/shop?category=sports-outdoors', gradient: 'from-green-400 to-emerald-500' },
    { name: 'Supermarket', icon: '🛒', link: '/shop?category=supermarket', gradient: 'from-yellow-400 to-orange-500' },
  ];

  const flashDeals = [
    { id: 'fd1', name: 'Erkek Comfort Flex Pantolon', price: 149.99, originalPrice: 299.99, rating: 4.8, reviews: 67, inStock: true, category: 'male', image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777287619/9_c7qp8t.webp' },
    { id: 'fd2', name: 'Dayanıklı Metal Gövdeli Mobilya Eşya Taşıma ve Kaldırma Seti 150 KGa kadar', price: 99.99, originalPrice: 199.99, rating: 4.9, reviews: 143, inStock: true, category: 'home-furniture', image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777287619/10_ek0b9n.webp' },
    { id: 'fd3', name: 'Masaüstü İçecek Dağıtıcı Dispenseri Pratik Kola Sebili', price: 34.99, originalPrice: 59.99, rating: 4.7, reviews: 234, inStock: true, category: 'supermarket', image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777287619/11_hwrwwt.webp' },
    { id: 'fd4', name: 'Şeffaf Silikon Tampon Ped Seti 3 Boy Kendinden Yapışkanlı Çarpma Önleyici Sessiz Duvar Kapak Koruma', price: 69.99, originalPrice: 129.99, rating: 4.6, reviews: 98, inStock: true, category: 'home-furniture', image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777287619/12_humgzd.webp' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Hero Section Slider */}
      <HeroSlider
        images={[
          {
            src: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777449202/slidertel1-scaled_vh328q.webp',
            alt: 'Bloom Picks Slider 1',
            caption: '',
            subcaption: '',
          },
          {
            src: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777450232/slidertel2-scaled_krfqdl.webp',
            alt: 'Bloom Picks Slider 2',
            caption: '',
            subcaption: '',
          },
          {
            src: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777450236/slidertel5-scaled_srsxyq.webp',
            alt: 'Bloom Picks Slider 3',
            caption: '',
            subcaption: '',
          },
          {
            src: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777450231/slidertel4-scaled_ps4x9m.webp',
            alt: 'Bloom Picks Slider 4',
            caption: '',
            subcaption: '',
          },
          {
            src: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777450232/slidertel3-scaled_codokq.webp',
            alt: 'Bloom Picks Slider 5',
            caption: '',
            subcaption: '',
          },
        ]}
      />

      {/* Featured Products */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-[1320px]">
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
        <div className="container mx-auto px-4 max-w-[1320px]">
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
        <div className="container mx-auto px-4 max-w-[1320px]">
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
        <div className="container mx-auto px-4 max-w-[1320px]">
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
        <div className="container mx-auto px-4 max-w-[1320px]">
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
