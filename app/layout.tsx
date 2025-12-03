import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BHDI - Broad House Development Initiative",
  description:
    "Transforming lives through welfare support, education, empowerment, and responsive support. Join us in creating a better future.",
  keywords:
    "NGO, development, welfare, education, empowerment, community support",
  openGraph: {
    title: "BHDI - Broad House Development Initiative",
    description:
      "Transforming lives through welfare support, education, empowerment, and responsive support.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
