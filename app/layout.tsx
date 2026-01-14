import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import "./globals.css";
import {
  siteDescription,
  siteInstagram,
  siteName,
  sitePhoneRaw,
  siteUrl
} from "../lib/site";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap"
});

const space = Space_Grotesk({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Cinematic Videographer & Editor`,
    template: `%s | ${siteName}`
  },
  description: siteDescription,
  keywords: [
    "Jalal Merhib",
    "videographer",
    "editor",
    "photographer",
    "After Effects",
    "event films",
    "social media content",
    "promotional videos",
    "Tripoli",
    "Beirut",
    "Lebanon"
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  openGraph: {
    title: `${siteName} | Cinematic Videographer & Editor`,
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Cinematic Videographer & Editor`,
    description: siteDescription
  },
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export const viewport: Viewport = {
  themeColor: "#b9323f"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteName,
    description: siteDescription,
    url: siteUrl,
    telephone: sitePhoneRaw,
    areaServed: ["Tripoli", "Beirut"],
    sameAs: [siteInstagram]
  };

  return (
    <html lang="en" className={`${space.variable} ${bebas.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
