import { Link } from 'react-router';
import { GlassCard } from '../components/GlassCard';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 flex items-center justify-center py-12">
      <div className="container mx-auto px-4 max-w-[1320px]">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Left Side - Image */}
          <div className="hidden lg:block">
            <GlassCard className="p-0 overflow-hidden">
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/dpiip2agt/image/upload/v1777199064/Hakkimizda-sayfasi1-1024x1024_c4bvi9.webp"
                  alt="Shopping"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3F]/80 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <h2 className="mb-3 text-white">Welcome to Bloom Picks</h2>
                    <p className="text-white/90">Your global destination for trending products</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Side - Form */}
          <div>
            <GlassCard>
              <div className="mb-8 text-center">
                <h1 className="mb-2">{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
                <p className="text-[var(--muted-foreground)]">
                  {isLogin ? 'Login to continue shopping' : 'Join the Bloom Picks community'}
                </p>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <button className="px-4 py-3 rounded-full bg-white/50 border border-white/30 hover:border-[var(--primary)] transition-all flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </button>
                <button className="px-4 py-3 rounded-full bg-white/50 border border-white/30 hover:border-[var(--primary)] transition-all flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </button>
              </div>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/30"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white/70 text-[var(--muted-foreground)]">Or continue with email</span>
                </div>
              </div>

              {/* Form */}
              <form className="space-y-4">
                {!isLogin && (
                  <div>
                    <label className="block mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-full bg-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    />
                  </div>
                )}

                <div>
                  <label className="block mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted-foreground)]" />
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full pl-12 pr-4 py-3 rounded-full bg-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--muted-foreground)]" />
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full pl-12 pr-4 py-3 rounded-full bg-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    />
                  </div>
                </div>

                {isLogin && (
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">Remember me</span>
                    </label>
                    <a href="#" className="text-sm text-[var(--primary)] hover:underline">Forgot password?</a>
                  </div>
                )}

                <button className="w-full px-6 py-4 rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] text-white hover:shadow-xl transition-all flex items-center justify-center gap-2">
                  {isLogin ? 'Login' : 'Create Account'}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-[var(--muted-foreground)]">
                  {isLogin ? "Don't have an account?" : 'Already have an account?'}
                  {' '}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-[var(--primary)] hover:underline"
                  >
                    {isLogin ? 'Sign up' : 'Login'}
                  </button>
                </p>
              </div>

              <div className="mt-6 text-center">
                <Link to="/" className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors">
                  ← Back to Shopping
                </Link>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
