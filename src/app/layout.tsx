import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HanOuti Smart",
  description: "POS and E-commerce SaaS",
};

import { headers } from "next/headers";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language") || "";

  // Basic language detection, defaulting to 'ar' if not 'en' or 'fr'
  let locale = "ar";
  if (acceptLanguage.includes("en")) locale = "en";
  else if (acceptLanguage.includes("fr")) locale = "fr";

  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
