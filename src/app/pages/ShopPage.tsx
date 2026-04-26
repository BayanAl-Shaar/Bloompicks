import { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { GlassCard } from '../components/GlassCard';
import { SlidersHorizontal, Grid3x3, List } from 'lucide-react';

export function ShopPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState([0, 500]);

  const allProducts = [
    { id: '1', name: 'FLORA GLOBE EMS Neck Lifting and Facial Massager Skin Tightening Device', price: 89.99, originalPrice: 129.99, rating: 4.5, reviews: 234, inStock: true, category: 'tech', image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777195382/BLOOMPICKS-FLORA-GLOBE-EMS-Boyun-Gerdirme-ve-Yuz-Masaj-Aleti-Cilt-Sikilastirma-Cihazi-1_kp45by.webp' },
    { id: '2', name: 'Bloom Picks EN5 ANC Air Pro 2 Noise Cancelling Bluetooth Headphones – Compatible with All Phones', price: 59.99, originalPrice: 99.99, rating: 4.8, reviews: 512, inStock: true, category: 'fashion', image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777197455/pro1_zodhoa.webp' },
    { id: '3', name: 'Smart Tablet Pro', price: 399.99, originalPrice: 499.99, rating: 4.7, reviews: 189, inStock: true, category: 'tech', image: 'https://images.unsplash.com/photo-1775288487309-35c588890167?w=400' },
    { id: '4', name: 'Luxury Skincare Set', price: 79.99, originalPrice: 119.99, rating: 4.9, reviews: 421, inStock: true, category: 'beauty', image: 'https://images.unsplash.com/photo-1770717984645-3e86de003cc3?w=400' },
    { id: '5', name: 'Modern Table Lamp', price: 45.99, originalPrice: 69.99, rating: 4.6, reviews: 156, inStock: true, category: 'home', image: 'https://images.unsplash.com/photo-1531410691118-74e9fbc0f57f?w=400' },
    { id: '6', name: 'BLOOMPICKS FLORA GLOBE EMS Neck Lifting and Facial Massager', price: 819.99, originalPrice: 850.0, rating: 4.8, reviews: 234, inStock: true, category: 'beauty', image: 'https://images.unsplash.com/photo-1738520420654-87cd2ad005d0?w=400' },
    { id: '7', name: 'Casual Fashion Jacket', price: 89.99, originalPrice: 149.99, rating: 4.7, reviews: 298, inStock: true, category: 'fashion', image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=400' },
    { id: '7', name: 'Smartphone Accessories Kit', price: 29.99, rating: 4.4, reviews: 176, inStock: true, category: 'tech', image: 'https://images.unsplash.com/photo-1775809927436-e6659f35b83d?w=400' },
    { id: '8', name: 'Minimalist Plant Pot', price: 24.99, rating: 4.5, reviews: 89, inStock: true, category: 'home', image: 'https://images.unsplash.com/photo-1621960144741-3935026f401d?w=400' },
    { id: '9', name: 'Vintage Camera', price: 149.99, originalPrice: 299.99, rating: 4.8, reviews: 67, inStock: true, category: 'tech', image: 'https://images.unsplash.com/photo-1773501942861-a824c059afda?w=400' },
    { id: '10', name: 'Elegant Evening Wear', price: 99.99, originalPrice: 199.99, rating: 4.9, reviews: 143, inStock: true, category: 'fashion', image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400' },
    { id: '11', name: 'Skincare Essentials', price: 34.99, originalPrice: 59.99, rating: 4.7, reviews: 234, inStock: true, category: 'beauty', image: 'https://images.unsplash.com/photo-1703174319257-bbacb50fee9c?w=400' },
    { id: '12', name: 'Wall Art Decor', price: 69.99, originalPrice: 129.99, rating: 4.6, reviews: 98, inStock: true, category: 'home', image: 'https://images.unsplash.com/photo-1608755035200-14b0832dff20?w=400' },
    { id: '13', name: 'Colorful Fashion Collection', price: 45.99, rating: 4.5, reviews: 187, inStock: true, category: 'fashion', image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400' },
    { id: '14', name: 'Wireless Drone', price: 299.99, rating: 4.8, reviews: 92, inStock: true, category: 'tech', image: 'https://images.unsplash.com/photo-1614686028702-55092b06a491?w=400' },
    { id: '15', name: 'Beauty Moisturizer', price: 39.99, rating: 4.9, reviews: 346, inStock: true, category: 'beauty', image: 'https://images.unsplash.com/photo-1629380106682-6736d2c327ed?w=400' },
    { id: '16', name: 'Cozy Living Room Set', price: 199.99, rating: 4.7, reviews: 73, inStock: true, category: 'home', image: 'https://images.unsplash.com/photo-1726000127379-9ef47b86a5e4?w=400' },
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: allProducts.length },
    { id: 'fashion', name: 'Fashion', count: allProducts.filter(p => p.category === 'fashion').length },
    { id: 'tech', name: 'Technology', count: allProducts.filter(p => p.category === 'tech').length },
    { id: 'beauty', name: 'Personal Care', count: allProducts.filter(p => p.category === 'beauty').length },
    { id: 'home', name: 'Home Decor', count: allProducts.filter(p => p.category === 'home').length },
  ];

  const filteredProducts = allProducts.filter(product => {
    if (selectedCategory && selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="mb-2">Shop All Products</h1>
          <p className="text-[var(--muted-foreground)]">Discover our complete collection</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <GlassCard>
              <div className="flex items-center gap-2 mb-6">
                <SlidersHorizontal className="w-5 h-5 text-[var(--primary)]" />
                <h3>Filters</h3>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id === 'all' ? null : category.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                        (selectedCategory === category.id || (!selectedCategory && category.id === 'all'))
                          ? 'bg-gradient-to-r from-[#E87722] to-[#F59E0B] text-white'
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{category.name}</span>
                        <span className="text-sm opacity-80">({category.count})</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="mb-3">Price Range</h4>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex items-center justify-between text-sm">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Reset Filters */}
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setPriceRange([0, 500]);
                }}
                className="w-full px-4 py-2 rounded-lg bg-white/50 hover:bg-white/80 transition-all"
              >
                Reset Filters
              </button>
            </GlassCard>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Toolbar */}
            <GlassCard className="mb-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-[var(--muted-foreground)]">
                  Showing {filteredProducts.length} products
                </p>
                <div className="flex items-center gap-4">
                  {/* Sort */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-2 rounded-lg bg-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                    <option value="newest">Newest</option>
                  </select>

                  {/* View Mode */}
                  <div className="flex items-center gap-2 p-1 rounded-lg bg-white/50">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded ${viewMode === 'grid' ? 'bg-gradient-to-r from-[#E87722] to-[#F59E0B] text-white' : 'hover:bg-white/80'}`}
                    >
                      <Grid3x3 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded ${viewMode === 'list' ? 'bg-gradient-to-r from-[#E87722] to-[#F59E0B] text-white' : 'hover:bg-white/80'}`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-6'}>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <GlassCard className="text-center py-12">
                <p className="text-[var(--muted-foreground)] mb-4">No products found matching your filters.</p>
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setPriceRange([0, 500]);
                  }}
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] text-white hover:shadow-lg transition-all"
                >
                  Clear Filters
                </button>
              </GlassCard>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
