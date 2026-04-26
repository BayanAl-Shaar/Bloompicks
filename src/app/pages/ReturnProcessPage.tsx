import { GlassCard } from '../components/GlassCard';
import { Package, MessageSquare, RefreshCw, CheckCircle2 } from 'lucide-react';

export function ReturnProcessPage() {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Initiate Return',
      description: 'Contact our customer service within 30 days of receiving your order. Provide your order number and reason for return.',
    },
    {
      icon: Package,
      title: 'Package Your Item',
      description: 'Carefully pack the item in its original packaging. Include all accessories, tags, and documentation.',
    },
    {
      icon: RefreshCw,
      title: 'Ship It Back',
      description: "Use the prepaid shipping label we'll send you. Drop off at any authorized shipping location.",
    },
    {
      icon: CheckCircle2,
      title: 'Get Your Refund',
      description: "Once we receive and inspect your return, we'll process your refund within 5-7 business days.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="mb-3">Return Process</h1>
          <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">
            We want you to love your purchase! If you're not completely satisfied, here's how to return your items hassle-free.
          </p>
        </div>

        {/* Return Steps */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <GlassCard key={index} className="relative">
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] text-white flex items-center justify-center text-xl">
                    {index + 1}
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-white/50 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[var(--primary)]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-2">{step.title}</h3>
                      <p className="text-[var(--muted-foreground)]">{step.description}</p>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>

        {/* Return Policy Details */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <GlassCard>
            <h2 className="mb-6">Return Policy</h2>
            <div className="space-y-4">
              <div>
                <h4 className="mb-2 text-[var(--primary)]">30-Day Return Window</h4>
                <p className="text-[var(--muted-foreground)]">
                  You have 30 days from the date of delivery to initiate a return for most items.
                </p>
              </div>
              <div>
                <h4 className="mb-2 text-[var(--primary)]">Items Must Be Unused</h4>
                <p className="text-[var(--muted-foreground)]">
                  Products must be in their original condition with all tags, packaging, and accessories included.
                </p>
              </div>
              <div>
                <h4 className="mb-2 text-[var(--primary)]">Free Return Shipping</h4>
                <p className="text-[var(--muted-foreground)]">
                  We provide a prepaid shipping label for all eligible returns within your country.
                </p>
              </div>
              <div>
                <h4 className="mb-2 text-[var(--primary)]">Full Refund Guaranteed</h4>
                <p className="text-[var(--muted-foreground)]">
                  Receive a full refund to your original payment method once we process your return.
                </p>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <h2 className="mb-6">Non-Returnable Items</h2>
            <p className="text-[var(--muted-foreground)] mb-4">
              For health and safety reasons, the following items cannot be returned:
            </p>
            <ul className="space-y-2">
              {[
                'Personal care items (opened)',
                'Intimate apparel and swimwear',
                'Perishable goods',
                'Custom or personalized items',
                'Digital products',
                'Gift cards',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-[var(--primary)] mt-1">•</span>
                  <span className="text-[var(--muted-foreground)]">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 rounded-lg bg-[var(--accent)]">
              <p className="text-sm text-[var(--accent-foreground)]">
                <strong>Note:</strong> If you received a damaged or defective item, please contact us immediately. We'll arrange a replacement or full refund at no cost to you.
              </p>
            </div>
          </GlassCard>
        </div>

        {/* FAQ Section */}
        <GlassCard>
          <h2 className="mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h4 className="mb-2">How long does it take to process a refund?</h4>
              <p className="text-[var(--muted-foreground)]">
                Once we receive your return, we'll inspect it and process your refund within 5-7 business days. Depending on your bank or payment provider, it may take an additional 3-5 days for the funds to appear in your account.
              </p>
            </div>
            <div>
              <h4 className="mb-2">Can I exchange an item instead of returning it?</h4>
              <p className="text-[var(--muted-foreground)]">
                Yes! If you'd like to exchange an item for a different size or color, please indicate this when you initiate your return. We'll ship the replacement as soon as we receive your return.
              </p>
            </div>
            <div>
              <h4 className="mb-2">What if my item was damaged during shipping?</h4>
              <p className="text-[var(--muted-foreground)]">
                We're sorry to hear that! Please contact us within 48 hours of delivery with photos of the damage. We'll send a replacement immediately or issue a full refund, whichever you prefer.
              </p>
            </div>
            <div>
              <h4 className="mb-2">Do you offer international returns?</h4>
              <p className="text-[var(--muted-foreground)]">
                Yes, we accept returns from all countries we ship to. Return shipping costs may vary for international orders. Please contact our customer service for specific details.
              </p>
            </div>
          </div>
        </GlassCard>

        {/* CTA */}
        <div className="text-center mt-12">
          <GlassCard className="inline-block">
            <h3 className="mb-3">Need Help?</h3>
            <p className="text-[var(--muted-foreground)] mb-6">
              Our customer service team is here to assist you with your return
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] text-white hover:shadow-xl transition-all"
              >
                Contact Support
              </a>
              <a
                href="mailto:returns@bloompicks.com"
                className="px-8 py-3 rounded-full bg-white/50 border border-white/30 hover:border-[var(--primary)] transition-all"
              >
                Email Returns Team
              </a>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
