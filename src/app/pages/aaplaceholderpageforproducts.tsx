import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { GlassCard } from '../components/GlassCard';
import { ProductCard } from '../components/ProductCard';
import { Star, Heart, ShoppingCart, Truck, Shield, RefreshCw, ChevronLeft, ChevronRight, Search } from 'lucide-react';

export function ProductPageSecond() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('White');
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = {
    id: id || '2',
    name: 'Bloom Picks EN5 ANC Air Pro 2 Noise Cancelling Bluetooth Headphones – Compatible with All Phones',
    price: 749.99,
    originalPrice: 850.0,
    rating: 4.8,
    reviews: 0,
    inStock: true,
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
      'EMS Microcurrent Technology for lifting and firming',
      '45°C heated therapy to support collagen production',
      '7-color LED light mode for targeted skin benefits',
      'Boosts skincare absorption for deeper product penetration',
      'Portable, USB rechargeable, and easy to use on the go',
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 py-8">
      <div className="container mx-auto px-4 max-w-[1320px]">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-[var(--muted-foreground)]">
          <Link to="/" className="hover:text-[var(--primary)]">Home</Link>
          {' / '}
          <Link to="/shop" className="hover:text-[var(--primary)]">Shop</Link>
          {' / '}
          <span>{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 mb-16">
          {/* Product Images */}
          <div className="lg:mx-auto">
            <GlassCard className="mb-4">
              <div className="relative aspect-[3/3] rounded-lg overflow-hidden bg-gray-100 mb-4">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {discount > 0 && (
                  <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] text-white">
                    -{discount}%
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => window.open(product.images[selectedImage], '_blank')}
                  className="absolute right-4 top-4 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all"
                  title="Open larger image"
                >
                  <Search className="w-5 h-5 text-[var(--primary)]" />
                </button>
                <button
                  onClick={() => setSelectedImage((selectedImage - 1 + product.images.length) % product.images.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => setSelectedImage((selectedImage + 1) % product.images.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-6 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all hover:scale-105 ${
                      selectedImage === index ? 'border-[var(--primary)]' : 'border-transparent hover:border-[#E87722]'
                    }`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Product Info */}
          <div>
            <GlassCard>
              <h1 className="mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-[#F59E0B] text-[#F59E0B]' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-[var(--muted-foreground)]">{product.rating} ({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl text-[var(--primary)]">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-xl text-[var(--muted-foreground)] line-through">${product.originalPrice.toFixed(2)}</span>
                )}
              </div>

              {/* Description */}
              <p className="text-[var(--muted-foreground)] mb-4">{product.description}</p>
              <a
                href="#description-tab"
                className="inline-flex items-center justify-center rounded-lg bg-white/80 px-5 py-2 text-sm font-medium text-[var(--primary)] transition hover:bg-white"
              >
                Go to Product Description
              </a>

              {/* Size Selection */}
              <div className="mb-6">
                <h4 className="mb-3">Size</h4>
                <div className="flex gap-3">
                  {['S', 'M', 'L', 'XL'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-2 rounded-lg transition-all ${
                        selectedSize === size
                          ? 'bg-gradient-to-r from-[#E87722] to-[#F59E0B] text-white'
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <h4 className="mb-3">Color</h4>
                <div className="flex gap-6">
                  {[
                    { name: 'White', color: '#fff', border: 'border-gray-300' },
                    { name: 'Black', color: '#222', border: 'border-gray-700' },
                    { name: 'Blue', color: '#3B82F6', border: 'border-blue-400' },
                    { name: 'Pink', color: '#EC4899', border: 'border-pink-400' },
                  ].map((col) => (
                    <div key={col.name} className="flex flex-col items-center">
                      <button
                        onClick={() => setSelectedColor(col.name)}
                        className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all focus:outline-none mb-1 ${
                          selectedColor === col.name
                            ? 'ring-2 ring-[var(--primary)] border-[var(--primary)] scale-110'
                            : `${col.border} hover:border-[var(--primary)]`
                        }`}
                        title={col.name}
                        aria-label={col.name}
                      >
                        <span
                          className="block w-10 h-10 rounded-full"
                          style={{ background: col.color, border: col.name === 'White' ? '1px solid #ccc' : 'none' }}
                        ></span>
                      </button>
                      <span className={`text-xs mt-1 ${selectedColor === col.name ? 'font-semibold text-[var(--primary)]' : 'text-gray-500'}`}>{col.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <h4 className="mb-3">Quantity</h4>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg bg-white/50 hover:bg-white/80 transition-all"
                  >
                    -
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg bg-white/50 hover:bg-white/80 transition-all"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mb-6">
                <button className="flex-1 px-6 py-4 rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] text-white hover:shadow-xl hover:scale-[1.01] transition-all duration-200 flex items-center justify-center gap-2">
                  Buy Now
                </button>
                <button className="flex-1 px-6 py-4 rounded-full border border-white/40 bg-white/70 text-[var(--foreground)] hover:bg-white hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all duration-200 flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="p-4 rounded-full bg-white/50 hover:bg-[var(--primary)]/10 transition-all duration-200"
                  aria-label="Add to Favorites"
                >
                  <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-[var(--primary)] text-[var(--primary)]' : 'text-[var(--foreground)]'}`} />
                </button>
              </div>

              {/* Shipping & Key Features */}
              <div className="mb-6 rounded-3xl border border-white/60 bg-white/70 p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <Truck className="w-6 h-6 text-[var(--primary)]" />
                  <div>
                    <p className="text-sm font-medium">Estimated Delivery Time</p>
                    <p className="text-lg font-semibold">Within 1 day</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/60 bg-white p-4 text-center">
                    <p className="text-sm text-[var(--muted-foreground)]">Warranty</p>
                    <p className="mt-2 font-semibold">2 Years</p>
                  </div>
                  <div className="rounded-2xl border border-white/60 bg-white p-4 text-center">
                    <p className="text-sm text-[var(--muted-foreground)]">Colour</p>
                    <p className="mt-2 font-semibold">White</p>
                  </div>
                  <div className="rounded-2xl border border-white/60 bg-white p-4 text-center">
                    <p className="text-sm text-[var(--muted-foreground)]">Bluetooth Version</p>
                    <p className="mt-2 font-semibold">5.0</p>
                  </div>
                  <div className="rounded-2xl border border-white/60 bg-white p-4 text-center">
                    <p className="text-sm text-[var(--muted-foreground)]">Origin</p>
                    <p className="mt-2 font-semibold">Chinese</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Product Details Tabs */}
        <GlassCard className="mb-16">
          <div className="border-b border-white/30 mb-6">
            <div className="flex gap-6">
                <button id="description-tab" className="pb-3 border-b-2 border-[var(--primary)]">Description</button>
              <button className="pb-3 border-b-2 border-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)]">
                Reviews ({product.reviews})
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Explanation</h3>
              <p className="mb-4 text-[var(--muted-foreground)]">Bloom Picks EN5 ANC: Experience the Rhythm of Music Without Interruption! 🎧</p>
              <p className="mb-4 text-[var(--muted-foreground)]">Get ready for a groundbreaking audio experience with our new generation EN5 ANC model, which combines technology and aesthetics. 100% compatible with all iOS and Android devices!</p>
              <div className="space-y-4">
                <div>
                  <h4 className="mb-2 font-semibold">✨ Key Features:</h4>
                  <ul className="mt-2 list-disc space-y-2 pl-5 text-[var(--muted-foreground)]">
                    <li><span className="font-semibold">Advanced ANC (Noise Cancellation):</span> Silence the outside world and focus solely on your music.</li>
                    <li><span className="font-semibold">Automatic Connection:</span> It connects within seconds of you opening the lid.</li>
                    <li><span className="font-semibold">In-ear Sensor Technology:</span> Music pauses when you take the earbuds out and resumes from where it left off when you put them back in.</li>
                    <li><span className="font-semibold">Personalization:</span> Give your headphones any name you want using the "Change Name" function.</li>
                    <li><span className="font-semibold">Uninterrupted Power:</span> With this power bank-equipped charging case, you can have it with you all day long.</li>
                    <li><span className="font-semibold">Ergonomic and Comfortable:</span> With 3 different ear tip sizes, they fit perfectly in your ear and won't cause discomfort during extended use.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 font-semibold">📦 Package Contents</h4>
                  <p className="text-[var(--muted-foreground)]">1 x EN5 ANC Headset, Charging Case, 1m Type-C Charging Cable, Spare Ear Tips.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-3">Product Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-[var(--primary)]">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <h3 className="mb-3">Specifications</h3>
                <dl className="space-y-2">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-white/20">
                      <dt className="text-[var(--muted-foreground)]">{key}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </GlassCard>

        {/* Related Products */}
        <div>
          <h2 className="mb-6">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
