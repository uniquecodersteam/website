import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: 'Best AI Agent Developer & Idea Validator | UniqueCoders Studio',
  description: 'UniqueCoders is the world\'s best AI agent developer and expert idea validator. We build premium autonomous systems, WhatsApp funnels, and high-growth MVPs.',
  keywords: ['best ai agent developer', 'idea validator', 'ai automation studio', 'custom ai agents', 'mvp development', 'whatsapp marketing automation'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-primary selection:text-primary-foreground">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
