import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import AOSProvider from "@/components/AOSProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = localFont({
  variable: "--font-montserrat",
  display: "swap",
  src: [
    {
      path: "../font/Cinzel,DM_Sans,Inter,Manrope,Montserrat,etc (6)/Montserrat/Montserrat-VariableFont_wght.ttf",
      style: "normal",
      weight: "100 900",
    },
    {
      path: "../font/Cinzel,DM_Sans,Inter,Manrope,Montserrat,etc (6)/Montserrat/Montserrat-Italic-VariableFont_wght.ttf",
      style: "italic",
      weight: "100 900",
    },
  ],
});

export const metadata = {
  metadataBase: new URL("https://swym.digital"),
  title: {
    default: "SWYM Digital Marketing",
    template: "%s | SWYM Digital Marketing",
  },
  description:
    "SWYM Digital provides reliable IT, infrastructure, and digital solutions across Dubai and the UAE.",
  keywords: [
    "SWYM Digital",
    "IT services",
    "infrastructure",
    "digital transformation",
    "Dubai",
    "UAE",
  ],
  authors: [{ name: "SWYM Digital" }],
  creator: "SWYM Digital",
  icons: {
    icon: "/assets/images/Tabdeel_Logo.svg",
  },
  openGraph: {
    title: "SWYM Digital Marketing",
    description:
      "Reliable IT and infrastructure solutions that scale with your business.",
    url: "/",
    siteName: "SWYM Digital Marketing",
    images: [
      {
        url: "/assets/images/TESTHERO.png",
        width: 1200,
        height: 630,
        alt: "SWYM Digital Marketing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SWYM Digital Marketing",
    description:
      "Reliable IT and infrastructure solutions that scale with your business.",
    images: ["/assets/images/TESTHERO.png"],
    creator: "@swymdigital",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0f19",
  colorScheme: "light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${geistMono.variable} antialiased`}>
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}
