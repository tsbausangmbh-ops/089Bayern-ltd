# Design Guidelines: 089 Bayern Lead Generation Funnel (Mediterranean Edition)

## Design Approach
**Reference-Based**: Drawing from Tesla's clean energy aesthetic, Stripe's conversion-focused clarity, and Airbnb's Mediterranean property listings. This creates premium positioning that balances German engineering credibility with warm, approachable Mediterranean lifestyle appeal for high-value B2B lead generation.

## Core Design Principles
1. **Mediterranean Warmth**: Visual language evokes coastal living, sunshine, outdoor spaces, family gatherings
2. **German Trust**: Premium materials, precise spacing, quality indicators throughout
3. **Progressive Disclosure**: Multi-step funnel guides without overwhelming
4. **Conversion-Optimized**: Every element drives toward lead capture

---

## Typography

**Primary Font**: Inter (Google Fonts) - excellent Turkish character support

**Hierarchy**:
- Hero Headline: text-6xl md:text-7xl lg:text-8xl font-bold
- Section Headers: text-4xl md:text-5xl font-semibold  
- Subsections: text-2xl md:text-3xl font-medium
- Body Text: text-lg md:text-xl font-normal
- Small Print/Labels: text-sm font-normal

---

## Layout System

**Spacing Primitives**: Tailwind units of 4, 8, 12, 16, 24
- Section padding: py-20 md:py-32
- Component gaps: gap-8 md:gap-12
- Card padding: p-8 md:p-12
- Form spacing: space-y-6

**Container Strategy**:
- Full-width sections: max-w-7xl mx-auto px-6 md:px-8
- Form containers: max-w-2xl single-column flow
- Text content: max-w-3xl for optimal readability

---

## Component Library

### Navigation
Sticky header with subtle backdrop-blur transition on scroll. Logo left, prominent "Ücretsiz Danışmanlık" (Free Consultation) CTA button right. Mobile: hamburger menu with full-screen slide-out. Icons: Heroicons outline style.

### Hero Section  
Full-viewport (h-screen) stunning background image of modern Mediterranean villa with solar panels, shot during golden hour - white stucco walls, terracotta roof tiles, bright blue sky, visible solar installation, lush greenery. Centered content overlay with backdrop-blur-md glass effect container.

Content structure:
- Trust badge row: "Alman Mühendisliği | 10+ Yıl Garanti | Akdeniz'e Özel Çözümler"
- Headline: "Evinizi Enerji Bağımsızlığına Kavuşturun" with "4'ü 1 Arada Sistem" emphasis
- Subheadline: "Isıtma, Soğutma, Güneş Enerjisi ve Enerji Depolama - Tek Çözümde %70 Tasarruf"
- Dual CTAs with blurred backgrounds: Primary "Ücretsiz Hesaplama Yap", Secondary "Sistemi Keşfet"
- Social proof ticker: "500+ Akdeniz Villası'nda Güvenle Kullanılıyor"

### 4-in-1 System Showcase
4-column grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-4) with large icon cards. Each system component (Isıtma Pompası, Klima, Güneş Paneli, Enerji Depolama) displayed with:
- Large Heroicons icon (64x64 size)
- Component title (text-xl font-semibold)
- 4 key benefits as checkmark list
- Hover: subtle shadow-xl lift effect

### Interactive Savings Calculator
Multi-step wizard (4 steps) with visual progress dots at top:

**Step 1 - Property Type**: 3 large icon cards (Müstakil Villa, Apart, İşyeri) as selection buttons (h-40, touch-friendly)

**Step 2 - Current Energy Costs**: Range sliders with live preview showing monthly/annual amounts, visual cost breakdown chart

**Step 3 - Location & Property Size**: Dropdown for coastal region (Antalya, Muğla, İzmir, Diğer) + number inputs for m²

**Step 4 - Results**: Animated savings visualization with:
- Large savings number (text-5xl font-bold)
- ROI timeline graphic  
- Environmental impact (CO₂ reduction, tree equivalent)
- Next step CTA: "Uzmanımızla Görüşün"

Form styling: Extra large inputs (h-14), rounded-xl borders, generous padding

### Benefits Deep-Dive
Alternating content blocks (6 sections total):

1. Energy Independence: Text left, large image right (villa with rooftop solar at sunset)
2. Year-Round Comfort: Image left (family enjoying air-conditioned living room), text right
3. Investment Value: Text left, infographic right (property value increase chart)
4. German Quality: Image left (close-up German components), text right with certification badges
5. Mediterranean Optimized: Text left, image right (coastal installation performance data)
6. Family Peace of Mind: Image left (multi-generation family gathering), text right

Each section: Large hero image (rounded-2xl shadow-2xl), checkmark benefit lists, pull quotes in text-2xl font-medium

### Social Proof Section
Three-part trust builder:

**Manufacturer Logos**: Scrolling carousel with premium German brands (Vaillant, Viessmann, Samsung, Bosch)

**Customer Testimonials**: 3-column grid with:
- Customer photo (rounded-full)
- Quote (text-lg italic)
- Name, location, installation year
- Star rating visualization

**Installation Gallery**: Masonry grid (3-4 columns) showcasing completed Mediterranean villa installations

### Expert Team Section
3-column grid with team member cards:
- Professional headshot (rounded-xl, large format)
- Name + title (Enerji Danışmanı)
- Languages spoken (Türkçe, Almanca icons)
- Direct contact buttons: "Ara" and "WhatsApp"
- Expertise tags below

### Lead Capture Form
Prominent section with attention-grabbing header: "Ücretsiz Ön Hesaplama ve Danışmanlık"

Single-column form (max-w-2xl) with:
- Full name, phone, email (all required)
- Property location dropdown
- Property type radio buttons
- Approximate budget range (optional field for qualification)
- KVKK consent checkbox with clear privacy text
- Large submit: "Uzman Görüşmesi Talep Et" (w-full py-5 text-xl)

Reassurance text below: "Bilgileriniz SSL ile korunur. Satış baskısı yapmıyoruz - sadece bilgilendirme."

### Footer
4-column desktop layout:
- **Column 1**: Logo, company mission statement, German quality badge
- **Column 2**: Hızlı Linkler (Anasayfa, Ürünler, Referanslar, İletişim)
- **Column 3**: İletişim (Phone with click-to-call, Email, WhatsApp, Office address in Antalya)
- **Column 4**: Bizi Takip Edin (Social media icons, newsletter signup with "Enerji Tasarruf İpuçları" lead magnet)

Bottom bar: Copyright, KVKK Privacy Policy link, social icons

---

## Images

**Required Images** (all professional/premium stock):

1. **Hero Background**: Luxury Mediterranean villa exterior with solar panels, golden hour lighting, white walls, terracotta roof, clear blue sky, 4K resolution
2. **Property with Solar**: Modern coastal home showcasing full rooftop installation
3. **Family Comfort**: Multi-generation Turkish family relaxing in bright, comfortable interior
4. **Installation Quality**: Close-up of German-manufactured heat pump/components with visible branding
5. **Coastal Performance**: Solar panels against bright Mediterranean sun and sea backdrop
6. **Happy Customers**: Professional photo of satisfied homeowners outside their villa
7. **Team Headshots**: 3 professional consultant photos (diverse, approachable)
8. **Installation Gallery**: 6-8 photos of completed projects in various Mediterranean settings

All images: High-resolution, professionally shot or premium stock, rounded-xl treatment with shadow-2xl depth.

---

## Animations

Minimal and purposeful:
- Scroll-triggered section fade-ins (opacity + translateY 20px)
- Calculator step transitions (slide horizontal)
- Savings counter animation on results page (count-up effect)
- Card hover: scale-105 transform
- No parallax or complex effects

---

## Form & Conversion UX

**Validation**: Real-time inline validation, green checkmark for valid, red warning with Turkish error messages

**Mobile Optimization**: All touch targets minimum h-12, extra padding on form inputs (h-14), thumb-friendly button placement

**Trust Signals**: SSL badge visible, "Verileriniz Güvende" messaging, no spam commitment, KVKK compliance badge

**Progress Saving**: Calculator shows "İlerlemeniz Kaydedildi" confirmation between steps

---

This Mediterranean-focused design positions 089 Bayern as the premium choice for coastal Turkish homeowners seeking energy independence through German engineering quality, while creating an emotional connection to Mediterranean lifestyle values.