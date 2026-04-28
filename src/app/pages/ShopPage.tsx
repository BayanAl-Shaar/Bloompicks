import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router';
import { ProductCard } from '../components/ProductCard';
import { GlassCard } from '../components/GlassCard';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from '../components/ui/drawer';
import { useIsMobile } from '../components/ui/use-mobile';
import { SlidersHorizontal, Grid3x3, List, X } from 'lucide-react';

interface FilterContentProps {
  categories: { id: string; name: string; count: number }[];
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  priceRange: number[];
  setPriceRange: (range: number[]) => void;
  onReset: () => void;
  filteredCount: number;
  onApply?: () => void;
}

function FilterContent({
  categories,
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  onReset,
  filteredCount,
  onApply,
}: FilterContentProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-6">
        {/* Categories */}
        <div>
          <h4 className="mb-3 font-medium">Categories</h4>
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

        {/* Brands */}
        <div>
          <h4 className="mb-3 font-medium">Brands</h4>
          <div className="space-y-2">
            <button className="w-full text-left px-4 py-2 rounded-lg transition-all bg-white/50 hover:bg-white/80">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" />
                <span>BLOOMPICKS</span>
              </div>
            </button>
            <button className="w-full text-left px-4 py-2 rounded-lg transition-all bg-white/50 hover:bg-white/80">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" />
                <span>Roberto Bellucci</span>
              </div>
            </button>
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h4 className="mb-3 font-medium">Price Range</h4>
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
          onClick={onReset}
          className="w-full px-4 py-2 rounded-lg bg-white/50 hover:bg-white/80 transition-all"
        >
          Reset Filters
        </button>
      </div>

      {/* Mobile Sticky Footer */}
      {onApply && (
        <div className="p-4 border-t border-white/20 bg-white/30 backdrop-blur-sm">
          <DrawerClose asChild>
            <button
              onClick={onApply}
              className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-[#E87722] to-[#F59E0B] text-white font-medium hover:shadow-lg transition-all"
            >
              Show {filteredCount} Products
            </button>
          </DrawerClose>
        </div>
      )}
    </div>
  );
}

export function ShopPage() {
  const [searchParams] = useSearchParams();
  const isMobile = useIsMobile();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(searchParams.get('category'));
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    setSelectedCategory(categoryFromUrl);
  }, [searchParams]);

  const allProducts = [
    { id: '1', name: 'FLORA GLOBE EMS Neck Lifting and Facial Massager Skin Tightening Device', price: 89.99, originalPrice: 129.99, rating: 4.5, reviews: 234, inStock: true, category: 'woman', image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777195382/BLOOMPICKS-FLORA-GLOBE-EMS-Boyun-Gerdirme-ve-Yuz-Masaj-Aleti-Cilt-Sikilastirma-Cihazi-1_kp45by.webp' },
    { id: '2', name: 'Bloom Picks EN5 ANC Air Pro 2 Noise Cancelling Bluetooth Headphones – Compatible with All Phones', price: 59.99, originalPrice: 99.99, rating: 4.8, reviews: 512, inStock: true, category: 'electronic', image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777197455/pro1_zodhoa.webp' },
    { id: '3', name: 'Bloom Picks Şarjlı Araç Süpürgesi - 2si 1 Arada Güçlü Vakum ve Hava Üfleme Kablosuz El Süpürgesi', price: 399.99, originalPrice: 499.99, rating: 4.7, reviews: 189, inStock: true, category: 'home-furniture', image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777287406/3_ih83rp.webp' },
    { id: '4', name: 'Bloom Picks 1080P Full HD Dual Lens Araç İçi Kamera - 170° Geniş Açı Gece Görüşlü Yol Kayıt Cihazı', price: 79.99, originalPrice: 119.99, rating: 4.9, reviews: 421, inStock: true, category: 'electronic', image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777287407/4_dar3ux.webp' },
    { id: '5', name: 'BLOOMPİCKS Dahili Kablolu 10000mAh 22,5W Hızlı Şarj Powerbank – Type-C & iPhone Uyumlu – LED Ekranlı', price: 45.99, originalPrice: 69.99, rating: 4.6, reviews: 156, inStock: true, category: 'electronic', image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777287407/5_bwalwv.webp' },
    { id: '6', name: 'Bloom Picks EN7 ANC 4. Nesil Gürültü Engelleyici Bluetooth Kulaklık - K2 Çipli iOS & Android Uyumlu', price: 89.99, originalPrice: 149.99, rating: 4.7, reviews: 298, inStock: true, category: 'electronic', image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777287407/6_os6iro.webp' },
    { id: '7', name: '380 mL Şık Tasarım Çift Katmanlı Paslanmaz Çelik Termos Bardak Sızdırmaz Sıcak-Soğuk Araç Uyumu', price: 29.99, rating: 4.4, reviews: 176, inStock: true, category: 'sports-outdoors', image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777287407/7_paqssz.webp' },
    { id: '8', name: '510 mL Şık Tasarım Çift Katmanlı Paslanmaz Çelik Termos Bardak Sızdırmaz Sıcak-Soğuk Araç Uyumu', price: 24.99, rating: 4.5, reviews: 89, inStock: true, category: 'home-furniture', image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777287407/8_u2fgyt.webp' },
    { id: '9', name: 'Erkek Comfort Flex Pantolon', price: 149.99, originalPrice: 299.99, rating: 4.8, reviews: 67, inStock: true, category: 'male', image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777287619/9_c7qp8t.webp' },
    { id: '10', name: 'Dayanıklı Metal Gövdeli Mobilya Eşya Taşıma ve Kaldırma Seti 150 KGa kadar', price: 99.99, originalPrice: 199.99, rating: 4.9, reviews: 143, inStock: true, category: 'home-furniture', image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777287619/10_ek0b9n.webp' },
    { id: '11', name: 'Masaüstü İçecek Dağıtıcı Dispenseri Pratik Kola Sebili', price: 34.99, originalPrice: 59.99, rating: 4.7, reviews: 234, inStock: true, category: 'supermarket', image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777287619/11_hwrwwt.webp' },
    { id: '12', name: 'Şeffaf Silikon Tampon Ped Seti 3 Boy Kendinden Yapışkanlı Çarpma Önleyici Sessiz Duvar Kapak Koruma', price: 69.99, originalPrice: 129.99, rating: 4.6, reviews: 98, inStock: true, category: 'home-furniture', image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777287619/12_humgzd.webp' },
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: allProducts.length },
    { id: 'electronic', name: 'Electronic', count: allProducts.filter(p => p.category === 'electronic').length },
    { id: 'male', name: 'Male', count: allProducts.filter(p => p.category === 'male').length },
    { id: 'home-furniture', name: 'Home & Furniture', count: allProducts.filter(p => p.category === 'home-furniture').length },
    { id: 'woman', name: 'Woman', count: allProducts.filter(p => p.category === 'woman').length },
    { id: 'sports-outdoors', name: 'Sports & Outdoors', count: allProducts.filter(p => p.category === 'sports-outdoors').length },
    { id: 'supermarket', name: 'Supermarket', count: allProducts.filter(p => p.category === 'supermarket').length },
  ];

  const filteredProducts = allProducts.filter(product => {
    if (selectedCategory && selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    return true;
  });

  const activeFilterCount =
    (selectedCategory && selectedCategory !== 'all' ? 1 : 0) +
    (priceRange[1] < 500 ? 1 : 0);

  const handleReset = () => {
    setSelectedCategory(null);
    setPriceRange([0, 500]);
  };

  const filterContentProps: FilterContentProps = {
    categories,
    selectedCategory,
    setSelectedCategory,
    priceRange,
    setPriceRange,
    onReset: handleReset,
    filteredCount: filteredProducts.length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 py-8 overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-[1320px]">
        <div className="mb-8">
          <h1 className="mb-2">Shop All Products</h1>
          <p className="text-[var(--muted-foreground)]">Discover our complete collection</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar — Desktop Only */}
          <div className="hidden lg:block lg:col-span-1">
            <GlassCard>
              <div className="flex items-center gap-2 mb-6">
                <SlidersHorizontal className="w-5 h-5 text-[var(--primary)]" />
                <h3>Filters</h3>
              </div>
              <FilterContent {...filterContentProps} />
            </GlassCard>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3 min-w-0">
            {/* Toolbar */}
            <GlassCard className="mb-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-[var(--muted-foreground)]">
                  Showing {filteredProducts.length} products
                </p>
                <div className="flex items-center gap-4">
                  {/* Mobile Filter Trigger */}
                  {isMobile && (
                    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
                      <DrawerTrigger asChild>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/50 hover:bg-white/80 transition-all border border-white/30">
                          <SlidersHorizontal className="w-4 h-4" />
                          <span>Filters</span>
                          {activeFilterCount > 0 && (
                            <span className="ml-1 px-2 py-0.5 text-xs rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] text-white">
                              {activeFilterCount}
                            </span>
                          )}
                        </button>
                      </DrawerTrigger>
                      <DrawerContent className="bg-white/80 backdrop-blur-xl border-t border-white/30">
                        <DrawerHeader className="border-b border-white/20 pb-4">
                          <div className="flex items-center justify-between">
                            <DrawerTitle className="text-lg font-semibold">Filters</DrawerTitle>
                            <DrawerClose asChild>
                              <button className="p-2 rounded-lg hover:bg-white/50 transition-colors">
                                <X className="w-5 h-5" />
                              </button>
                            </DrawerClose>
                          </div>
                        </DrawerHeader>
                        <FilterContent
                          {...filterContentProps}
                          onApply={() => setIsDrawerOpen(false)}
                        />
                      </DrawerContent>
                    </Drawer>
                  )}

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
                  {/*<div className="flex items-center gap-2 p-1 rounded-lg bg-white/50">
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
                  </div>*/}
                </div>
              </div>
            </GlassCard>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className={viewMode === 'grid' ? 'grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 min-w-0' : 'space-y-6'}>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <GlassCard className="text-center py-12">
                <p className="text-[var(--muted-foreground)] mb-4">No products found matching your filters.</p>
                <button
                  onClick={handleReset}
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

