import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function KVKK() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back-home">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Ana Sayfa
          </Button>
        </Link>

        <h1 className="text-3xl font-bold mb-8">KVKK Aydınlatma Metni</h1>
        <p className="text-sm text-muted-foreground mb-8">Son güncelleme: {new Date().toLocaleDateString('tr-TR')}</p>

        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Veri Sorumlusu</h2>
            <p className="text-muted-foreground leading-relaxed">
              6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında, kişisel verileriniz veri sorumlusu sıfatıyla <strong>089 Bayern Enerji Sistemleri Ltd. Şti.</strong> tarafından aşağıda açıklanan kapsamda işlenebilecektir.
            </p>
            <div className="bg-muted/50 p-4 rounded-lg mt-4">
              <p className="text-sm"><strong>Firma:</strong> 089 Bayern Enerji Sistemleri Ltd. Şti.</p>
              <p className="text-sm"><strong>Adres:</strong> Sekerhane, Halimaga Cd. Lale Tokus Plaza No 1, 07450 Alanya/Antalya, Turkiye</p>
              <p className="text-sm"><strong>Telefon:</strong> +90 507 192 2036</p>
              <p className="text-sm"><strong>E-posta:</strong> info@089bayern.com</p>
              <p className="text-sm"><strong>KVKK Sorumlusu:</strong> kvkk@089bayern.com</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">2. İşlenen Kişisel Veriler</h2>
            <p className="text-muted-foreground mb-3">Şirketimiz tarafından aşağıdaki kişisel veriler işlenmektedir:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong>Kimlik Bilgileri:</strong> Ad, soyad</li>
              <li><strong>İletişim Bilgileri:</strong> Telefon numarası, e-posta adresi, adres</li>
              <li><strong>Talep Bilgileri:</strong> Hizmet talepleri, mülk bilgileri, enerji tüketim verileri</li>
              <li><strong>İşlem Güvenliği:</strong> IP adresi, çerez verileri, oturum bilgileri</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">3. Kişisel Verilerin İşlenme Amaçları</h2>
            <p className="text-muted-foreground mb-3">Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Hizmet taleplerinin değerlendirilmesi ve yanıtlanması</li>
              <li>Teklif hazırlanması ve sunulması</li>
              <li>Sözleşme süreçlerinin yürütülmesi</li>
              <li>Müşteri ilişkileri yönetimi</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi</li>
              <li>İletişim faaliyetlerinin yürütülmesi</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">4. Kişisel Verilerin Aktarılması</h2>
            <p className="text-muted-foreground leading-relaxed">
              Kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda, iş ortaklarımıza, tedarikçilerimize, kanunen yetkili kamu kurumlarına ve özel kişilere KVKK'nın 8. ve 9. maddelerinde belirtilen şartlara uygun olarak aktarılabilecektir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi</h2>
            <p className="text-muted-foreground leading-relaxed">
              Kişisel verileriniz; web sitemiz, telefon, e-posta, WhatsApp ve yüz yüze görüşmeler aracılığıyla otomatik veya otomatik olmayan yöntemlerle toplanmaktadır. Bu veriler KVKK'nın 5. maddesinde belirtilen hukuki sebeplere dayanarak işlenmektedir.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">6. Kişisel Veri Sahibinin Hakları</h2>
            <p className="text-muted-foreground mb-3">KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
              <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme</li>
              <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
              <li>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme</li>
              <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme</li>
              <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">7. Başvuru Yöntemi</h2>
            <p className="text-muted-foreground leading-relaxed">
              Yukarıda belirtilen haklarınızı kullanmak için <strong>kvkk@089bayern.com</strong> adresine e-posta göndererek veya şirket adresimize yazılı başvuru yaparak bizimle iletişime geçebilirsiniz. Başvurularınız en geç 30 gün içinde yanıtlanacaktır.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">8. Veri Saklama Süresi</h2>
            <p className="text-muted-foreground leading-relaxed">
              Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca ve ilgili mevzuatta öngörülen zamanaşımı süreleri boyunca saklanmaktadır.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
