# 089 Bayern Lead Generation Funnel

## Overview

A lead generation landing page for 089 Bayern, a German-Turkish energy systems company targeting the Mediterranean region of Turkey. The application showcases solar panels, heat pumps, climate systems, and energy storage solutions. Built as a conversion-optimized funnel with Turkish language content targeting Antalya and surrounding coastal areas.

The site features a multi-step savings calculator that captures lead data, premium brand partnerships display, team information, and benefit-focused marketing sections.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style)
- **Build Tool**: Vite with custom plugins for Replit integration

The frontend follows a component-based architecture with sections organized as standalone components (HeroSection, FeaturesGrid, BenefitsSection, etc.) composed in a single Home page.

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ESM modules
- **API Pattern**: RESTful endpoints prefixed with `/api`
- **Development**: Vite dev server middleware for HMR

The backend uses a simple storage interface pattern that currently implements in-memory storage but is designed to be swapped for database-backed storage.

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Defined in `shared/schema.ts` with Zod integration via drizzle-zod
- **Migrations**: Managed via drizzle-kit with output to `./migrations`

Currently includes a basic users table schema. The storage layer uses an interface pattern allowing easy switching between MemStorage and database implementations.

### Build System
- **Client Build**: Vite outputs to `dist/public`
- **Server Build**: esbuild bundles server code to `dist/index.cjs`
- **Bundling Strategy**: Common dependencies bundled to reduce cold start times; others externalized

## External Dependencies

### Database
- PostgreSQL (configured via `DATABASE_URL` environment variable)
- Drizzle ORM for type-safe database operations
- connect-pg-simple for session storage compatibility

### UI Component Libraries
- shadcn/ui components with Radix UI primitives
- Tailwind CSS for styling
- Lucide React and react-icons for iconography

### Third-Party Services (Prepared)
The build configuration bundles support for:
- Stripe (payment processing)
- Nodemailer (email delivery)
- OpenAI / Google Generative AI (AI features)
- Multer (file uploads)

These are bundled but not actively implemented in the current codebase.

### Design System
- Custom CSS variables for theming (light mode focused)
- Inter font family for Turkish character support
- Mediterranean-inspired color palette with German trust aesthetics

### Pages
- Home (/) - Landing page with hero, features, team preview, calculator
- Systeme (/systeme) - 4-in-1 German System details
- Vorteile (/vorteile) - Benefits and advantages
- Rechner (/rechner) - Savings calculator with multi-step form
- Team (/team) - Company story, values, and contact information
- Über uns (/ueber-uns) - About page
- Legal pages: KVKK, Gizlilik, Cerez-Politikasi, Sartlar, Mesafeli-Satis, On-Bilgilendirme

All pages support 6 languages (de, tr, en, ru, uk, ar) with RTL support for Arabic.

### Zentrale Preissteuerung
- **Preisdatei**: `client/src/lib/pricing.ts` - ALLE Preise zentral verwaltet
- **Wechselkurs**: EUR/TL Kurs in pricing.ts (Dezember 2025: 49.50)
- **Preisformat**: Immer "ca." vor allen Preisen, "ohne Gewähr" Hinweis
- **4-in-1 Systeme**: Standard (6kWp €31.200), Medium (10kWp €41.600), Premium (12kWp €58.500)
- **Einzelkomponenten**: Solar, Vaillant Wärmepumpe, Samsung Klima, Batteriespeicher

Alle Komponenten nutzen die zentrale Preisdatei:
- System4in1Calculator.tsx
- SavingsCalculator.tsx (via useExchangeRate)
- ChatBot (server/routes.ts)

### AI Chatbot (Mustafa Sakar)
- Antwortet als echter türkischer Berater, NICHT als KI
- Beratungsablauf: Erst Fragen stellen, dann ca.-Preise nennen
- NLP-Techniken: Pacing, Leading, Rapport, Reframing
- Preise immer mit "ca." und "ohne Gewähr"