import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const app_title = "Coremind ";
const app_name = "Coremind ";
const description = "";

export const metadata: Metadata = {
  title: app_title,
  description,
  applicationName: app_name,
  keywords:
    "Blockchain, Connectivity, Decentralized Solutions, Community-Driven, Transparency, Security, Innovation.",
  referrer: "origin-when-cross-origin",
  // metadataBase: new URL("https://ifritnetwork.com"),
  icons: {
    icon: "/favicon.ico",
    apple: [
      { url: "/app-apple-icon.png" },
      { url: "/app-apple-icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/app-apple-icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: app_name,
    description,
    images: ["/app-apple-icon.png"],
  },
  openGraph: {
    type: "website",
    siteName: app_name,
    title: app_name,
    description: description,
    images: ["/app-apple-icon.png"],
  },
  category: "crypto dApp",
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0A8FDC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-black`}>{children}</body>
    </html>
  );
}
