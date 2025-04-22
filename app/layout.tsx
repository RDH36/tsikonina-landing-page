import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter, Pacifico } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tsikonina.mg"),
  title: {
    default: "Tsikonina - L'Application de Cuisine Malgache Authentique",
    template: "%s | Tsikonina",
  },
  description:
    "Découvrez la richesse de la cuisine malgache avec Tsikonina. Recettes authentiques, techniques traditionnelles et histoire culinaire de Madagascar.",
  keywords: [
    "cuisine malgache",
    "recettes madagascar",
    "cuisine traditionnelle",
    "application cuisine",
    "romazava",
    "ravitoto",
    "cuisine malagasy",
    "application mobile",
    "traditions culinaires",
  ],
  authors: [{ name: "Tsikonina Team" }],
  creator: "Tsikonina",
  publisher: "Tsikonina",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://tsikonina.mg",
    title: "Tsikonina - L'Application de Cuisine Malgache Authentique",
    description:
      "Découvrez la richesse de la cuisine malgache avec Tsikonina. Recettes authentiques, techniques traditionnelles et histoire culinaire de Madagascar.",
    siteName: "Tsikonina",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tsikonina - Application de Cuisine Malgache",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tsikonina - L'Application de Cuisine Malgache Authentique",
    description:
      "Découvrez la richesse de la cuisine malgache avec Tsikonina. Recettes authentiques et traditions culinaires de Madagascar.",
    images: ["/images/twitter-image.jpg"],
    creator: "@tsikonina",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://tsikonina.mg",
    languages: {
      "fr-FR": "https://tsikonina.mg",
      "mg-MG": "https://mg.tsikonina.mg",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.className} ${pacifico.variable}`}>
      <body>
        <Analytics />
        <main>{children}</main>
      </body>
    </html>
  );
}
