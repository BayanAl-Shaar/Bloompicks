import { GlassCard } from '../components/GlassCard';
import { Link } from 'react-router';
import { Globe, PackageCheck, Truck, MapPinned } from 'lucide-react';

const shippingMethods = [
  {
    title: 'Standard Shipping',
    eta: '3-7 business days',
    price: 'Free on orders over $50',
  },
  {
    title: 'Express Shipping',
    eta: '1-3 business days',
    price: 'Calculated at checkout',
  },
  {
    title: 'International Shipping',
    eta: '5-12 business days',
    price: 'Depends on destination',
  },
];

export function ShippingInfoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 py-12">
      <div className="container mx-auto px-4 max-w-[1320px]">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-white/30 mb-4">
            <Truck className="w-4 h-4 text-[var(--primary)]" />
            <span className="text-sm text-[var(--muted-foreground)]">Delivery Details</span>
          </div>
          <h1 className="mb-3">Shipping Information</h1>
          <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Everything you need to know about shipping options, delivery timelines, and order tracking.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {shippingMethods.map((method) => (
            <GlassCard key={method.title} className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] flex items-center justify-center">
                <PackageCheck className="w-7 h-7 text-white" />
              </div>
              <h3 className="mb-2">{method.title}</h3>
              <p className="text-[var(--muted-foreground)] mb-2">{method.eta}</p>
              <p className="text-sm text-[var(--primary)]">{method.price}</p>
            </GlassCard>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <GlassCard>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-full bg-white/60 border border-white/30 flex items-center justify-center">
                <MapPinned className="w-5 h-5 text-[var(--primary)]" />
              </div>
              <h2>Delivery Coverage</h2>
            </div>
            <p className="text-[var(--muted-foreground)] mb-4">
              We deliver across major cities and regions with trusted carrier partners. Coverage and speed may vary by
              destination.
            </p>
            <ul className="space-y-2">
              <li className="text-[var(--muted-foreground)]">• Real-time tracking for shipped orders</li>
              <li className="text-[var(--muted-foreground)]">• Delivery updates sent by email</li>
              <li className="text-[var(--muted-foreground)]">• Additional checks for high-value items</li>
            </ul>
          </GlassCard>

          <GlassCard>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-full bg-white/60 border border-white/30 flex items-center justify-center">
                <Globe className="w-5 h-5 text-[var(--primary)]" />
              </div>
              <h2>International Orders</h2>
            </div>
            <p className="text-[var(--muted-foreground)] mb-4">
              International shipments may require customs processing. Duties and taxes are determined by local
              authorities and are not always included in product pricing.
            </p>
            <ul className="space-y-2">
              <li className="text-[var(--muted-foreground)]">• Customs clearance can add extra transit time</li>
              <li className="text-[var(--muted-foreground)]">• Final fees vary by country and order value</li>
              <li className="text-[var(--muted-foreground)]">• Support team can assist with shipping status</li>
            </ul>
          </GlassCard>
        </div>

        <GlassCard className="text-center">
          <h3 className="mb-3">Need Shipping Help?</h3>
          <p className="text-[var(--muted-foreground)] mb-6">
            Reach out to our team for delivery questions, tracking support, or special shipping requests.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] text-white hover:shadow-xl transition-all"
            >
              Contact Us
            </Link>
            <Link
              to="/faq"
              className="px-8 py-3 rounded-full bg-white/50 border border-white/30 hover:border-[var(--primary)] transition-all"
            >
              View FAQ
            </Link>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
