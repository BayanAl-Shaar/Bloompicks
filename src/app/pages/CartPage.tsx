import { Link } from 'react-router';
import { Minus, Plus, Trash2, ArrowLeft } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

const cartItems = [
  {
    id: '2',
    name: 'Bloom Picks EN5 ANC Air Pro 2 Noise Cancelling Bluetooth Headphones',
    price: 59.99,
    quantity: 1,
    image:
      'https://res.cloudinary.com/dpiip2agt/image/upload/v1777197455/pro1_zodhoa.webp',
  },
  {
    id: '5',
    name: 'BLOOMPICKS 10000mAh 22.5W Fast Charge Powerbank',
    price: 45.99,
    quantity: 2,
    image:
      'https://res.cloudinary.com/dpiip2agt/image/upload/v1777287407/5_bwalwv.webp',
  },
];

const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
const shipping = 0;
const discount = 10;
const total = subtotal + shipping - discount;

export function CartPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 py-8">
      <div className="container mx-auto max-w-[1320px] px-4">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm text-[var(--muted-foreground)]">Home / Cart</p>
            <h1 className="mb-2">Your Cart</h1>
            <p className="text-[var(--muted-foreground)]">
              {cartItems.length} items in your bag. Review and continue to secure checkout.
            </p>
          </div>
          <Link
            to="/shop"
            className="hidden items-center gap-2 rounded-full border border-white/30 bg-white/70 px-4 py-2 text-sm text-[var(--foreground)] transition-all hover:bg-white md:inline-flex"
          >
            <ArrowLeft className="h-4 w-4" />
            Continue Shopping
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          <section className="space-y-4 lg:col-span-2" aria-label="Cart items">
            <GlassCard className="hidden p-4 md:block">
              <div className="grid grid-cols-[1fr_auto_auto] gap-4 text-sm text-[var(--muted-foreground)]">
                <span>Product</span>
                <span className="text-center">Quantity</span>
                <span className="text-right">Subtotal</span>
              </div>
            </GlassCard>

            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li key={item.id}>
                  <GlassCard className="p-4 sm:p-5">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
                      <div className="h-24 w-24 overflow-hidden rounded-xl bg-white sm:h-28 sm:w-28">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="line-clamp-2 text-base">{item.name}</h3>
                        <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                          Unit price:{' '}
                          <span className="font-medium text-[var(--foreground)]">
                            ${item.price.toFixed(2)}
                          </span>
                        </p>
                        <button
                          type="button"
                          aria-label={`Remove ${item.name} from cart`}
                          className="mt-3 inline-flex items-center gap-1.5 text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--destructive)] md:hidden"
                        >
                          <Trash2 className="h-4 w-4" />
                          Remove
                        </button>
                      </div>

                      <div className="flex items-center justify-between gap-4 sm:justify-end">
                        <div className="flex items-center rounded-full border border-white/40 bg-white/70 p-1">
                          <button
                            type="button"
                            aria-label={`Decrease quantity for ${item.name}`}
                            className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--foreground)] transition-colors hover:bg-white"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="min-w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <button
                            type="button"
                            aria-label={`Increase quantity for ${item.name}`}
                            className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--foreground)] transition-colors hover:bg-white"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="text-right">
                          <p className="text-sm text-[var(--muted-foreground)] md:hidden">Subtotal</p>
                          <p className="text-base font-medium text-[var(--primary)]">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>

                        <button
                          type="button"
                          aria-label={`Remove ${item.name} from cart`}
                          className="hidden h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/70 text-[var(--muted-foreground)] transition-colors hover:text-[var(--destructive)] md:flex"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </GlassCard>
                </li>
              ))}
            </ul>

            <GlassCard className="p-5">
              <h3 className="mb-2">Coupon Code</h3>
              <p className="mb-4 text-sm text-[var(--muted-foreground)]">
                Have a coupon? Apply it before checkout.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Input
                  placeholder="Enter coupon code"
                  className="h-11 rounded-full bg-white/80 px-5"
                  aria-label="Coupon code"
                />
                <Button className="h-11 rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] px-7 text-white hover:opacity-95">
                  Apply Coupon
                </Button>
              </div>
            </GlassCard>
          </section>

          <aside className="lg:col-span-1" aria-label="Cart totals">
            <GlassCard className="p-6 lg:sticky lg:top-28">
              <h3 className="mb-5">Cart Totals</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[var(--muted-foreground)]">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[var(--muted-foreground)]">Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[var(--muted-foreground)]">Discount</span>
                  <span className="text-[var(--primary)]">-${discount.toFixed(2)}</span>
                </div>
              </div>

              <div className="my-5 h-px bg-[var(--border)]" />

              <div className="mb-4 flex items-center justify-between rounded-xl bg-white/60 p-3">
                <span className="text-base">Total</span>
                <span className="text-xl text-[var(--primary)]">${total.toFixed(2)}</span>
              </div>

              <Button asChild className="h-11 w-full rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] text-white hover:opacity-95">
                <Link to="/checkout">Proceed to Checkout</Link>
              </Button>
              <p className="mt-3 text-center text-xs text-[var(--muted-foreground)]">
                Secure checkout powered by BloomPicks
              </p>

              <Link
                to="/shop"
                className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--primary)] md:hidden"
              >
                <ArrowLeft className="h-4 w-4" />
                Continue Shopping
              </Link>
            </GlassCard>
          </aside>
        </div>
      </div>
    </div>
  );
}
