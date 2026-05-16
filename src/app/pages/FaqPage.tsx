import { GlassCard } from '../components/GlassCard';
import { Link } from 'react-router';
import { HelpCircle, ShoppingBag, Truck, ShieldCheck, RotateCcw } from 'lucide-react';

const faqGroups = [
  {
    icon: ShoppingBag,
    title: 'Orders & Payments',
    items: [
      {
        question: 'How do I place an order?',
        answer:
          'Browse products, add your favorites to cart, and complete checkout with your shipping and payment details.',
      },
      {
        question: 'What payment methods do you accept?',
        answer:
          'We accept major credit and debit cards along with secure online payment options available at checkout.',
      },
    ],
  },
  {
    icon: Truck,
    title: 'Shipping & Delivery',
    items: [
      {
        question: 'How long does delivery take?',
        answer:
          'Most orders are delivered in 3-7 business days depending on your location and shipping option.',
      },
      {
        question: 'Can I track my shipment?',
        answer:
          'Yes. Once your order ships, you receive a tracking number by email so you can follow every step.',
      },
    ],
  },
  {
    icon: RotateCcw,
    title: 'Returns & Refunds',
    items: [
      {
        question: 'Can I return an item?',
        answer:
          'Yes, eligible products can be returned within 30 days in original condition with all accessories.',
      },
      {
        question: 'When will I receive my refund?',
        answer:
          'Refunds are processed within 5-7 business days after your return is received and inspected.',
      },
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Account & Security',
    items: [
      {
        question: 'Is my personal information secure?',
        answer:
          'Absolutely. We use secure systems and trusted payment partners to protect your account and transactions.',
      },
      {
        question: 'How can I update my account details?',
        answer:
          'Log in to your account and update profile, address, and contact details from your account settings.',
      },
    ],
  },
];

export function FaqPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 py-12">
      <div className="container mx-auto px-4 max-w-[1320px]">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-white/30 mb-4">
            <HelpCircle className="w-4 h-4 text-[var(--primary)]" />
            <span className="text-sm text-[var(--muted-foreground)]">Help Center</span>
          </div>
          <h1 className="mb-3">Frequently Asked Questions</h1>
          <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Quick answers to common questions about shopping, shipping, returns, and your Bloom Picks account.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {faqGroups.map((group) => {
            const Icon = group.icon;
            return (
              <GlassCard key={group.title}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3>{group.title}</h3>
                </div>

                <div className="space-y-5">
                  {group.items.map((item) => (
                    <div key={item.question}>
                      <h4 className="mb-2 text-[var(--primary)]">{item.question}</h4>
                      <p className="text-[var(--muted-foreground)]">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            );
          })}
        </div>

        <GlassCard className="text-center">
          <h3 className="mb-3">Still Need Help?</h3>
          <p className="text-[var(--muted-foreground)] mb-6">
            Our support team is ready to help you with any other questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] text-white hover:shadow-xl transition-all"
            >
              Contact Support
            </Link>
            <Link
              to="/return-process"
              className="px-8 py-3 rounded-full bg-white/50 border border-white/30 hover:border-[var(--primary)] transition-all"
            >
              Return Process
            </Link>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
