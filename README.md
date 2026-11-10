# HanOuti Smart

HanOuti Smart is a complete, production-ready, multi-tenant web application tailored for retail management, offering both POS and E-commerce capabilities.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (with RTL support for Arabic)
- **Database & Auth:** Supabase (PostgreSQL, Row Level Security)
- **PWA:** `next-pwa` for offline capabilities

## Key Features
- **Multi-tenancy:** Isolated data per shop using Supabase RLS.
- **Inventory & Barcodes:** Manage products, variants, and design custom barcodes.
- **POS & Orders:** Fast cashier interface and complete order lifecycle management.
- **E-commerce:** Public storefronts for each tenant.
- **Shipping:** Integration for shipping rate management.

## Setup Instructions
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Configure your `.env.local` with Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   ```
4. Run `npm run dev` to start the application.

## Architecture Breakdown
- `src/app`: Contains all Next.js routes (Auth, Platform Admin, Dashboard, Store).
- `src/middleware.ts`: Handles route protection and multi-tenant logic.
- `src/lib/supabase`: Supabase client initialization for server and browser.
- `src/types/index.ts`: TypeScript interfaces representing the database schema.
- `src/components`: Reusable UI, POS, Barcode, and Storefront components.

Please see `help.txt` for more detailed usage instructions.
