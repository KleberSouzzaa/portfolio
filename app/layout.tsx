import { GoogleAnalytics } from '@next/third-parties/google'
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
  title: "Kleber Souza | Indústria 4.0 & Engenharia de Software",
  description: "Portfólio de projetos focados em IoT, Automação Industrial e Desenvolvimento de Software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>

      <GoogleAnalytics gaId="G-PKXW2JN8X2" />
    </html>
  );
}
