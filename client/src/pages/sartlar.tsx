import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Sartlar() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back-home">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Ana Sayfa
          </Button>
        </Link>

        <h1 className="text-3xl font-bold mb-8">Şartlar ve Koşullar</h1>
        <p className="text-sm text-muted-foreground mb-8">Son güncelleme: {new Date().toLocaleDateString('tr-TR')}</p>

        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Firma Bilgileri</h2>
            <div className="bg-muted/50 p-4 rounded-lg">
              <p className="text-sm"><strong>Ticari Unvan:</strong> 089 Bayern Enerji Sistemleri Ltd. Şti.</p>
              <p className="text-sm"><strong>Adres:</strong> Antalya Merkez, 07000 Antalya, Türkiye</p>
              <p className="text-sm"><strong>Telefon:</strong> +90 507 192 2036</p>
              <p className="text-sm"><strong>E-posta:</strong> info@089bayern.tr</p>
              <p className="text-sm"><strong>Web:</strong> www.089bayern.tr</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">2. Hizmetlerimiz</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              089 Bayern Enerji Sistemleri olarak aşağıdaki hizmetleri sunmaktayız:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Güneş paneli sistemleri kurulumu</li>
              <li>Isı pompası sistemleri kurulumu (Vaillant yetkili)</li>
              <li>Klima sistemleri kurulumu (Samsung yetkili)</li>
              <li>Enerji depolama (batarya) sistemleri</li>
              <li>Enerji verimliliği danışmanlığı</li>
              <li>Bakım ve servis hizmetleri</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">3. Teklif ve Fiyatlandırma</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Tüm tekliflerimiz ücretsiz keşif sonrasında hazırlanır</li>
              <li>Fiyatlar TL (Türk Lirası) cinsinden belirtilir</li>
              <li>Teklifler 30 gün süreyle geçerlidir</li>
              <li>KDV dahil/hariç durumu teklifte açıkça belirtilir</li>
              <li>Proje bazlı özel fiyatlandırma uygulanabilir</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">4. Ödeme Koşulları</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Nakit ödeme</li>
              <li>Banka havalesi / EFT</li>
              <li>Kredi kartı (tek çekim veya taksitli)</li>
              <li>Proje bazlı taksitli ödeme planları</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Ödeme planları sözleşmede detaylı olarak belirtilir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5. Garanti Koşulları</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Güneş Panelleri:</strong> 25 yıl performans garantisi</li>
              <li><strong>Vaillant Isı Pompası:</strong> 10 yıl üretici garantisi</li>
              <li><strong>Samsung Klima:</strong> 5 yıl üretici garantisi</li>
              <li><strong>BYD Batarya:</strong> 10 yıl üretici garantisi</li>
              <li><strong>İşçilik:</strong> 2 yıl kurulum garantisi</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Garanti koşulları ürün bazında farklılık gösterebilir. Detaylar sözleşmede belirtilir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">6. Kurulum Süreci</h2>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Ücretsiz keşif ve ihtiyaç analizi</li>
              <li>Teknik proje hazırlama</li>
              <li>Teklif sunumu ve sözleşme</li>
              <li>Malzeme tedariki</li>
              <li>Profesyonel kurulum</li>
              <li>Test ve devreye alma</li>
              <li>Kullanım eğitimi</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">7. İptal ve İade</h2>
            <p className="text-muted-foreground leading-relaxed">
              6502 sayılı Tüketicinin Korunması Hakkında Kanun kapsamında:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-3">
              <li>Sözleşme imzalandıktan sonra 14 gün içinde cayma hakkınız bulunmaktadır</li>
              <li>Kurulum başladıktan sonra cayma hakkı uygulanmaz</li>
              <li>Özel sipariş ürünlerde cayma hakkı bulunmamaktadır</li>
              <li>İade durumunda yapılan masraflar düşülebilir</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">8. Sorumluluk Sınırları</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Doğal afetlerden kaynaklanan hasarlar garanti kapsamı dışındadır</li>
              <li>Kullanıcı hatasından kaynaklanan arızalar garanti kapsamı dışındadır</li>
              <li>Yetkisiz müdahale sonucu oluşan hasarlar garanti kapsamı dışındadır</li>
              <li>Elektrik şebekesinden kaynaklanan hasarlar garanti kapsamı dışındadır</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">9. Uyuşmazlık Çözümü</h2>
            <p className="text-muted-foreground leading-relaxed">
              Bu sözleşmeden doğan uyuşmazlıklarda Antalya Mahkemeleri ve İcra Daireleri yetkilidir. Tüketici şikayetleri için Tüketici Hakem Heyetlerine başvurulabilir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">10. İletişim</h2>
            <p className="text-muted-foreground leading-relaxed">
              Şartlar ve koşullarımız hakkında sorularınız için bizimle iletişime geçebilirsiniz:
            </p>
            <div className="bg-muted/50 p-4 rounded-lg mt-4">
              <p className="text-sm"><strong>Telefon:</strong> +90 507 192 2036</p>
              <p className="text-sm"><strong>E-posta:</strong> info@089bayern.tr</p>
              <p className="text-sm"><strong>WhatsApp:</strong> +90 507 192 2036</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
