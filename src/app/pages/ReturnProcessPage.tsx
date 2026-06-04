import { GlassCard } from '../components/GlassCard';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

export function ReturnProcessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 py-12">
      <div className="container mx-auto px-4 max-w-[1320px]">
        <div className="text-center mb-12">
          <h1 className="mb-3">İade Süreci</h1>
          <p className="text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Aldığınız ürünü iade etmek için aşağıdaki adımları ve sık sorulan soruları inceleyebilirsiniz.
          </p>
        </div>

        <GlassCard className="mb-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="step-1">
              <AccordionTrigger>Aldığım ürünü nasıl iade edebilirim?</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-[var(--muted-foreground)]">
                    Bloom Picks’te iade süreci oldukça basittir. İade veya iptal talebiniz varsa aşağıdaki adımları takip ederek kolayca başvuruda bulunabilirsiniz:
                  </p>
                  <ul className="space-y-3 text-[var(--muted-foreground)]">
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--primary)] mt-1">1.</span>
                      <span>Bize Ulaşın sayfasına gidin.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--primary)] mt-1">2.</span>
                      <span>Formdaki “Konu” bölümünden İptal/İade Talebi seçeneğini işaretleyin.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--primary)] mt-1">3.</span>
                      <span>
                        Ad, e-posta, telefon bilgilerinizi girin ve açıklama kısmında sipariş numaranızla birlikte iade/iptal nedenini belirtin.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--primary)] mt-1">4.</span>
                      <span>
                        Formu gönderdikten sonra, müşteri hizmetleri ekibimiz başvurunuzu inceleyerek en geç 24 saat içerisinde sizinle iletişime geçecektir.
                      </span>
                    </li>
                  </ul>
                  <p className="text-[var(--muted-foreground)]">
                    İade süreci, müşteri temsilcimizin yönlendirmesiyle birlikte başlatılır ve detaylı şekilde takip edilir. Gerekli onaylar sağlandığında, iade kargo kodu ve tüm adımlar size iletilir.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="policy-1">
              <AccordionTrigger>İade politikanız nedir?</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-3 text-[var(--muted-foreground)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--primary)] mt-1">•</span>
                    <span>Ürün tesliminden itibaren 14 gün içinde iade talebi oluşturabilirsiniz.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--primary)] mt-1">•</span>
                    <span>
                      Ürün, kullanılmamış, etiketi çıkarılmamış, ambalajı zarar görmemiş ve tüm aksesuarlarıyla eksiksiz olmalıdır.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--primary)] mt-1">•</span>
                    <span>
                      Kozmetik, kişisel bakım, iç giyim gibi hijyenik ürünlerin ambalajı açıldıysa iade kabul edilmez.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--primary)] mt-1">•</span>
                    <span>
                      Hasarlı ya da eksik ürünler için, teslimat sırasında mutlaka kargo görevlisiyle tutanak tutulmalıdır.
                    </span>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="fee-1">
              <AccordionTrigger>İade için ücret ödeyecek miyim?</AccordionTrigger>
              <AccordionContent>
                <p className="text-[var(--muted-foreground)]">
                  Hayır. Sistemden aldığınız iade kargo kodu ile anlaşmalı kargo firması üzerinden ücretsiz gönderim yapabilirsiniz. Farklı kargo firmalarıyla yapılan gönderilerde ücret müşteriye aittir.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="single-1">
              <AccordionTrigger>Farklı teslimatlarla gelen ürünleri tek seferde iade edebilir miyim?</AccordionTrigger>
              <AccordionContent>
                <p className="text-[var(--muted-foreground)]">Evet, yapabilirsiniz.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="refund-1">
              <AccordionTrigger>Ücret iadem ne zaman yapılır?</AccordionTrigger>
              <AccordionContent>
                <p className="text-[var(--muted-foreground)]">
                  Ürün tarafımıza ulaştıktan sonra 1–3 iş günü içinde incelenir. Onay sonrası, ücret iadesi 3–7 iş günü içinde ödemenizi yaptığınız kanalla (kredi kartı, banka transferi vs.) tarafınıza yansıtılır.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="late-1">
              <AccordionTrigger>15 günü geçti, yine de iade edebilir miyim?</AccordionTrigger>
              <AccordionContent>
                <p className="text-[var(--muted-foreground)]">
                  Yasal iade süresi 14 gündür. Bu sürenin aşılması durumunda iade kabul edilemez. Ancak ürün kusurluysa 14 gün kuralı dışında da işlem yapılabilir (müşteri hizmetleriyle iletişime geçiniz).
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="invoice-1">
              <AccordionTrigger>Faturamı kaybettim, nasıl iade yapabilirim?</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-[var(--muted-foreground)]">
                    Bireysel siparişlerde iade işlemi için faturaya sahip olmanız zorunlu değildir. İade başvurunuz sırasında, sipariş numaranız ve iletişim bilgileriniz yeterlidir.
                  </p>
                  <p className="text-[var(--muted-foreground)]">
                    Ancak işlem sürecini hızlandırmak adına, sipariş detaylarınızı ve iade nedeninizi net şekilde Bize Ulaşın formunda belirtmenizi öneririz.
                  </p>
                  <p className="text-[var(--muted-foreground)]">
                    Kurumsal siparişlerde ise iade işlemi için, satıcı adına düzenlenmiş bir iade faturası kesilmesi gerekmektedir. İade talebini oluştururken, açıklama kısmına mutlaka iade faturası numarasını eklemelisiniz.
                  </p>
                  <p className="text-[var(--muted-foreground)]">
                    Müşteri temsilcimiz gerekli kontrol ve yönlendirmeleri sağlayarak süreci sizinle birlikte yönetecektir.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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


