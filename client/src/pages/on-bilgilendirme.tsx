import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function OnBilgilendirme() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back-home">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Ana Sayfa
          </Button>
        </Link>

        <h1 className="text-3xl font-bold mb-4">On Bilgilendirme Formu</h1>
        <p className="text-sm text-muted-foreground mb-8">
          6502 sayili Tuketicinin Korunmasi Hakkinda Kanun ve Mesafeli Sozlesmeler Yonetmeligi'nin 
          5. maddesi uyarinca tuketicinin bilgilendirilmesi amacli on bilgilendirme formu
        </p>
        <p className="text-sm text-muted-foreground mb-8">Son guncelleme: {new Date().toLocaleDateString('tr-TR')}</p>

        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Satici Bilgileri</h2>
            <div className="bg-muted/50 p-4 rounded-lg space-y-2">
              <p className="text-sm"><strong>Ticari Unvan:</strong> 089 Bayern Enerji Sistemleri Ltd. Sti.</p>
              <p className="text-sm"><strong>Adres:</strong> Antalya Merkez, 07000 Antalya, Turkiye</p>
              <p className="text-sm"><strong>Telefon:</strong> +90 507 192 2036</p>
              <p className="text-sm"><strong>E-posta:</strong> info@089bayern.tr</p>
              <p className="text-sm"><strong>Web Sitesi:</strong> www.089bayern.tr</p>
              <p className="text-sm"><strong>Ticaret Sicil No:</strong> [Kayit sonrasi guncellenecektir]</p>
              <p className="text-sm"><strong>MERSIS No:</strong> [Kayit sonrasi guncellenecektir]</p>
              <p className="text-sm"><strong>Vergi Dairesi / No:</strong> [Kayit sonrasi guncellenecektir]</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">2. Urun/Hizmet Bilgileri</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Sirketimiz asagidaki enerji sistemleri urun ve hizmetlerini sunmaktadir:
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Gunes Enerji Sistemleri</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Gunes paneli kurulumu</li>
                  <li>Inverter sistemleri</li>
                  <li>Montaj ve kablolama</li>
                  <li>Elektrik baglantisi</li>
                </ul>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Isi Pompasi Sistemleri</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Vaillant yetkili satisi</li>
                  <li>Profesyonel kurulum</li>
                  <li>Devreye alma</li>
                  <li>Garanti kapsaminda servis</li>
                </ul>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Klima Sistemleri</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Samsung yetkili satisi</li>
                  <li>Ev ve ticari klimalar</li>
                  <li>VRF sistemleri</li>
                  <li>Bakim ve onarim</li>
                </ul>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Enerji Depolama</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>BYD batarya sistemleri</li>
                  <li>Ev tipi depolama</li>
                  <li>Ticari depolama</li>
                  <li>Hibrit sistemler</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">3. Satis Fiyati ve Odeme Kosullari</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Tum fiyatlar Turk Lirasi (TL) cinsindendir</li>
              <li>KDV dahil/haric durumu teklifte acikca belirtilir</li>
              <li>Fiyatlar ucretsiz kesif sonrasinda belirlenir</li>
              <li>Teklifler 30 gun sureyle gecerlidir</li>
            </ul>
            <h3 className="font-medium mt-4 mb-2">Odeme Yontemleri:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Nakit odeme</li>
              <li>Banka havalesi / EFT</li>
              <li>Kredi karti (tek cekim veya taksitli)</li>
              <li>Proje bazli taksitli odeme planlari</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">4. Teslimat Bilgileri</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Teslimat suresi proje kapsamina gore degisir</li>
              <li>Kurulum gerektiren sistemlerde tarih karsilikli mutabakatla belirlenir</li>
              <li>Hizmet bolgemiz: Antalya, Mugla, Aydin, Denizli ve cevresi</li>
              <li>Teslimat ucreti proje teklifine dahildir</li>
              <li>Yasal sure olarak en gec 30 gun icinde teslimat yapilir</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5. Cayma Hakki</h2>
            <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg mb-4">
              <p className="font-medium text-primary mb-2">14 Gun Cayma Hakki</p>
              <p className="text-sm text-muted-foreground">
                6502 sayili Kanun geregi, sozlesme imzalandiktan sonra 14 gun icinde 
                herhangi bir gerekce gostermeksizin cayma hakkiniz bulunmaktadir.
              </p>
            </div>
            <h3 className="font-medium mb-2">Cayma Hakki Istisnalari:</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Kisisel ihtiyaclara gore ozel olarak hazirlanan urunler</li>
              <li>Kurulum hizmeti baslatilmis sistemler</li>
              <li>Ambalaji acilmis, kullanilmis urunler</li>
              <li>Ozel siparis uzerine temin edilen urunler</li>
            </ul>
            <h3 className="font-medium mt-4 mb-2">Cayma Bildirimi:</h3>
            <p className="text-muted-foreground leading-relaxed">
              Cayma hakkinizi kullanmak icin 14 gun icinde info@089bayern.tr adresine 
              e-posta gondererek veya +90 507 192 2036 numarasini arayarak bildirimde bulunabilirsiniz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">6. Garanti Kosullari</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="border border-border p-3 text-left">Urun</th>
                    <th className="border border-border p-3 text-left">Garanti Suresi</th>
                    <th className="border border-border p-3 text-left">Garanti Turu</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3">Gunes Panelleri</td>
                    <td className="border border-border p-3">25 yil</td>
                    <td className="border border-border p-3">Performans garantisi</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-border p-3">Vaillant Isi Pompasi</td>
                    <td className="border border-border p-3">10 yil</td>
                    <td className="border border-border p-3">Uretici garantisi</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Samsung Klima</td>
                    <td className="border border-border p-3">5 yil</td>
                    <td className="border border-border p-3">Uretici garantisi</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-border p-3">BYD Batarya</td>
                    <td className="border border-border p-3">10 yil</td>
                    <td className="border border-border p-3">Uretici garantisi</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Iscilik/Kurulum</td>
                    <td className="border border-border p-3">2 yil</td>
                    <td className="border border-border p-3">089 Bayern garantisi</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">7. Sikayet ve Uyusmazlik</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Sikayet ve uyusmazlik halinde asagidaki mercilere basvurabilirsiniz:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Tuketici Hakem Heyetleri (belirli tutarlarin altindaki uyusmazliklar icin)</li>
              <li>Tuketici Mahkemeleri</li>
              <li>Turkiye Tuketici Sikayet Hatti: 175</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Yetkili mahkeme ve hakem heyeti: Antalya
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">8. Kisisel Verilerin Korunmasi</h2>
            <p className="text-muted-foreground leading-relaxed">
              Kisisel verileriniz 6698 sayili Kisisel Verilerin Korunmasi Kanunu (KVKK) kapsaminda 
              korunmaktadir. Detayli bilgi icin{" "}
              <Link href="/kvkk" className="text-primary hover:underline">
                KVKK Aydinlatma Metni
              </Link>{" "}
              sayfamizi inceleyebilirsiniz.
            </p>
          </section>

          <section className="bg-muted/50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Iletisim Bilgileri</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-medium mb-2">Genel Iletisim</h3>
                <p className="text-sm text-muted-foreground">Telefon: +90 507 192 2036</p>
                <p className="text-sm text-muted-foreground">E-posta: info@089bayern.tr</p>
                <p className="text-sm text-muted-foreground">WhatsApp: +90 507 192 2036</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Calisma Saatleri</h3>
                <p className="text-sm text-muted-foreground">Pazartesi - Cuma: 09:00 - 18:00</p>
                <p className="text-sm text-muted-foreground">Cumartesi: 09:00 - 14:00</p>
                <p className="text-sm text-muted-foreground">Pazar: Kapali</p>
              </div>
            </div>
          </section>

          <section className="border-t pt-6">
            <p className="text-sm text-muted-foreground text-center">
              Bu on bilgilendirme formu, 6502 sayili Tuketicinin Korunmasi Hakkinda Kanun ve 
              Mesafeli Sozlesmeler Yonetmeligi kapsaminda hazirlanmistir.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
