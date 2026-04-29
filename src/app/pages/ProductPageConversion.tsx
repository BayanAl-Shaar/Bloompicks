import { useState, useEffect, useRef } from 'react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../components/ui/breadcrumb';
import { useParams, Link } from 'react-router';
import { GlassCard } from '../components/GlassCard';
import { ProductCard } from '../components/ProductCard';
import { 
  Star, Heart, ShoppingCart, Truck, Shield, RefreshCw, 
  ChevronLeft, ChevronRight, Search, CheckCircle, Package,
  Clock, Zap, Award, ThumbsUp, MessageCircle, ArrowDown
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

// Realistic product data for a premium wireless headphone
const productData = {
  id: '3',
  name: 'Bloom Picks EN5 Pro ANC Wireless Headphones - Active Noise Cancellation, 30H Battery, Hi-Res Audio',
  category: 'Wireless Headphones',
  categorySlug: 'headphones',
  price: 179.99,
  originalPrice: 299.99,
  rating: 4.7,
  reviewCount: 1247,
  images: [
    'https://res.cloudinary.com/dpiip2agt/image/upload/v1777197455/pro1_zodhoa.webp',
    'https://res.cloudinary.com/dpiip2agt/image/upload/v1777197454/Frame-18_by0lhe.webp',
    'https://res.cloudinary.com/dpiip2agt/image/upload/v1777287407/6_os6iro.webp',
    'https://res.cloudinary.com/dpiip2agt/image/upload/v1777197456/Frame-22_akushg.webp',
  ],
  description: 'Experience immersive Hi-Res audio with our flagship EN5 Pro ANC headphones. Featuring advanced active noise cancellation, 30-hour battery life, and premium comfort for all-day listening.',
  shortBenefits: [
    ' Active Noise Cancellation blocks distractions',
    ' 30-hour battery - charge once, listen for days',
    ' Hi-Res Audio with deep bass and crystal highs',
    ' Sweat & water resistant for workouts',
    '    Instant pairing with any device',
  ],
  features: [
    'Advanced ANC technology reduces ambient noise by up to 35dB',
    '40mm custom drivers deliver exceptional sound quality',
    '30-hour continuous playback, 5-hour fast charge',
    'Premium protein leather ear cushions for all-day comfort',
    'Bluetooth 5.3 with multipoint connection (2 devices)',
    'Built-in microphone with AI noise reduction for calls',
    'Foldable design with premium carrying case included',
  ],
  specifications: {
    'Driver Size': '40mm',
    'Frequency Response': '20Hz - 40kHz',
    'Battery Life': '30 hours (ANC on), 45 hours (ANC off)',
    'Charging Time': '2 hours via USB-C',
    'Bluetooth Version': '5.3',
    'Bluetooth Range': '10m / 33ft',
    'Weight': '250g',
    'Water Resistance': 'IPX4',
    'Warranty': '2 years',
  },
  packageContents: [
    'EN5 Pro ANC Headphones',
    'Premium carrying case',
    'USB-C charging cable (1m)',
    '3.5mm audio cable (1.2m)',
    'Airline adapter',
    'Quick start guide',
  ],
  colors: [
    { name: 'Midnight Black', hex: '#1a1a1a', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800', stock: 12 },
    { name: 'Pearl White', hex: '#f5f5f5', image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800', stock: 8 },
    { name: 'Navy Blue', hex: '#1e3a5f', image: 'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800', stock: 3 },
  ],
  sizes: [
    { name: 'Standard', description: 'Fits most adults' },
    { name: 'Large', description: 'Extra room for ears' },
  ],
  stockCount: 23,
  soldThisWeek: 25,
  shipping: {
    free: true,
    estimatedDelivery: 'Tomorrow, Feb 15',
    expressDelivery: 'Today, Feb 14',
  },
  returns: {
    days: 30,
    free: true,
  },
  warranty: '2 years',
};

const reviews = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    date: 'Feb 10, 2026',
    title: 'Best headphones I\'ve ever owned!',
    content: 'The noise cancellation is incredible. I use these for my daily commute and the difference is night and day. Battery life is amazing - I charge once a week.',
    helpful: 47,
  },
  {
    id: 2,
    name: 'James K.',
    rating: 5,
    date: 'Feb 8, 2026',
    title: 'Worth every penny',
    content: 'Sound quality is top notch. The bass is punchy but not overwhelming. Very comfortable for long listening sessions. Fast shipping too!',
    helpful: 32,
  },
  {
    id: 3,
    name: 'Emily R.',
    rating: 4,
    date: 'Feb 5, 2026',
    title: 'Great sound, minor issue',
    content: 'Overall very happy with my purchase. The ANC works perfectly. Only wish they came with more ear tip options. But the comfort is great.',
    helpful: 18,
  },
];

const relatedProducts = [
  { id: '1', name: 'FLORA GLOBE EMS Neck Lifting and Facial Massager Skin Tightening Device', price: 89.99, originalPrice: 129.99, rating: 4.5, reviews: 234, inStock: true, image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777195382/BLOOMPICKS-FLORA-GLOBE-EMS-Boyun-Gerdirme-ve-Yuz-Masaj-Aleti-Cilt-Sikilastirma-Cihazi-1_kp45by.webp' },
  { id: '2', name: 'Bloom Picks EN5 ANC Air Pro 2 Noise Cancelling Bluetooth Headphones – Compatible with All Phones', price: 59.99, originalPrice: 99.99, rating: 4.8, reviews: 512, inStock: true, image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777197455/pro1_zodhoa.webp' },
  { id: '4', name: 'Bloom Picks 1080P Full HD Dual Lens Araç İçi Kamera - 170° Geniş Açı Gece Görüşlü Yol Kayıt Cihazı', price: 79.99, originalPrice: 119.99, rating: 4.9, reviews: 421, inStock: true, image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777287407/4_dar3ux.webp' },
  { id: '5', name: 'BLOOMPİCKS Dahili Kablolu 10000mAh 22,5W Hızlı Şarj Powerbank – Type-C & iPhone Uyumlu – LED Ekranlı', price: 45.99, originalPrice: 69.99, rating: 4.6, reviews: 156, inStock: true, image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777287407/5_bwalwv.webp' },
];

const faqs = [
  {
    question: 'Is it compatible with iPhone?',
    answer: 'Yes! The EN5 Pro pairs instantly with iPhone, iPad, and all Apple devices via Bluetooth 5.3. It also supports multipoint connection, so you can stay connected to two devices at the same time.',
  },
  {
    question: 'Does it support fast charging?',
    answer: 'Absolutely. A quick 5-minute charge gives you up to 2 hours of playback. A full charge via USB-C takes about 2 hours and delivers 30 hours of continuous listening with ANC on (45 hours with ANC off).',
  },
  {
    question: 'Can I use these for workouts?',
    answer: 'Yes. The EN5 Pro has an IPX4 water-resistance rating, which means it can handle sweat and light rain. The secure over-ear fit stays comfortable during vigorous exercise.',
  },
  {
    question: 'How good is the noise cancellation?',
    answer: 'Our advanced ANC technology reduces ambient noise by up to 35dB, making these ideal for commuting, open offices, or noisy environments. You can also switch to Transparency mode when you need to hear your surroundings.',
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day hassle-free return policy with free return shipping. If you\'re not completely satisfied, just send them back for a full refund—no questions asked.',
  },
];

// Helper for recently viewed localStorage
const RECENTLY_VIEWED_KEY = 'bloom_recently_viewed';
const MAX_RECENT = 4;

interface RecentProduct {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  inStock: boolean;
}

function getRecentlyViewed(): RecentProduct[] {
  try {
    const raw = localStorage.getItem(RECENTLY_VIEWED_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveRecentlyViewed(product: RecentProduct) {
  const existing = getRecentlyViewed().filter((p) => p.id !== product.id);
  const updated = [product, ...existing].slice(0, MAX_RECENT);
  localStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(updated));
}

export function ProductPageConversion() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('Standard');
  const [selectedColor, setSelectedColor] = useState(productData.colors[0]);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [recentlyViewed, setRecentlyViewed] = useState<RecentProduct[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  const scrollToDescription = () => {
    descriptionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveTab('description');
  };

  const product = productData;
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  const isLowStock = product.stockCount <= 20;

  // Sticky desktop CTA - show after scrolling 400px
  const [showDesktopBar, setShowDesktopBar] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowDesktopBar(window.scrollY > 1000);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial scroll
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track this product in "recently viewed" + demo data for first load
  useEffect(() => {
    const current: RecentProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      rating: product.rating,
      reviews: product.reviewCount,
      image: product.images[0],
      inStock: product.stockCount > 0,
    };
    saveRecentlyViewed(current);
    let viewed = getRecentlyViewed().filter((p) => p.id !== product.id);
    // Demo data for first visit
    if (viewed.length === 0) {
      viewed = [
        { id: '1', name: 'FLORA GLOBE EMS Neck Lifting and Facial Massager Skin Tightening Device', price: 89.99, rating: 4.5, reviews: 234, image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777195382/BLOOMPICKS-FLORA-GLOBE-EMS-Boyun-Gerdirme-ve-Yuz-Masaj-Aleti-Cilt-Sikilastirma-Cihazi-1_kp45by.webp', inStock: true },
        { id: '2', name: 'Bloom Picks EN5 ANC Air Pro 2 Noise Cancelling Bluetooth Headphones – Compatible with All Phones', price: 59.99, rating: 4.8, reviews: 512, image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777197455/pro1_zodhoa.webp', inStock: true },
      ];
    }
    setRecentlyViewed(viewed);
  }, [product.id]);

  const handleAddToCart = () => {
    console.log('Added to cart:', { productId: product.id, quantity, color: selectedColor.name, size: selectedSize });
  };

  const handleBuyNow = () => {
    console.log('Buy now:', { productId: product.id, quantity, color: selectedColor.name, size: selectedSize });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ========== STICKY DESKTOP CTA BAR ========== */}
      {/*<div className={`fixed top-0 left-0 right-0 z-[60] bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-lg hidden md:block transition-all duration-300 ease-in-out ${showDesktopBar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-3">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-4 min-w-0">
              <img src={product.images[0]} alt="" className="w-12 h-12 rounded-lg object-cover border border-gray-200" />
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-gray-900 truncate max-w-[300px] lg:max-w-[400px]">{product.name}</h3>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-bold text-gray-900">${product.price}</span>
                  <span className="text-gray-400 line-through">${product.originalPrice}</span>
                  {isLowStock && (
                    <span className="text-red-600 font-medium text-xs">🔥 Selling fast — {product.stockCount} left</span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="p-2.5 rounded-full bg-gray-100 hover:bg-red-50 transition-colors"
                aria-label="Add to wishlist"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
              </button>
              <button
                onClick={handleAddToCart}
                className="px-5 py-2.5 rounded-full bg-gray-900 text-white font-semibold text-sm hover:bg-gray-800 transition-colors"
              >
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>*/}

      {/* ========== STICKY MOBILE BAR ========== */}
      {/*<div className="md:hidden fixed bottom-0 left-0 right-0 z-[9999] bg-white border-t border-gray-200 shadow-2xl">
        <div className="flex items-center py-2 px-4 gap-3">
          <div className="flex flex-col justify-center min-w-0 flex-1 pr-2">
            <span className="text-xs font-medium text-gray-900 truncate max-w-[160px] mb-1">Bloom Picks EN5 Pro</span>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-lg font-bold text-gray-900">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xs text-gray-400 line-through">${product.originalPrice}</span>
              )}
            </div>
            <div className="flex items-center gap-1 text-xs">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} />
                ))}
              </div>
              ({product.reviewCount})
              {isLowStock && (
                <span className="ml-1 text-red-600 font-bold">🔥 {product.stockCount} left</span>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className="flex flex-col items-center p-2 -m-2 rounded-lg bg-gray-100 hover:bg-red-50 transition-colors"
              aria-label="Wishlist"
            >
              <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
            </button>
            <button
              onClick={handleBuyNow}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold text-sm shadow-2xl hover:shadow-3xl hover:scale-[1.05] transition-all flex items-center justify-center flex-1 mx-1"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>*/}

      <div className="container mx-auto px-3 md:px-4 lg:px-8 max-w-7xl pt-2 md:pt-2 lg:pt-2 pb-24 md:pb-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-4 md:mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
<BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
<BreadcrumbItem>
              <BreadcrumbLink href="/shop">Categories</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
<BreadcrumbItem>
              <BreadcrumbLink href="/shop?category=electronics">Electronics</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
<BreadcrumbItem>
              <BreadcrumbLink href="/shop?category=bluetooth-headphones">Bluetooth Headphones</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
<BreadcrumbItem>
              <BreadcrumbLink href="/shop?category=mens">Men's</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
<BreadcrumbItem>
              <BreadcrumbLink href="/shop?category=headphones">Headphones</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
<BreadcrumbItem>
              <BreadcrumbLink href="/shop?category=earphones">Earphones</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{product.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* ========== ABOVE THE FOLD ========== */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 mb-10 lg:mb-14">
          {/* Image Carousel */}
          <div className="lg:sticky lg:top-20 lg:self-start">
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200">
              {/* Main Image */}
              <div className="relative aspect-square bg-gray-100 group">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {discount > 0 && (
                    <span className="px-3 py-1.5 rounded-full bg-red-500 text-white text-sm font-bold">
                      {discount}% OFF
                    </span>
                  )}
                  {isLowStock && (
                    <span className="px-3 py-1.5 rounded-full bg-orange-500 text-white text-xs font-semibold animate-pulse">
                      🔥 Selling fast — {product.stockCount} left in stock
                    </span>
                  )}
                </div>

                {/* Navigation */}
                <button
                  onClick={() => setSelectedImage((selectedImage - 1 + product.images.length) % product.images.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center hover:bg-white transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button
                  onClick={() => setSelectedImage((selectedImage + 1) % product.images.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center hover:bg-white transition-all"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </div>

              {/* Thumbnails */}
              <div className="p-3 grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all hover:scale-105 ${selectedImage === index ? 'border-orange-500 ring-2 ring-orange-200' : 'border-transparent hover:border-gray-300'}`}
                  >
                    <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-5">
            {/* Title */}
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
              {product.name}
            </h1>

            {/* Product Category */}
            {/*<div className="flex items-center gap-2">
              <Link 
                to={`/shop?category=${product.categorySlug}`} 
                className="inline-flex items-center px-3 py-1.5 rounded-full bg-orange-100 text-orange-700 text-sm font-medium hover:bg-orange-200 transition-colors"
              >
                <span className="mr-1">📁</span>
                {product.category}
              </Link>
              <span className="text-gray-400">|</span>
              <span className="text-sm text-gray-500">SKU: {product.id.toUpperCase()}-EN5PRO</span>
            </div>*/}

            {/* Rating & Social Proof */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 md:w-5 md:h-5 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="text-sm font-semibold text-gray-900">{product.rating}</span>
              <span className="text-sm text-gray-500">({product.reviewCount.toLocaleString()} reviews)</span>
              <span className="hidden sm:inline text-sm text-green-600 font-medium">✓ Verified</span>
              <span className="text-sm text-orange-600 font-semibold">🔥 {product.soldThisWeek}+ sold this week</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-3xl md:text-4xl font-bold text-gray-900">${product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
                  <span className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                </>
              )}
            </div>

            {/* Short Benefit Description */}
            <p className="text-gray-600 text-base leading-relaxed">
              {product.description}
            </p>

            {/* Jump to Description Button */}
            <button
              onClick={scrollToDescription}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-orange-50 border border-orange-200 text-orange-700 text-sm font-bold hover:bg-orange-100 hover:border-orange-300 transition-all shadow-sm"
            >
              {/*<ArrowDown className="w-4 h-4 animate-bounce" />*/}
              View Full Description
            </button>

            {/* Key Selling Points */}
            <h3 className="font-semibold text-gray-900">Key Features</h3>
            <ul className="space-y-2">
              {product.shortBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Recent Reviews Preview */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900">What Customers Say</h3>
                <button
                  onClick={() => {
                    descriptionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    setActiveTab('reviews');
                  }}
                  className="text-sm text-orange-600 font-medium hover:underline"
                >
                  Read all {product.reviewCount} reviews
                </button>
              </div>
              <div className="space-y-3">
                {reviews.slice(0, 2).map((review) => (
                  <div key={review.id} className="p-3 bg-white border border-gray-100 rounded-xl shadow-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3.5 h-3.5 ${i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      <span className="text-xs font-semibold text-gray-900">{review.name}</span>
                      <span className="text-xs text-gray-400">{review.date}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-gray-800 mb-1">{review.title}</h4>
                    <p className="text-sm text-gray-600 line-clamp-2">{review.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stock Urgency */}
            {isLowStock && (
              <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                <Clock className="w-5 h-5 text-red-500" />
                <span className="text-sm font-semibold text-red-700">
                  ⚠️ Only {product.stockCount} left in stock - orders ship today!
                </span>
              </div>
            )}

            {/* Shipping Info */}
            <div className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <Truck className="w-5 h-5 text-blue-600" />
              <div className="text-sm">
                <span className="font-semibold text-blue-900">
                  {product.shipping.free ? 'FREE Shipping' : 'Standard Shipping'}
                </span>
<span className="text-blue-700"> • <span className="font-bold text-blue-900">Arrives: {product.shipping.estimatedDelivery}</span></span>
              </div>
            </div>

            {/* ========== VARIATIONS ========== */}
            {/* Color Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-semibold text-gray-900">
                  Color: <span className="font-normal text-gray-600">{selectedColor.name}</span>
                  <span className="ml-2 text-[10px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded-full uppercase tracking-wide">(Selected)</span>
                </h4>
              </div>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all hover:scale-110 ${selectedColor.name === color.name ? 'border-orange-500 ring-2 ring-orange-200' : 'border-gray-200 hover:border-gray-300'}`}
                    title={color.name}
                    aria-label={`Select ${color.name}`}
                  >
                    <span 
                      className="w-9 h-9 rounded-full" 
                      style={{ backgroundColor: color.hex, border: color.hex === '#f5f5f5' ? '1px solid #ddd' : 'none' }}
                    />
                  </button>
                ))}
              </div>
              {/* Stock per color */}
              <div className="mt-2 flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <span 
                    key={color.name} 
                    className={`text-xs px-2 py-1 rounded-md inline-flex items-center gap-1 ${selectedColor.name === color.name ? 'bg-orange-50 text-orange-700 border border-orange-200 font-medium' : 'text-gray-400'}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: color.hex }} />
                    {color.name} — {color.stock <= 5 ? `Only ${color.stock} left` : `${color.stock} left`}
                  </span>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-semibold text-gray-900">Size</h4>
                <button className="text-xs text-orange-600 hover:underline font-medium">Size Guide</button>
              </div>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size.name}
                    onClick={() => setSelectedSize(size.name)}
                    className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                      selectedSize === size.name 
                        ? 'bg-gray-900 text-white shadow-lg' 
                        : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {size.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Decision Confidence Section */}
            <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
              <p className="text-sm text-green-800 font-medium">
                ✔ 1,247 customers bought this<br />
                ✔ 94% recommend this product<br />
                ✔ Free returns within 30 days
              </p>
            </div>

            {/* ========== CTA SECTION ========== */}
            <div ref={ctaRef} className="space-y-3 pt-2">
              <div className="flex gap-3">
                {/* Quantity Selector */}
                <div className="flex items-center bg-white border border-gray-200 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-12 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-semibold text-gray-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-12 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                {/* Wishlist Button */}
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="p-3 rounded-lg border border-gray-200 bg-white hover:bg-red-50 hover:border-red-200 transition-all"
                  aria-label="Add to wishlist"
                >
                  <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                </button>
              </div>

              {/* Main CTAs */}
              <div className="flex gap-3">
                <button
                  onClick={handleBuyNow}
                  className="flex-1 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                >
                  <Zap className="w-5 h-5" />
                  Buy Now
                </button>
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-4 rounded-full bg-gray-900 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Why shop with us */}
            <h4 className="font-semibold text-gray-900 mb-2">Why shop with us?</h4>

            {/* ========== TRUST SIGNALS ========== */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-gray-700 font-medium">Secure Payment</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <RefreshCw className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 font-medium">{product.returns.days}-Day Returns</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Award className="w-5 h-5 text-purple-600" />
                <span className="text-gray-700 font-medium">{product.warranty} Warranty</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Truck className="w-5 h-5 text-orange-600" />
                <span className="text-gray-700 font-medium">Free Shipping</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========== BELOW THE FOLD - TABS ========== */}
        <div ref={descriptionRef} className="mb-10 lg:mb-14">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200 mb-6">
            <div className="flex gap-6 md:gap-8 overflow-x-auto pb-px">
              {[
                { id: 'description', label: 'Description' },
                { id: 'features', label: 'Key Features' },
                { id: 'specs', label: 'Specifications' },
                { id: 'reviews', label: `Reviews (${product.reviewCount})` },
                { id: 'shipping', label: 'Shipping & Returns' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-3 text-sm font-semibold whitespace-nowrap transition-colors border-b-2 ${
                    activeTab === tab.id
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl p-5 md:p-8 border border-gray-200 shadow-sm">
            {activeTab === 'description' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Product Description</h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {product.description}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-base mt-4">
                    Designed for audiophiles and everyday listeners alike, the Bloom Picks EN5 Pro delivers 
                    premium sound quality with advanced active noise cancellation. Whether you're commuting, 
                    working from home, or enjoying your favorite music, these headphones provide an immersive 
                    audio experience that blocks out the world around you.
                  </p>
                </div>
                
                {/* Package Contents */}
                <div className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Package className="w-5 h-5 text-orange-500" />
                    What's in the Box
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {product.packageContents.map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Why Choose EN5 Pro?</h3>
                <ul className="space-y-4">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-700 font-medium">{feature}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'specs' && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="text-gray-500 font-medium">{key}</span>
                      <span className="text-gray-900 font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                {/* Review Summary */}
                <div className="flex items-center gap-6 p-6 bg-gray-50 rounded-xl">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900">{product.rating}</div>
                    <div className="flex justify-center my-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <div className="text-sm text-gray-500">{product.reviewCount.toLocaleString()} reviews</div>
                  </div>
                  <div className="flex-1 space-y-2">
                    {[5, 4, 3, 2, 1].map((stars) => (
                      <div key={stars} className="flex items-center gap-2">
                        <span className="text-xs text-gray-500 w-3">{stars}</span>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-amber-400 rounded-full" 
                            style={{ width: stars === 5 ? '78%' : stars === 4 ? '15%' : stars === 3 ? '4%' : stars === 2 ? '2%' : '1%' }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Review List */}
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="p-5 border border-gray-100 rounded-xl">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-gray-900">{review.name}</span>
                            <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded">Verified</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`} />
                              ))}
                            </div>
                            <span className="text-xs text-gray-500">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{review.title}</h4>
                      <p className="text-gray-600 text-sm mb-3">{review.content}</p>
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-orange-600 transition-colors">
                          <ThumbsUp className="w-4 h-4" />
                          Helpful ({review.helpful})
                        </button>
                        <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-orange-600 transition-colors">
                          <MessageCircle className="w-4 h-4" />
                          Reply
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full py-3 rounded-lg border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-colors">
                  Load More Reviews
                </button>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-5 bg-blue-50 rounded-xl">
                    <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                      <Truck className="w-5 h-5" />
                      Shipping Information
                    </h4>
                    <ul className="space-y-2 text-sm text-blue-800">
                      <li>• Free standard shipping on all orders</li>
                      <li>• Express delivery available at checkout</li>
                      <li>• Orders placed before 2PM ship same day</li>
                      <li>• Free shipping on orders over $50</li>
                      <li>• Delivery to 50+ countries worldwide</li>
                    </ul>
                  </div>
                  <div className="p-5 bg-green-50 rounded-xl">
                    <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                      <RefreshCw className="w-5 h-5" />
                      Returns & Refunds
                    </h4>
                    <ul className="space-y-2 text-sm text-green-800">
                      <li>• {product.returns.days}-day hassle-free returns</li>
                      <li>• Free return shipping on all orders</li>
                      <li>• Full refund or exchange</li>
                      <li>• No questions asked</li>
                      <li>• Original packaging required</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

{/* ========== RELATED PRODUCTS ========== */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>

        {/* ========== RECENTLY VIEWED ========== */}
        <div className="mt-10 lg:mt-14">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Recently Viewed</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {recentlyViewed.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>

        {/* ========== FAQ SECTION (Clients LOVE this) ========== */}
        <GlassCard className="mt-10 lg:mt-14 mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <MessageCircle className="w-10 h-10 text-orange-500 shrink-0" />
            Frequently Asked Questions
          </h3>
          <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
            {faqs.map(({ question, answer }, idx) => (
              <AccordionItem key={idx} value={`faq-${idx}`}>
                <AccordionTrigger className="text-lg hover:no-underline">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-4">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </GlassCard>
      </div>
    </div>
  );
}
