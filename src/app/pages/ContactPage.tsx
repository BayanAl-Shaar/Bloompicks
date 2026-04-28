import { GlassCard } from '../components/GlassCard';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 py-12">
      <div className="container mx-auto px-4 max-w-[1320px]">
        <div className="text-center mb-12">
          <h1 className="mb-3">Get in Touch</h1>
          <p className="text-[var(--muted-foreground)]">We'd love to hear from you. Send us a message!</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <GlassCard className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] flex items-center justify-center">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="mb-2">Phone</h3>
            <p className="text-[var(--muted-foreground)]">+90 212 XXX XX XX</p>
            <p className="text-sm text-[var(--muted-foreground)]">Mon-Fri 9am-6pm (GMT+3)</p>
          </GlassCard>

          <GlassCard className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] flex items-center justify-center">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="mb-2">Email</h3>
            <p className="text-[var(--muted-foreground)]">info@bloompicks.com</p>
            <p className="text-sm text-[var(--muted-foreground)]">We'll respond within 24 hours</p>
          </GlassCard>

          <GlassCard className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] flex items-center justify-center">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="mb-2">Address</h3>
            <p className="text-[var(--muted-foreground)]">Levent, Istanbul</p>
            <p className="text-sm text-[var(--muted-foreground)]">Turkey</p>
          </GlassCard>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <GlassCard>
            <h2 className="mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>
                <div>
                  <label className="block mb-2">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              </div>

              <div>
                <label className="block mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+90 XXX XXX XX XX"
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              </div>

              <div>
                <label className="block mb-2">Subject</label>
                <select className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]">
                  <option>General Inquiry</option>
                  <option>Order Support</option>
                  <option>Product Question</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block mb-2">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full px-4 py-3 rounded-lg bg-white/50 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] resize-none"
                ></textarea>
              </div>

              <button className="w-full px-6 py-4 rounded-full bg-gradient-to-r from-[#E87722] to-[#F59E0B] text-white hover:shadow-xl transition-all flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </GlassCard>

          {/* Map & Additional Info */}
          <div>
            <GlassCard className="mb-6 p-0 overflow-hidden h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96372.56123076499!2d28.9784!3d41.0082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2sIstanbul%2C%20Turkey!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </GlassCard>

            <GlassCard>
              <h3 className="mb-4">Business Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-[var(--muted-foreground)]">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--muted-foreground)]">Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--muted-foreground)]">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="mt-6">
              <h3 className="mb-4">FAQ</h3>
              <p className="text-[var(--muted-foreground)] mb-3">
                Looking for quick answers? Check out our{' '}
                <a href="#" className="text-[var(--primary)] hover:underline">Frequently Asked Questions</a>
                {' '}page for common inquiries about orders, shipping, returns, and more.
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
