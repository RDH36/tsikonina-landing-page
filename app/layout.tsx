import Footer from "@/components/Footer/Footer";
import Navigation from "@/components/Navigation/Navigation";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Pacifico, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});
const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tsikonina.com"),
  title: {
    default: "Tsikonina - L'Application de cuisine malgache authentique",
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
    url: "https://tsikonina.com",
    title: "Tsikonina - L'Application de cuisine malgache authentique",
    description:
      "Découvrez la richesse de la cuisine malgache avec Tsikonina. Recettes authentiques, techniques traditionnelles et histoire culinaire de Madagascar.",
    siteName: "Tsikonina",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tsikonina - Application de cuisine malgache authentique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tsikonina - L'Application de cuisine malgache authentique",
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
    icon: "favicon.ico",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://tsikonina.com",
    languages: {
      "fr-FR": "https://tsikonina.com",
      "mg-MG": "https://tsikonina.com",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${roboto.className} ${roboto.variable} ${pacifico.variable}`}
    >
      <body>
        <Analytics />
        <main>
          <Navigation />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
