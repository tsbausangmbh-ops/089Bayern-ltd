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