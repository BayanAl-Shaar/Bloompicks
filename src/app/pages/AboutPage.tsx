import { GlassCard } from '../components/GlassCard';
import { Sparkles, Target, Heart, Users } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 py-12">
      <div className="container mx-auto px-4 max-w-[1320px]">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-5xl mb-6 bg-gradient-to-r from-[#E87722] to-[#0B1F3F] bg-clip-text text-transparent">
            About Bloom Picks
          </h1>
          <p className="text-xl text-[var(--muted-foreground)] max-w-3xl mx-auto">
            Your global destination for trending products across fashion, technology, personal care, and home decor. Based in Istanbul, serving the world.
          </p>
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
          <GlassCard className="p-0 overflow-hidden">
            <img
              src="https://res.cloudinary.com/dpiip2agt/image/upload/v1777199064/Hakkimizda-sayfasi-1024x1024_xuaoqv.webp"
              alt="Our Story"
              className="w-full h-full object-cover"
            />
          </GlassCard>
          <div>
            <h2 className="mb-4">Our Story</h2>
            <p className="text-[var(--muted-foreground)] mb-4">
              Founded in Istanbul, Bloom Picks emerged from a vision to create a global e-commerce platform that brings together the best products from around the world. We believe that everyone deserves access to quality, trendy, and affordable products.
            </p>
            <p className="text-[var(--muted-foreground)] mb-4">
              Like a blooming flower, we've grown from a small startup to a trusted marketplace serving millions of customers worldwide. Our name reflects our commitment to helping both our customers and partners flourish.
            </p>
            <p className="text-[var(--muted-foreground)]">
              Today, we offer an extensive collection spanning fashion, technology, beauty, and home decor, all curated with care to ensure quality and value.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="mb-3">Our Values</h2>
            <p className="text-[var(--muted-foreground)]">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <GlassCard className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2">Innovation</h3>
              <p className="text-[var(--muted-foreground)]">
                Always staying ahead of trends and embracing new technologies
              </p>
            </GlassCard>

            <GlassCard className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2">Quality</h3>
              <p className="text-[var(--muted-foreground)]">
                Curating only the best products that meet our high standards
              </p>
            </GlassCard>

            <GlassCard className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2">Customer Care</h3>
              <p className="text-[var(--muted-foreground)]">
                Putting our customers first in every decision we make
              </p>
            </GlassCard>

            <GlassCard className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-2">Community</h3>
              <p className="text-[var(--muted-foreground)]">
                Building connections and supporting our global community
              </p>
            </GlassCard>
          </div>
        </div>

        {/* Stats */}
        <GlassCard className="mb-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl mb-2 bg-gradient-to-r from-[#E87722] to-[#F59E0B] bg-clip-text text-transparent">1M+</div>
              <p className="text-[var(--muted-foreground)]">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl mb-2 bg-gradient-to-r from-[#E87722] to-[#F59E0B] bg-clip-text text-transparent">50K+</div>
              <p className="text-[var(--muted-foreground)]">Products</p>
            </div>
            <div>
              <div className="text-4xl mb-2 bg-gradient-to-r from-[#E87722] to-[#F59E0B] bg-clip-text text-transparent">100+</div>
              <p className="text-[var(--muted-foreground)]">Countries</p>
            </div>
            <div>
              <div className="text-4xl mb-2 bg-gradient-to-r from-[#E87722] to-[#F59E0B] bg-clip-text text-transparent">4.9/5</div>
              <p className="text-[var(--muted-foreground)]">Customer Rating</p>
            </div>
          </div>
        </GlassCard>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <GlassCard>
            <h2 className="mb-4">Our Mission</h2>
            <p className="text-[var(--muted-foreground)]">
              To make trending, quality products accessible to everyone, everywhere. We strive to create a seamless shopping experience that delights our customers and empowers our sellers.
            </p>
          </GlassCard>

          <GlassCard>
            <h2 className="mb-4">Our Vision</h2>
            <p className="text-[var(--muted-foreground)]">
              To become the world's most trusted and loved global marketplace, where people discover products they love and sellers build thriving businesses.
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
