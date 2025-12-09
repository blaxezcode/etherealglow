import type React from "react";
import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Lato } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { WhatsAppButton } from "@/components/whatsapp-button";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Etherealglow – By Ishika | Professional  Beauty Salon",
  description:
    "Experience Professional  beauty treatments at Etherealglow. Premium nail art, skincare, hair styling, and spa services in an elegant sanctuary.",
  generator: "v0.app",
  keywords:
    "Professional  beauty salon, nail art, skincare, hair styling, spa treatments, premium beauty services",
  authors: [{ name: "Ishika" }],
  openGraph: {
    title: "Etherealglow – By Ishika | Professional  Beauty Salon",
    description:
      "Experience Professional  beauty treatments at Etherealglow. Premium nail art, skincare, hair styling, and spa services.",
    type: "website",
  },
};

import { SecurityProvider } from "@/components/security-provider";
import { cn } from "@/lib/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          lato.variable,
          cinzel.variable,
          cormorant.variable,
          "font-sans"
        )}
      >
        <SecurityProvider />
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
