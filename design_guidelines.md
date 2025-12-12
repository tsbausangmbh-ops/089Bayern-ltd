# Design Guidelines: 089 Bayern Lead Generation Funnel

## Design Approach
**Reference-Based**: Drawing from Tesla's clean energy aesthetic, Stripe's conversion-focused clarity, and Airbnb's approachable professionalism. This approach balances technical credibility with emotional appeal for high-value B2B lead generation.

## Core Design Principles
1. **Trust & Credibility**: German quality positioning requires premium, polished aesthetic
2. **Progressive Disclosure**: Multi-step funnel guides users without overwhelming
3. **Energy-Forward**: Visual language emphasizes sustainability, efficiency, and innovation
4. **Conversion-Optimized**: Every section drives toward lead capture

---

## Typography

**Primary Font**: Inter (Google Fonts)
- Headers: 600-700 weight, crisp and modern
- Body: 400-500 weight, excellent Turkish character support

**Scale**:
- Hero Headline: text-5xl md:text-6xl lg:text-7xl (bold, impactful)
- Section Headers: text-3xl md:text-4xl (semi-bold)
- Subsections: text-xl md:text-2xl (medium)
- Body Text: text-base md:text-lg (regular)
- Small Print: text-sm (light disclaimers, form hints)

---

## Layout System

**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-16 md:py-24 lg:py-32
- Component gaps: gap-8 md:gap-12
- Card padding: p-6 md:p-8
- Form spacing: space-y-6

**Container Strategy**:
- Full-width sections with inner max-w-7xl mx-auto px-6 md:px-8
- Form containers: max-w-2xl for single-column, max-w-5xl for multi-step
- Text content: max-w-3xl for readability

**Grid Patterns**:
- Features: grid-cols-1 md:grid-cols-2 lg:grid-cols-4 (4-in-1 system)
- Benefits: grid-cols-1 md:grid-cols-3
- Team: grid-cols-1 md:grid-cols-3
- Calculator/Form: Single column on mobile, strategic 2-column on desktop

---

## Component Library

### Navigation
- Sticky header with transparent-to-solid transition on scroll
- Logo left, CTA button right ("Ücretsiz Danışmanlık" - Free Consultation)
- Mobile: Hamburger menu with full-screen overlay
- Icons: Heroicons (outline style)

### Hero Section
- Full-viewport height (h-screen) with stunning energy-themed background image
- Image: Modern home with solar panels at golden hour, architectural photography
- Centered content with backdrop-blur-sm bg-white/10 container
- Headline emphasizing "4'ü 1 Arada" (4-in-1) value proposition
- Subheadline highlighting cost savings (70% reduction)
- Dual CTAs: Primary "Hesaplama Başlat" (Start Calculator), Secondary "Daha Fazla Bilgi" (Learn More)
- Trust indicators below CTAs: "✓ Alman Kalitesi ✓ 10+ Yıl Garanti ✓ Türkiye'ye Özel"

### Product Showcase (4-in-1 System)
- 4-column grid on desktop showcasing each system component
- Cards with large icons (heating, cooling, solar, battery)
- Icon style: Outlined, modern, energy-themed from Heroicons
- Hover effect: subtle lift (shadow-lg transition)
- Each card: Icon, title, 3-4 bullet benefits

### Interactive Savings Calculator
- Multi-step wizard interface (3-4 steps)
- Progress indicator at top (step dots or progress bar)
- Step 1: Property type (Ev/Villa, Apartman, İşyeri) - large icon buttons
- Step 2: Current energy costs (slider inputs with live preview)
- Step 3: Location/Size (dropdown + number input)
- Results page: Animated savings visualization, estimated ROI, next steps CTA
- Form styling: Large touch-friendly inputs (h-12), rounded-lg borders

### Lead Capture Forms
- Clean, spacious layout with single-column flow
- Input fields: rounded-lg, border-2, focus:ring-2 states
- Labels above inputs (text-sm font-medium)
- Required field indicators (asterisk)
- Privacy assurance text below form
- Large CTA button: w-full py-4 rounded-lg text-lg font-semibold

### Benefits Section
- Alternating content blocks (text left/image right, then reverse)
- Large feature images: Professional installation photos, happy customers, system diagrams
- Checkmark lists with Heroicons check-circle icons
- Pull quotes highlighting key benefits in larger text-xl font-medium

### Social Proof
- Logo carousel: German manufacturer logos (Vaillant, Samsung, etc.)
- Customer testimonials (if available) - card-based layout
- Trust badges: German quality certification, warranty seals

### Team Section
- 3-column grid with team photos
- Each card: Photo (rounded-full or rounded-lg), name, title, languages, contact buttons
- Contact info visible with click-to-call/email functionality

### Footer
- Comprehensive 4-column layout on desktop, stacked on mobile
- Column 1: Company info + logo
- Column 2: Quick links (Hakkımızda, Ürünler, İletişim)
- Column 3: Contact information with icons
- Column 4: Newsletter signup (optional lead magnet)
- Bottom bar: Copyright, privacy policy, social media icons

---

## Images

**Hero Image**: 
Large, high-quality architectural photograph of a modern Turkish villa with visible solar panel installation, shot during golden hour. Image should convey luxury, sustainability, and Mediterranean climate. Use as full-viewport background with subtle overlay.

**Section Images**:
1. Heat pump installation (professional, clean)
2. Happy family in comfortable home interior
3. Solar panel array on roof (bright, optimistic)
4. Energy storage system/battery (high-tech, German engineering)
5. Team member headshots (professional, approachable)

**Image Treatment**: 
- All images: High resolution, professionally shot or premium stock
- Hero: Subtle dark overlay (bg-gradient-to-b from-transparent to-black/40) for text contrast
- Section images: rounded-xl, shadow-2xl for depth

---

## Animations

Use sparingly for polish:
- Scroll-triggered fade-in for sections (opacity + translateY)
- Calculator: Smooth step transitions
- Hover states: scale-105 transform on cards
- No complex animations - keep performance optimal

---

## Form UX Specifics

**Validation**:
- Inline validation on blur
- Success: green check icon, error: red warning with message
- Disabled submit until valid

**Multi-Step Flow**:
- Persistent progress bar
- Back/Next navigation clearly visible
- Save progress indication
- Mobile-optimized tap targets (min h-12)

**Privacy & Trust**:
- GDPR-compliant consent checkbox
- "Verileriniz güvende" (Your data is safe) messaging
- SSL badge display

---

This design creates a professional, conversion-optimized funnel that positions 089 Bayern as a premium German quality provider while making the complex 4-in-1 system understandable and desirable to Turkish homeowners.