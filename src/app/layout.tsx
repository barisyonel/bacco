import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SWRegister from "@/components/SWRegister";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "bacco - Premium Kahve ve Restoran Deneyimi",
    template: "%s | bacco"
  },
  description: "Türkiye'nin en kaliteli kahve deneyimini yaşayın. Özel harmanlarımız, taze ürünlerimiz ve sıcak atmosferimizle sizi bekliyoruz. Amasya ve İstanbul şubelerimizde hizmetinizdeyiz.",
  keywords: [
    "kahve", "cafe", "restaurant", "espresso", "filtre kahve", "türk kahvesi", 
    "hamburger", "salata", "tost", "pasta", "kek", "cheesecake", "Amasya", 
    "İstanbul", "Beşiktaş", "Kadıköy", "premium kahve", "kahve çekirdeği",
    "soğuk demleme", "latte", "cappuccino", "mocha", "americano", "cold brew"
  ],
  authors: [{ name: "bacco", url: "https://bacco.com" }],
  creator: "bacco",
  publisher: "bacco",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bacco.com'),
  alternates: {
    canonical: '/',
    languages: {
      'tr-TR': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://bacco.com',
    siteName: 'bacco',
    title: 'bacco - Premium Kahve ve Restoran Deneyimi',
    description: 'Türkiye\'nin en kaliteli kahve deneyimini yaşayın. Özel harmanlarımız, taze ürünlerimiz ve sıcak atmosferimizle sizi bekliyoruz.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'bacco - Premium Kahve Deneyimi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'bacco - Premium Kahve ve Restoran Deneyimi',
    description: 'Türkiye\'nin en kaliteli kahve deneyimini yaşayın.',
    images: ['/images/twitter-image.jpg'],
    creator: '@bacco',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <SWRegister />
      </body>
    </html>
  );
}
