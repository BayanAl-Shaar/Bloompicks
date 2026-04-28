import { ProductCard } from '../components/ProductCard';
import { GlassCard } from '../components/GlassCard';
import { Heart } from 'lucide-react';
import { Link } from 'react-router';

export function FavoritesPage() {
  const favorites = [
    { id: '1', name: 'Erkek Comfort Flex Pantolon', price: 89.99, originalPrice: 129.99, rating: 4.5, reviews: 234, inStock: true, image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777287619/9_c7qp8t.webp' },
    { id: '3', name: 'Masaüstü İçecek Dağıtıcı Dispenseri Pratik Kola Sebili', price: 399.99, originalPrice: 499.99, rating: 4.7, reviews: 189, inStock: true, image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777287619/11_hwrwwt.webp' },
    { id: '4', name: 'Bloom Picks EN7 ANC 4. Nesil Gürültü Engelleyici Bluetooth Kulaklık - K2 Çipli iOS & Android Uyumlu', price: 79.99, originalPrice: 119.99, rating: 4.9, reviews: 421, inStock: true, image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777287407/6_os6iro.webp' },
    { id: '5', name: 'BLOOMPİCKS Dahili Kablolu 10000mAh 22,5W Hızlı Şarj Powerbank – Type-C & iPhone Uyumlu – LED Ekranlı', price: 45.99, originalPrice: 69.99, rating: 4.6, reviews: 156, inStock: true, image: 'https://res.cloudinary.com/dpiip2agt/image/upload/v1777287407/5_bwalwv.webp' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 py-8">
      <div className="container mx-auto px-4 max-w-[1320px]">
        <GlassCard className="mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] flex items-center justify-center">
              <Heart className="w-8 h-8 text-white fill-current" />
            </div>
            <div>
              <h1 className="mb-1">My Wishlist</h1>
              <p className="text-[var(--muted-foreground)]">{favorites.length} items saved</p>
            </div>
          </div>
        </GlassCard>

        {favorites.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {favorites.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            <GlassCard className="text-center">
              <p className="text-[var(--muted-foreground)] mb-4">
                Add all items to cart and save up to 15% on your order!
              </p>
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] text-white hover:shadow-xl transition-all">
                Add All to Cart
              </button>
            </GlassCard>
          </>
        ) : (
          <GlassCard className="text-center py-12">
            <Heart className="w-16 h-16 mx-auto mb-4 text-[var(--muted-foreground)]" />
            <h2 className="mb-3">Your Wishlist is Empty</h2>
            <p className="text-[var(--muted-foreground)] mb-6">
              Save your favorite items here to buy them later
            </p>
            <Link
              to="/shop"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] text-white hover:shadow-xl transition-all"
            >
              Start Shopping
            </Link>
          </GlassCard>
        )}
      </div>
    </div>
  );
}
