import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Texfy - Planejamento Inteligente para PCP Têxtil",
  description: "Plataforma de IA focada em otimizar o Planejamento e Controle de Produção (PCP) na indústria têxtil. Elimine o retrabalho e transforme o caos em eficiência.",
  keywords: ["Texfy", "PCP Têxtil", "Planejamento de Produção", "Indústria Têxtil", "IA", "Inteligência Artificial", "Fast Fashion", "Otimização"],
  authors: [{ name: "Texfy Team" }],
  icons: {
    icon: "/brain-icon.svg",
    shortcut: "/brain-icon.svg",
    apple: "/brain-icon.svg",
  },
  openGraph: {
    title: "Texfy - Planejamento Inteligente para PCP Têxtil",
    description: "Plataforma de IA para otimizar o PCP na indústria têxtil. Elimine o retrabalho.",
    url: "https://texfy.com",
    siteName: "Texfy",
    type: "website",
    images: [
      {
        url: "/texfy-logo.png",
        width: 1200,
        height: 630,
        alt: "Texfy - Planejamento Inteligente para PCP Têxtil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Texfy - Planejamento Inteligente para PCP Têxtil",
    description: "Plataforma de IA para otimizar o PCP na indústria têxtil",
    images: ["/texfy-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
