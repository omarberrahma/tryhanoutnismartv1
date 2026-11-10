# HanOuti Smart & Pro 🏪

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![Supabase](https://img.shields.io/badge/Supabase-Database%20%26%20Auth-3ECF8E)](https://supabase.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)](https://tailwindcss.com/)

**HanOuti Smart** is a complete, production-ready, multi-tenant Software as a Service (SaaS) platform tailored for retail store management. It seamlessly combines a robust Point of Sale (POS) system, advanced inventory management, and public e-commerce storefronts.

It is expertly customized for the Algerian market, featuring full Arabic (Right-to-Left) support out of the box, alongside French and English localization.

---

## 🏗 Architecture & Tech Stack

HanOuti Smart utilizes a modern, edge-ready tech stack designed for speed, security, and offline reliability:

*   **Frontend Framework:** Next.js 14+ (App Router)
*   **Language:** TypeScript for end-to-end type safety
*   **Styling:** Tailwind CSS (configured for dynamic RTL/LTR layouts)
*   **Database & Backend:** Supabase (PostgreSQL)
*   **Security:** Supabase Row Level Security (RLS) ensuring strict multi-tenant data isolation
*   **Offline Capabilities:** Progressive Web App (PWA) configured via `next-pwa`

---

## ✨ Core Features

1.  **Multi-Tenancy:** A single deployment hosts multiple distinct stores. Supabase RLS policies guarantee that store data (products, orders, customers) is completely isolated per tenant.
2.  **Inventory & Barcoding:**
    *   Manage products, variants, and stock counts.
    *   Built-in custom barcode generator supporting both Thermal (receipt) and standard A4 printers.
3.  **High-Speed POS:** A blazing-fast cashier interface built to handle barcode scanners and rapid checkouts, backed by offline PWA capabilities.
4.  **E-commerce Storefronts:** Automatically generated, SEO-optimized public storefronts (`/store/[slug]`) for every tenant to sell online.
5.  **Algerian Logistics Integration:** Pre-configured shipping filters for top local providers: **Yalidine Express**, **ZR Express**, and **Maystro Delivery**.

---

## 🚀 Local Setup & Installation

Follow these steps to run HanOuti Smart on your local machine.

### 1. Clone & Install
```bash
git clone https://github.com/omarberrahma/tryhanoutnismartv1.git
cd tryhanoutnismartv1
npm install
```

### 2. Environment Configuration
Create a `.env.local` file in the root directory based on the provided `.env.example`:

```env
# .env.local
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```
*(Note: You will need a Supabase project set up with the corresponding database schema and RLS policies applied).*

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Vercel Deployment

Deploying HanOuti Smart to Vercel is straightforward:
1. Push your code to a GitHub repository.
2. Import the project into Vercel.
3. In the Vercel project settings, add the Environment Variables (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`).
4. Click **Deploy**. Vercel will automatically detect Next.js and configure the build settings.

---

## 📘 Quick Usage Guide

### For Store Owners (Admin)
*   Navigate to `/platform` to manage your SaaS subscription and global store settings.
*   Access `/dashboard` to view analytics, add staff, and manage overall inventory.

### For Warehouse Keepers
*   Use `/dashboard/inventory` to register stock moves (in/out) and conduct physical stock counts.
*   Use `/dashboard/barcodes` to generate and print labels for new stock arriving at the warehouse.

### For Cashiers
*   Log in and go directly to `/dashboard/pos`.
*   Scan products or search manually. Ensure the connection is stable, though the PWA handles brief network drops gracefully.

---
*For a deeper dive into technical specifics and database architecture, please refer to the `help.txt` file included in this repository.*
