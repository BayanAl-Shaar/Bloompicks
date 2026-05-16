import { Link } from 'react-router';
import { GlassCard } from '../components/GlassCard';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

const recentOrders = [
  { id: '#BP-1048', date: 'May 10, 2026', status: 'Completed', total: '$89.99' },
  { id: '#BP-1041', date: 'May 03, 2026', status: 'Processing', total: '$145.97' },
];

export function MyAccountPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 py-8">
      <div className="container mx-auto max-w-[1320px] px-4">
        <div className="mb-8">
          <p className="mb-2 text-sm text-[var(--muted-foreground)]">Home / My Account</p>
          <h1 className="mb-2">My Account</h1>
          <p className="text-[var(--muted-foreground)]">
            Manage your orders, addresses, and account details.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-4 lg:gap-8">
          <aside className="lg:col-span-1" aria-label="Account navigation">
            <GlassCard className="p-4">
              <nav className="space-y-2">
                <a className="block rounded-xl bg-white/80 px-4 py-3 text-[var(--primary)]" href="#dashboard">Dashboard</a>
                <a className="block rounded-xl px-4 py-3 hover:bg-white/70" href="#orders">Orders</a>
                <a className="block rounded-xl px-4 py-3 hover:bg-white/70" href="#downloads">Downloads</a>
                <a className="block rounded-xl px-4 py-3 hover:bg-white/70" href="#addresses">Addresses</a>
                <a className="block rounded-xl px-4 py-3 hover:bg-white/70" href="#account-details">Account details</a>
                <Link to="/login" className="block rounded-xl px-4 py-3 hover:bg-white/70">Log out</Link>
              </nav>
            </GlassCard>
          </aside>

          <section className="space-y-4 lg:col-span-3" aria-label="Account content">
            <GlassCard className="p-5 sm:p-6" id="dashboard">
              <h3 className="mb-3">Dashboard</h3>
              <p className="text-[var(--muted-foreground)]">
                Hello <span className="text-[var(--foreground)]">Bayan</span>. From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.
              </p>
            </GlassCard>

            <GlassCard className="p-5 sm:p-6" id="orders">
              <div className="mb-4 flex items-center justify-between">
                <h3>Recent Orders</h3>
                <Button className="rounded-full bg-white text-[var(--foreground)] hover:bg-white/90 border border-white/40">
                  View All Orders
                </Button>
              </div>
              <div className="space-y-3">
                {recentOrders.map((order) => (
                  <div
                    key={order.id}
                    className="grid gap-3 rounded-xl border border-white/30 bg-white/60 p-4 text-sm sm:grid-cols-4 sm:items-center"
                  >
                    <p className="font-medium">{order.id}</p>
                    <p className="text-[var(--muted-foreground)]">{order.date}</p>
                    <p className="text-[var(--muted-foreground)]">{order.status}</p>
                    <p className="text-[var(--primary)] sm:text-right">{order.total}</p>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-5 sm:p-6" id="downloads">
              <h3 className="mb-3">Downloads</h3>
              <p className="text-[var(--muted-foreground)]">
                No downloadable products are available right now.
              </p>
            </GlassCard>

            <GlassCard className="p-5 sm:p-6" id="addresses">
              <h3 className="mb-4">Addresses</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-white/30 bg-white/60 p-4">
                  <h4 className="mb-2 text-[var(--primary)]">Billing Address</h4>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    Levent Mah., Istanbul, Turkey
                    <br />
                    +90 5XX XXX XX XX
                    <br />
                    bayan@example.com
                  </p>
                  <Button className="mt-4 rounded-full bg-white text-[var(--foreground)] hover:bg-white/90 border border-white/40">
                    Edit Billing Address
                  </Button>
                </div>
                <div className="rounded-xl border border-white/30 bg-white/60 p-4">
                  <h4 className="mb-2 text-[var(--primary)]">Shipping Address</h4>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    Nisantasi Mah., Istanbul, Turkey
                    <br />
                    +90 5XX XXX XX XX
                  </p>
                  <Button className="mt-4 rounded-full bg-white text-[var(--foreground)] hover:bg-white/90 border border-white/40">
                    Edit Shipping Address
                  </Button>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-5 sm:p-6" id="account-details">
              <h3 className="mb-4">Account Details</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--muted-foreground)]">First name</label>
                  <Input className="h-11 rounded-full bg-white/80 px-5" defaultValue="Bayan" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--muted-foreground)]">Last name</label>
                  <Input className="h-11 rounded-full bg-white/80 px-5" defaultValue="User" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-medium text-[var(--muted-foreground)]">Display name</label>
                  <Input className="h-11 rounded-full bg-white/80 px-5" defaultValue="Bayan" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <label className="text-sm font-medium text-[var(--muted-foreground)]">Email address</label>
                  <Input type="email" className="h-11 rounded-full bg-white/80 px-5" defaultValue="bayan@example.com" />
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button className="rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] text-white hover:opacity-95">
                  Save Changes
                </Button>
                <Link
                  to="/shop"
                  className="inline-flex items-center rounded-full border border-white/40 bg-white px-5 py-2 text-sm hover:bg-white/90"
                >
                  Continue Shopping
                </Link>
              </div>
            </GlassCard>
          </section>
        </div>
      </div>
    </div>
  );
}
