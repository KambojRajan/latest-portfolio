import type { Metadata } from "next";
import { Inter, DM_Serif_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rajan Kamboj — Backend Engineer",
  description:
    "Backend engineer building high-scale financial infrastructure. NIT Kurukshetra. Java, Go, Spring Boot, distributed systems.",
  keywords: [
    "Rajan Kamboj",
    "Backend Engineer",
    "Java",
    "Go",
    "Spring Boot",
    "NIT Kurukshetra",
  ],
  authors: [{ name: "Rajan Kamboj" }],
  openGraph: {
    title: "Rajan Kamboj — Backend Engineer",
    description:
      "Building high-scale financial infrastructure for 65,000+ ATMs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${dmSerif.variable} ${jetbrains.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
