import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router';
import { GlassCard } from '../components/GlassCard';
import { ProductCard } from '../components/ProductCard';
import { Star, Heart, ShoppingCart, Truck, Shield, RefreshCw, ChevronLeft, ChevronRight, Search, Zap, Clock, CheckCircle, Package } from 'lucide-react';

export function ProductPageSecond() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('White');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);
  // Social proof: number sold this week
  const soldThisWeek = 120;

  // Track scroll for sticky CTA bar using CTA section position
  useEffect(() => {
    const handleScroll = () => {
      if (!ctaRef.current) return;
      const rect = ctaRef.current.getBoundingClientRect();
      setShowStickyBar(rect.bottom < 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const product = {
    id: id || '2',
    name: 'Bloom Picks EN5 ANC Air Pro 2 Noise Cancelling Bluetooth Headphones – Compatible with All Phones',
    price: 749.99,
    originalPrice: 850.0,
    rating: 4.8,
    reviews: 247,
    inStock: true,
    stockCount: 12,
    description: 'The Bloom Picks EN5 ANC Air Pro 2 reduces external noise with its active noise cancellation feature, delivering clear and powerful sound. Its ergonomic design and stable Bluetooth connection make it ideal for everyday use and compatible with all iOS and Android devices.',
    images: [
      'https://res.cloudinary.com/dpiip2agt/image/upload/v1777197455/pro1_zodhoa.webp',
      'https://res.cloudinary.com/dpiip2agt/image/upload/v1777197454/Frame-18_by0lhe.webp',
      'https://res.cloudinary.com/dpiip2agt/image/upload/v1777197455/pro1_zodhoa.webp',
      'https://res.cloudinary.com/dpiip2agt/image/upload/v1777197455/pro1_zodhoa.webp',
      'https://res.cloudinary.com/dpiip2agt/image/upload/v1777197454/Frame-18_by0lhe.webp',
      'https://res.cloudinary.com/dpiip2agt/image/upload/v1777197455/pro1_zodhoa.webp',
    ],
    features: [
      'Advanced ANC (Active Noise Cancellation) technology',
      'Automatic connection within seconds of opening lid',
      'In-ear sensor - music pauses when removed',
      'Personalized naming via app',
      'Power bank charging case for all-day use',
      'Ergonomic design with 3 ear tip sizes',
    ],
    specifications: {
      Brand: 'Bloom Picks Premium',
      'Intended Use': 'Facial and neck firming',
      Technology: 'EMS microcurrent',
      'LED Modes': '7-color therapy',
      Warranty: '1 year original product warranty',
    },
  };

  const relatedProducts = [
    { id: '2', name: 'Smart Tablet Pro', price: 399.99, originalPrice: 499.99, rating: 4.7, reviews: 189, inStock: true, image: 'https://images.unsplash.com/photo-1775288487309-35c588890167?w=400' },
    { id: '3', name: 'Smartphone Accessories Kit', price: 29.99, rating: 4.4, reviews: 176, inStock: true, image: 'https://images.unsplash.com/photo-1775809927436-e6659f35b83d?w=400' },
    { id: '4', name: 'Wireless Speaker', price: 149.99, rating: 4.8, reviews: 92, inStock: true, image: 'https://images.unsplash.com/photo-1772683748224-eba6b2685e15?w=400' },
    { id: '5', name: 'Vintage Camera', price: 149.99, originalPrice: 299.99, rating: 4.8, reviews: 67, inStock: true, image: 'https://images.unsplash.com/photo-1773501942861-a824c059afda?w=400' },
  ];

  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
  const isLowStock = product.stockCount && product.stockCount <= 15;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 py-4 md:py-8">
      {/* Sticky CTA Bar - Mobile */}
      <div className={`fixed bottom-0 left-0 right-0 z-[9999] bg-white/95 border-t border-white/30 shadow-lg shadow-black/10 md:hidden transition-transform duration-300 ${showStickyBar ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="flex items-center justify-between px-4 py-3 gap-3">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-[var(--primary)]">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-sm text-[var(--muted-foreground)] line-through">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>
            <span className="text-xs text-gray-500">🔥 {soldThisWeek}+ sold this week</span>
            {isLowStock && (
              <span className="text-xs text-red-500 font-medium">Only {product.stockCount} left – order now</span>
            )}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className="p-3 rounded-full bg-gray-100 hover:bg-red-50 transition-colors"
              aria-label="Add to Favorites"
            >
              <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
            </button>
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] text-white font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              Add to Cart – Limited Stock
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 md:px-4 max-w-[1320px]">
        {/* Breadcrumb */}
        <nav className="mb-4 md:mb-6 text-xs md:text-sm text-[var(--muted-foreground)]">
          <ol className="flex items-center flex-wrap gap-1">
            <li><Link to="/" className="hover:text-[var(--primary)] transition-colors">Home</Link></li>
            <li><span className="mx-1">/</span></li>
            <li><Link to="/shop" className="hover:text-[var(--primary)] transition-colors">Shop</Link></li>
            <li><span className="mx-1">/</span></li>
            <li className="truncate max-w-[200px]">{product.name}</li>
          </ol>
        </nav>

        {/* Main Product Section */}
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-6 md:gap-10 mb-12">
          {/* Product Images */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <GlassCard className="p-3 md:p-4">
              {/* Main Image */}
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 mb-3 md:mb-4 group">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {/* Discount Badge */}
                {discount > 0 && (
                  <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] text-white text-sm font-bold shadow-lg">
                    -{discount}% OFF
                  </div>
                )}
                {/* Low Stock Badge */}
                {isLowStock && (
                  <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-red-500 text-white text-xs font-semibold animate-pulse">
                    🔥 Only {product.stockCount} left
                  </div>
                )}
                {/* Fullscreen Button */}
                <button
                  type="button"
                  onClick={() => window.open(product.images[selectedImage], '_blank')}
                  className="absolute right-3 top-3 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all opacity-0 group-hover:opacity-100"
                  title="Open larger image"
                >
                  <Search className="w-4 h-4 text-[var(--primary)]" />
                </button>
                {/* Navigation Arrows */}
                <button
                  onClick={() => setSelectedImage((selectedImage - 1 + product.images.length) % product.images.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setSelectedImage((selectedImage + 1) % product.images.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all opacity-0 group-hover:opacity-100"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-6 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all hover:scale-105 ${selectedImage === index ? 'border-[var(--primary)] ring-2 ring-[var(--primary)]/30' : 'border-transparent hover:border-[#E87722]'}`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Product Info - Above the Fold Priority */}
          <div className="space-y-5 md:space-y-6">
            {/* Main Product Info Card (Glass) */}
            <GlassCard className="p-4 md:p-6">
              {/* Product Title */}
              <h1 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 leading-tight">{product.name}</h1>
              {/* Rating & Social Proof */}
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 md:w-5 md:h-5 ${i < Math.floor(product.rating) ? 'fill-[#F59E0B] text-[#F59E0B]' : 'text-gray-300'}`} />
                  ))}
                </div>
                <span className="text-sm font-medium text-[var(--foreground)]">{product.rating}</span>
                <span className="text-sm text-[var(--muted-foreground)]">({product.reviews} reviews)</span>
                <span className="hidden sm:inline text-sm text-green-600 font-medium">✓ Verified</span>
                <span className="text-xs text-gray-500 ml-2">🔥 {soldThisWeek}+ sold this week</span>
              </div>
              {/* Price & Discount */}
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-2xl md:text-3xl font-bold text-[var(--primary)]">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg md:text-xl text-[var(--muted-foreground)] line-through">${product.originalPrice.toFixed(2)}</span>
                    <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded">Save ${(product.originalPrice - product.price).toFixed(2)}</span>
                  </>
                )}
              </div>
              {/* Key Benefits (Above the Fold) */}
              <ul className="mb-3 md:mb-4 space-y-1 text-[var(--foreground)] text-sm">
                <li>🎧 Block out noise and focus on your music</li>
                <li>⚡ Instant pairing with your phone</li>
                <li>🛡️ 1-year warranty & easy returns</li>
                <li>🔋 All-day battery, charge on the go</li>
                <li>📱 Works with all iOS & Android devices</li>
              </ul>
              {/* Urgency & Stock Warning */}
              {isLowStock && (
                <div className="mb-2 text-sm text-red-600 font-semibold">Only {product.stockCount} left – order now</div>
              )}
              {/* Decision Shortcut Box */}
              <div className="mb-4 p-3 rounded-lg border border-orange-100 bg-orange-50 flex flex-col gap-1 text-xs md:text-sm">
                <div><span className="font-semibold">Best for:</span> Commuting, work, travel, and daily use</div>
                <div><span className="font-semibold">Battery:</span> Up to 24 hours with case</div>
                <div><span className="font-semibold">Compatibility:</span> iOS, Android, Windows, Mac</div>
              </div>
              {/* CTA Section */}
              <div ref={ctaRef} className="flex flex-col gap-2 md:flex-row md:gap-3 mb-3 md:mb-4">
                <button className="flex-1 py-4 md:py-5 rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] text-white font-bold text-base md:text-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2">
                  Buy Now – Get it Tomorrow
                </button>
                <button className="flex-1 py-4 md:py-5 rounded-full border-2 border-[var(--primary)] bg-white text-[var(--primary)] font-bold text-base md:text-lg hover:bg-[var(--primary)] hover:text-white transition-all duration-200 flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart – Limited Stock
                </button>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="p-4 md:p-5 rounded-full border-2 border-gray-200 bg-white hover:bg-red-50 hover:border-red-300 transition-all duration-200"
                  aria-label="Add to Favorites"
                >
                  <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                </button>
              </div>
              {/* Trust Signals (compact, near CTA) */}
              <div className="flex flex-wrap gap-2 mb-2 text-xs text-gray-700">
                <div className="flex items-center gap-1 px-2 py-1 rounded bg-gray-50 border border-gray-100"><Shield className="w-3.5 h-3.5" /> Secure payment</div>
                <div className="flex items-center gap-1 px-2 py-1 rounded bg-gray-50 border border-gray-100"><RefreshCw className="w-3.5 h-3.5" /> Easy returns</div>
                <div className="flex items-center gap-1 px-2 py-1 rounded bg-gray-50 border border-gray-100"><Truck className="w-3.5 h-3.5" /> Fast delivery</div>
              </div>
              {/* Color Selection */}
              <div className="mb-2 md:mb-5">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold">Color</h4>
                  <span className="text-sm text-[var(--muted-foreground)]">{selectedColor}</span>
                </div>
                <div className="flex gap-4">
                  {[
                    { name: 'White', color: '#fff', border: 'border-gray-300' },
                    { name: 'Black', color: '#222', border: 'border-gray-700' },
                    { name: 'Blue', color: '#3B82F6', border: 'border-blue-400' },
                    { name: 'Pink', color: '#EC4899', border: 'border-pink-400' },
                  ].map((col) => (
                    <button
                      key={col.name}
                      onClick={() => setSelectedColor(col.name)}
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center transition-all focus:outline-none ${selectedColor === col.name ? 'ring-2 ring-[var(--primary)] border-[var(--primary)] scale-110' : `${col.border} hover:border-[var(--primary)]`}`}
                      title={col.name}
                      aria-label={col.name}
                    >
                      <span className="block w-7 h-7 md:w-8 md:h-8 rounded-full" style={{ background: col.color, border: col.name === 'White' ? '1px solid #ccc' : 'none' }}></span>
                    </button>
                  ))}
                </div>
              </div>
              {/* Size Selection */}
              <div className="mb-2 md:mb-5">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold">Size</h4>
                  <button className="text-xs text-[var(--primary)] hover:underline">Size Guide</button>
                </div>
                <div className="flex gap-2">
                  {['S', 'M', 'L', 'XL'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`flex-1 py-2.5 md:py-3 rounded-lg text-sm font-medium transition-all ${selectedSize === size ? 'bg-gradient-to-r from-[#E87722] to-[#F59E0B] text-white shadow-md' : 'bg-white/50 hover:bg-white/80 border border-gray-200'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              {/* Quantity */}
              <div className="mb-2 md:mb-5">
                <h4 className="text-sm font-semibold mb-2">Quantity</h4>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg bg-white/50 hover:bg-white/80 border border-gray-200 transition-all flex items-center justify-center"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-medium text-lg">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg bg-white/50 hover:bg-white/80 border border-gray-200 transition-all flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>
            </GlassCard>

            {/* Compact Specs Card (simple background) */}
            <div className="p-4 rounded-xl bg-white/80 border border-gray-100 mb-2">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="text-center p-2">
                  <p className="text-xs text-[var(--muted-foreground)]">Warranty</p>
                  <p className="font-semibold text-sm">1 Year</p>
                </div>
                <div className="text-center p-2">
                  <p className="text-xs text-[var(--muted-foreground)]">Battery</p>
                  <p className="font-semibold text-sm">24h</p>
                </div>
                <div className="text-center p-2">
                  <p className="text-xs text-[var(--muted-foreground)]">Compatibility</p>
                  <p className="font-semibold text-sm">iOS/Android</p>
                </div>
                <div className="text-center p-2">
                  <p className="text-xs text-[var(--muted-foreground)]">Color</p>
                  <p className="font-semibold text-sm">{selectedColor}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs (simple background) */}
        <div className="mb-12 p-4 md:p-6 bg-white/90 rounded-xl border border-gray-100">
          <div className="border-b border-gray-200 mb-4 md:mb-6">
            <div className="flex gap-6 md:gap-8 overflow-x-auto">
              <button className="pb-3 border-b-2 border-[var(--primary)] font-semibold whitespace-nowrap">Description</button>
              <button className="pb-3 border-b-2 border-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)] whitespace-nowrap transition-colors">
                Reviews ({product.reviews})
              </button>
              <button className="pb-3 border-b-2 border-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)] whitespace-nowrap transition-colors">
                Shipping
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            {/* Key Features - Bullets First */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Why Choose EN5 ANC?</h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] text-white flex items-center justify-center text-xs mt-0.5">✓</span>
                    <span className="text-sm text-[var(--muted-foreground)]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Specifications</h3>
              <dl className="space-y-0">
                {Object.entries(product.specifications).map(([key, value], index) => (
                  <div key={key} className={`flex justify-between py-2.5 ${index !== Object.entries(product.specifications).length - 1 ? 'border-b border-gray-200' : ''}`}>
                    <dt className="text-sm text-[var(--muted-foreground)]">{key}</dt>
                    <dd className="text-sm font-medium text-right">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          {/* Package Contents - moved lower */}
          <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <h4 className="font-semibold text-blue-900 mb-2">📦 Package Contents</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• 1x EN5 ANC Headphones</li>
              <li>• 1x Charging Case</li>
              <li>• 1x Type-C Charging Cable</li>
              <li>• 3x Spare Ear Tips</li>
            </ul>
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
