import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';

interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  inStock: boolean;
  category?: string;
}

export function ProductCard({ id, image, name, price, originalPrice, rating, reviews, inStock, category }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className="group relative">
      <div className="relative rounded-2xl overflow-hidden bg-white/70 backdrop-blur-lg border border-white/30 shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl">
        {/* Discount badge */}
        {discount > 0 && (
          <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] text-white text-sm">
            -{discount}%
          </div>
        )}

        {/* Wishlist button */}
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all"
        >
          <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-[var(--primary)] text-[var(--primary)]' : 'text-gray-600'}`} />
        </button>

        {/* Product image */}
        <Link to={`/product/${id}`} className="block aspect-square overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </Link>

        {/* Quick actions */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#E87722] to-[#F59E0B] text-white flex items-center justify-center gap-2 hover:shadow-lg transition-all">
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>
        </div>

        {/* Product info */}
        <div className="p-4">
          {category && (
            <span className="inline-block px-2 py-0.5 mb-2 text-xs rounded-full bg-gradient-to-r from-[#E87722]/10 to-[#F59E0B]/10 text-[var(--primary)] border border-[var(--primary)]/20 capitalize">
              {category.replace(/-/g, ' ')}
            </span>
          )}
          <Link to={`/product/${id}`} className="block">
            <h3 className="mb-2 line-clamp-2 hover:text-[var(--primary)] transition-colors">{name}</h3>
          </Link>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-[#F59E0B] text-[#F59E0B]' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span className="text-sm text-[var(--muted-foreground)]">({reviews})</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[var(--primary)]">${price.toFixed(2)}</span>
            {originalPrice && (
              <span className="text-sm text-[var(--muted-foreground)] line-through">${originalPrice.toFixed(2)}</span>
            )}
          </div>

          {/* Stock status */}
          {!inStock && (
            <p className="text-sm text-[var(--destructive)]">Out of Stock</p>
          )}
        </div>
      </div>
    </div>
  );
}
