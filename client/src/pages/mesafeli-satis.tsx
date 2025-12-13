import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function MesafeliSatis() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back-home">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Ana Sayfa
          </Button>
        </Link>

        <h1 className="text-3xl font-bold mb-4">Mesafeli Satis Sozlesmesi</h1>
        <p className="text-sm text-muted-foreground mb-8">
          6502 sayili Tuketicinin Korunmasi Hakkinda Kanun ve Mesafeli Sozlesmeler Yonetmeligi kapsaminda
        </p>
        <p className="text-sm text-muted-foreground mb-8">Son guncelleme: {new Date().toLocaleDateString('tr-TR')}</p>

        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-4">Madde 1 - Taraflar</h2>
            <div className="bg-muted/50 p-4 rounded-lg space-y-2">
              <h3 className="font-medium">SATICI:</h3>
              <p className="text-sm"><strong>Ticari Unvan:</strong> 089 Bayern Enerji Sistemleri Ltd. Sti.</p>
              <p className="text-sm"><strong>Adres:</strong> Sekerhane, Halimaga Cd. Lale Tokus Plaza No 1, 07450 Alanya/Antalya, Turkiye</p>
              <p className="text-sm"><strong>Telefon:</strong> +90 507 192 2036</p>
              <p className="text-sm"><strong>E-posta:</strong> info@089bayern.com</p>
              <p className="text-sm"><strong>Ticaret Sicil No:</strong> [Kayit sonrasi guncellenecektir]</p>
              <p className="text-sm"><strong>MERSIS No:</strong> [Kayit sonrasi guncellenecektir]</p>
              <p className="text-sm"><strong>Vergi Dairesi / No:</strong> [Kayit sonrasi guncellenecektir]</p>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg mt-4 space-y-2">
              <h3 className="font-medium">ALICI:</h3>
              <p className="text-sm">Siparis formunda belirtilen kisi/kurumdur.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Madde 2 - Konu</h2>
            <p className="text-muted-foreground leading-relaxed">
              Isbu sozlesmenin konusu, ALICI'nin SATICI'ya ait www.089bayern.com internet sitesinden 
              elektronik ortamda siparisini verdigi asagida nitelikleri ve satis fiyati belirtilen 
              urun/hizmetin satisi ve teslimi ile ilgili olarak 6502 sayili Tuketicinin Korunmasi 
              Hakkinda Kanun ve Mesafeli Sozlesmeler Yonetmeligi hukumleri geregi taraflarin 
              hak ve yukumluluklerinin belirlenmesidir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Madde 3 - Sozlesme Konusu Urun/Hizmet Bilgileri</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Sunulan urun ve hizmetlerimiz:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Gunes paneli sistemleri kurulumu ve satisi</li>
              <li>Isi pompasi sistemleri kurulumu ve satisi (Vaillant yetkili)</li>
              <li>Klima sistemleri kurulumu ve satisi (Samsung yetkili)</li>
              <li>Enerji depolama (batarya) sistemleri (BYD)</li>
              <li>Enerji verimliligi danismanligi</li>
              <li>Bakim ve servis hizmetleri</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Urunun/hizmetin turu, miktari, marka/modeli, rengi, adedi ve satis fiyati 
              siparis onayinda ve faturada belirtilmektedir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Madde 4 - Genel Hukumler</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>ALICI, sozlesme konusu urun/hizmetin temel nitelikleri, satis fiyati ve odeme sekli ile teslimata iliskin on bilgileri okuyup bilgi sahibi oldugunu ve elektronik ortamda gerekli teyidi verdiklerini beyan eder.</li>
              <li>ALICI, bu sozlesmeyi elektronik ortamda teyit etmekle, mesafeli sozlesmeler ile ilgili yasal duzenleme ve yonetmeliklere uygun on bilgilendirme formunu temin ettigini kabul eder.</li>
              <li>Sozlesme konusu urun/hizmet, yasal 30 gunluk sure icinde ALICI'ya teslim edilir.</li>
              <li>Urun/hizmet bedeli, odeme sekline gore ALICI'nin tercih ettigi odeme yontemi ile tahsil edilir.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Madde 5 - Cayma Hakki</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              ALICI, sozlesme konusu urunun kendisine veya gosterdigi adresteki kisiye tesliminden 
              itibaren 14 (ondort) gun icinde cayma hakkina sahiptir.
            </p>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 p-4 rounded-lg">
              <h3 className="font-medium text-amber-800 dark:text-amber-200 mb-2">Cayma Hakki Istisnaları:</h3>
              <ul className="list-disc list-inside space-y-2 text-amber-700 dark:text-amber-300 text-sm">
                <li>Alicinin istekleri veya acikca kisisel ihtiyaclari dogrultusunda hazirlanan, niteligi itibariyle geri gonderilmeye elverissiz urunler</li>
                <li>Tesliminden sonra ambalaj, bant, muhur, paket gibi koruyucu unsurlari acilmis urunler</li>
                <li>Kurulum hizmeti baslamis veya tamamlanmis sistemler</li>
                <li>Ozel siparis uzerine uretilen veya temin edilen urunler</li>
              </ul>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Cayma hakkinin kullanimi icin 14 gunluk sure icinde SATICI'ya yazili bildirimde bulunulmasi 
              ve urunun Madde 7'de belirtilen hukumler cercevesinde kullanilmamis olmasi sarttir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Madde 6 - Cayma Hakki Kullaniminda Usul</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Cayma hakkinin kullanilmasi halinde:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>ALICI, cayma karari hakkinda SATICI'yi info@089bayern.com adresine e-posta gondererek veya +90 507 192 2036 numarasini arayarak bilgilendirir.</li>
              <li>Cayma bildiriminin SATICI'ya ulasmasi tarihinden itibaren 14 gun icinde urun iade edilir.</li>
              <li>Urun, SATICI tarafindan teslim alinmasindan itibaren 14 gun icinde odeme iade edilir.</li>
              <li>Iade edilen urunun kargo ucreti ALICI tarafindan karsilanir.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Madde 7 - Odeme ve Teslimat</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Urun/hizmet bedeli, siparis aninda belirtilen fiyat uzerinden tahsil edilir.</li>
              <li>Odeme yontemleri: Nakit, banka havalesi/EFT, kredi karti</li>
              <li>Taksitli odeme secenekleri mevcuttur.</li>
              <li>Teslimat suresi proje bazinda belirlenir ve sozlesmede belirtilir.</li>
              <li>Kurulum gerektiren sistemlerde, kurulum tarihi karsilikli mutabakatla belirlenir.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Madde 8 - Garanti Kosullari</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Gunes Panelleri:</strong> 25 yil performans garantisi</li>
              <li><strong>Vaillant Isi Pompasi:</strong> 10 yil uretici garantisi</li>
              <li><strong>Samsung Klima:</strong> 5 yil uretici garantisi</li>
              <li><strong>BYD Batarya:</strong> 10 yil uretici garantisi</li>
              <li><strong>Iscilik:</strong> 2 yil kurulum garantisi</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Madde 9 - Yetkili Mahkeme</h2>
            <p className="text-muted-foreground leading-relaxed">
              Isbu sozlesmeden dogan uyusmazliklarda Tuketici Hakem Heyetleri ve Tuketici Mahkemeleri 
              yetkilidir. Uyusmazlik halinde Antalya Tuketici Hakem Heyetleri ve Tuketici Mahkemeleri 
              yetkili olacaktir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Madde 10 - Yururluk</h2>
            <p className="text-muted-foreground leading-relaxed">
              ALICI, isbu sozlesmenin tum maddelerini okumus, anlamis ve kabul etmis sayilir. 
              Bu sozlesme, ALICI tarafindan elektronik ortamda onaylandigi tarihte yururluge girer.
            </p>
          </section>

          <section className="bg-muted/50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Iletisim</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sorulariniz ve cayma hakki kullaniminiz icin:
            </p>
            <p className="text-sm"><strong>Telefon:</strong> +90 507 192 2036</p>
            <p className="text-sm"><strong>E-posta:</strong> info@089bayern.com</p>
            <p className="text-sm"><strong>WhatsApp:</strong> +90 507 192 2036</p>
          </section>
        </div>
      </div>
    </div>
  );
}
