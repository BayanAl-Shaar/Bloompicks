import { Link } from 'react-router';
import { ArrowLeft, CreditCard, Truck, ShieldCheck } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

const orderItems = [
  { id: '2', name: 'Bloom Picks EN5 ANC Air Pro 2', quantity: 1, price: 59.99 },
  { id: '5', name: 'BLOOMPICKS 10000mAh Fast Charge Powerbank', quantity: 2, price: 45.99 },
];

const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
const shipping = 0;
const discount = 10;
const total = subtotal + shipping - discount;

export function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 py-8">
      <div className="container mx-auto max-w-[1320px] px-4">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm text-[var(--muted-foreground)]">Home / Cart / Checkout</p>
            <h1 className="mb-2">Checkout</h1>
            <p className="text-[var(--muted-foreground)]">Complete your order with secure payment and fast delivery</p>
          </div>
          <Link
            to="/cart"
            className="hidden items-center gap-2 rounded-full border border-white/30 bg-white/70 px-4 py-2 text-sm text-[var(--foreground)] transition-all hover:bg-white md:inline-flex"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Cart
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:items-start lg:gap-8">
          <section className="space-y-4 lg:col-span-2" aria-label="Checkout form">
            <GlassCard className="p-5 sm:p-6">
              <p className="text-xl leading-snug">
                <span className="text-[var(--primary)]">Are you a returning customer?</span>{' '}
                <span className="text-[var(--secondary)]">Click here to log in.</span>
              </p>
            </GlassCard>

            <GlassCard className="p-5 sm:p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3>Contact Information</h3>
                <span className="rounded-full bg-white/70 px-3 py-1 text-xs text-[var(--muted-foreground)]">Step 1</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-medium text-[var(--muted-foreground)]">Email address</label>
                  <Input placeholder="you@example.com" type="email" className="h-11 rounded-full bg-white/80 px-5" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-medium text-[var(--muted-foreground)]">Phone number</label>
                  <Input placeholder="+90" type="tel" className="h-11 rounded-full bg-white/80 px-5" />
                </div>
              </div>
              <div className="mt-4 rounded-xl bg-white/50 p-3 text-xs text-[var(--muted-foreground)]">
                Order updates and delivery details will be sent to this contact information.
              </div>
            </GlassCard>

            <GlassCard className="p-5 sm:p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3>Billing Details</h3>
                <span className="rounded-full bg-white/70 px-3 py-1 text-xs text-[var(--muted-foreground)]">Step 2</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--muted-foreground)]">First name</label>
                  <Input placeholder="First name" className="h-11 rounded-full bg-white/80 px-5" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--muted-foreground)]">Last name</label>
                  <Input placeholder="Last name" className="h-11 rounded-full bg-white/80 px-5" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-medium text-[var(--muted-foreground)]">Company (optional)</label>
                  <Input placeholder="Company name" className="h-11 rounded-full bg-white/80 px-5" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-medium text-[var(--muted-foreground)]">Country / Region</label>
                  <Input placeholder="Country / Region" className="h-11 rounded-full bg-white/80 px-5" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-medium text-[var(--muted-foreground)]">Address line 1</label>
                  <Input placeholder="Street address" className="h-11 rounded-full bg-white/80 px-5" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-medium text-[var(--muted-foreground)]">Address line 2 (optional)</label>
                  <Input placeholder="Apartment, suite, unit, etc." className="h-11 rounded-full bg-white/80 px-5" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--muted-foreground)]">City</label>
                  <Input placeholder="City" className="h-11 rounded-full bg-white/80 px-5" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--muted-foreground)]">State / Province</label>
                  <Input placeholder="State / Province" className="h-11 rounded-full bg-white/80 px-5" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--muted-foreground)]">Postal code</label>
                  <Input placeholder="Postal code" className="h-11 rounded-full bg-white/80 px-5" />
                </div>
              </div>

              <div className="mt-6 space-y-5">
                <div>
                  <h4 className="mb-3 text-[var(--primary)]">Corporate Invoice</h4>
                  <label className="flex items-start gap-2 text-sm text-[var(--muted-foreground)]">
                    <input type="checkbox" className="mt-0.5 h-4 w-4 accent-[var(--primary)]" />
                    <span>I would like a corporate invoice (optional)</span>
                  </label>
                </div>
                <div>
                  <h4 className="mb-3 text-[var(--primary)]">Account Creation</h4>
                  <label className="flex items-start gap-2 text-sm text-[var(--muted-foreground)]">
                    <input type="checkbox" className="mt-0.5 h-4 w-4 accent-[var(--primary)]" />
                    <span>Create an account</span>
                  </label>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-5 sm:p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3>Shipping Details</h3>
                <span className="rounded-full bg-white/70 px-3 py-1 text-xs text-[var(--muted-foreground)]">Step 3</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-medium text-[var(--muted-foreground)]">Recipient name</label>
                  <Input placeholder="Recipient name" className="h-11 rounded-full bg-white/80 px-5" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-medium text-[var(--muted-foreground)]">Address line 1</label>
                  <Input placeholder="Street address" className="h-11 rounded-full bg-white/80 px-5" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-medium text-[var(--muted-foreground)]">Address line 2 (optional)</label>
                  <Input placeholder="Apartment, suite, unit, etc." className="h-11 rounded-full bg-white/80 px-5" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--muted-foreground)]">City</label>
                  <Input placeholder="City" className="h-11 rounded-full bg-white/80 px-5" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--muted-foreground)]">State / Province</label>
                  <Input placeholder="State / Province" className="h-11 rounded-full bg-white/80 px-5" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--muted-foreground)]">Postal code</label>
                  <Input placeholder="Postal code" className="h-11 rounded-full bg-white/80 px-5" />
                </div>
              </div>
              <label className="mt-4 flex items-start gap-2 text-sm text-[var(--muted-foreground)]">
                <input type="checkbox" className="mt-1 h-4 w-4 accent-[var(--primary)]" />
                <span>Shipping details are the same as billing details</span>
              </label>
            </GlassCard>

            <GlassCard className="p-5 sm:p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3>Order Notes</h3>
                <span className="rounded-full bg-white/70 px-3 py-1 text-xs text-[var(--muted-foreground)]">Step 4</span>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[var(--muted-foreground)]">
                  Notes about your order (optional)
                </label>
                <textarea
                  placeholder="Special notes for delivery, building access, or gift instructions..."
                  rows={4}
                  className="w-full rounded-2xl border border-white/30 bg-white/80 px-4 py-3 text-sm outline-none transition-all placeholder:text-[var(--muted-foreground)] focus-visible:border-[var(--ring)] focus-visible:ring-2 focus-visible:ring-[var(--ring)]/30"
                />
              </div>
            </GlassCard>

            <GlassCard className="p-5 sm:p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3>Payment Method</h3>
                <span className="rounded-full bg-white/70 px-3 py-1 text-xs text-[var(--muted-foreground)]">Step 5</span>
              </div>
              <div className="space-y-3">
                <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/30 bg-white/70 p-4 transition-colors hover:bg-white/90">
                  <input type="radio" name="payment" defaultChecked className="h-4 w-4 accent-[var(--primary)]" />
                  <CreditCard className="h-4 w-4 text-[var(--primary)]" />
                  <div>
                    <p>Credit / Debit Card</p>
                    <p className="text-xs text-[var(--muted-foreground)]">Visa, Mastercard, American Express</p>
                  </div>
                </label>
                <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/30 bg-white/70 p-4 transition-colors hover:bg-white/90">
                  <input type="radio" name="payment" className="h-4 w-4 accent-[var(--primary)]" />
                  <Truck className="h-4 w-4 text-[var(--primary)]" />
                  <div>
                    <p>Cash on Delivery</p>
                    <p className="text-xs text-[var(--muted-foreground)]">Pay when your order arrives</p>
                  </div>
                </label>
              </div>
              <p className="mt-3 text-xs text-[var(--muted-foreground)]">
                Your payment information is processed securely. We do not store card details.
              </p>
            </GlassCard>
          </section>

          <aside className="lg:col-span-1 space-y-4" aria-label="Order summary">
            <GlassCard className="p-6 lg:sticky lg:top-28">
              <h3 className="mb-5">Order Summary</h3>

              <div className="space-y-3">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex items-start justify-between gap-3 rounded-xl bg-white/50 p-3 text-sm">
                    <p className="text-[var(--muted-foreground)]">
                      {item.name} <span className="text-[var(--foreground)]">x{item.quantity}</span>
                    </p>
                    <p className="font-medium text-[var(--foreground)]">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <div className="my-5 h-px bg-[var(--border)]" />

              <div className="mb-5 space-y-3 text-sm">
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

              <GlassCard className="mb-4 p-4">
                <p className="text-xl leading-snug sm:text-2xl">
                  <span className="text-[var(--primary)]">Do you have a coupon?</span>{' '}
                  <span className="text-[var(--secondary)]">Click here to enter your coupon code.</span>
                </p>
              </GlassCard>

              <div className="mb-4 rounded-xl border border-white/30 bg-white/50 p-4">
                <h4 className="mb-3">Promo Code</h4>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Input placeholder="Enter promo code" className="h-10 rounded-full bg-white/90 px-4" />
                  <Button className="h-10 rounded-full border border-white/40 bg-white px-5 text-[var(--foreground)] hover:bg-white/90">
                    Apply
                  </Button>
                </div>
              </div>

              <div className="mb-4 flex items-center justify-between rounded-xl bg-white/60 p-3">
                <span className="text-base">Total</span>
                <span className="text-xl text-[var(--primary)]">${total.toFixed(2)}</span>
              </div>

              <p className="mb-4 text-sm leading-7 text-[var(--muted-foreground)]">
                Your personal data will be processed to process your order, manage delivery and billing,
                provide customer support, and improve your experience on the website.
              </p>

              <label className="mb-4 flex items-start gap-2 text-xs text-[var(--muted-foreground)]">
                <input type="checkbox" className="mt-0.5 h-4 w-4 accent-[var(--primary)]" />
                <span>
                  I agree to the Terms & Conditions and acknowledge the Privacy Policy.
                </span>
              </label>

              <Button className="h-12 w-full rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] text-white hover:opacity-95">
                Confirm the order.
              </Button>
              <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-[var(--muted-foreground)]">
                <ShieldCheck className="h-4 w-4" />
                SSL secured checkout and encrypted payments
              </p>
              <p className="mt-2 text-center text-xs text-[var(--muted-foreground)]">
                30-day return policy and dedicated support
              </p>

              <Link
                to="/cart"
                className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--primary)] md:hidden"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Cart
              </Link>
            </GlassCard>
          </aside>
        </div>
      </div>
    </div>
  );
}
