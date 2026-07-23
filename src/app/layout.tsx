import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  metadataBase: new URL('https://www.uniquecoders.com'),
  title: {
    default: 'Best AI Agent Developer & Idea Validator | UniqueCoders Studio',
    template: '%s | UniqueCoders Studio',
  },
  description: 'UniqueCoders is the world\'s best AI agent developer and expert idea validator. We build premium autonomous systems, WhatsApp funnels, and high-growth MVPs.',
  keywords: ['ai agent developer', 'idea validator', 'ai automation studio', 'custom ai agents', 'mvp development', 'whatsapp marketing automation', 'llm integration'],
  authors: [{ name: 'UniqueCoders Studio' }],
  creator: 'UniqueCoders Studio',
  publisher: 'UniqueCoders Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://www.uniquecoders.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.uniquecoders.com',
    siteName: 'UniqueCoders Studio',
    title: 'Best AI Agent Developer & Idea Validator | UniqueCoders Studio',
    description: 'UniqueCoders is the world\'s best AI agent developer and expert idea validator. We build premium autonomous systems, WhatsApp funnels, and high-growth MVPs.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'UniqueCoders Studio - AI Agents & MVP Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best AI Agent Developer & Idea Validator | UniqueCoders Studio',
    description: 'UniqueCoders is the world\'s best AI agent developer and expert idea validator. We build premium autonomous systems, WhatsApp funnels, and high-growth MVPs.',
    creator: '@uniquecoders',
    images: ['/logo.png'],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://www.uniquecoders.com/#website",
                  "url": "https://www.uniquecoders.com",
                  "name": "UniqueCoders Studio",
                  "description": "UniqueCoders is the world's best AI agent developer and expert idea validator.",
                  "publisher": {
                    "@id": "https://www.uniquecoders.com/#organization"
                  }
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://www.uniquecoders.com/#organization",
                  "name": "UniqueCoders Studio",
                  "url": "https://www.uniquecoders.com",
                  "logo": "https://www.uniquecoders.com/logo.png",
                  "image": "https://www.uniquecoders.com/logo.png",
                  "description": "UniqueCoders is the world's best AI agent developer and expert idea validator. We build premium autonomous systems, WhatsApp funnels, and high-growth MVPs.",
                  "telephone": "+880-1885-975808",
                  "email": "contact@uniquecoders.com",
                  "priceRange": "$$",
                  "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "BD",
                    "addressLocality": "Dhaka"
                  },
                  "sameAs": [
                    "https://www.facebook.com/uniquecodersteam/",
                    "https://www.linkedin.com/company/uniquecoder/",
                    "https://github.com/unique-coders-dev",
                    "https://www.fiverr.com/unique_coders"
                  ],
                  "areaServed": "Worldwide",
                  "knowsAbout": [
                    "AI Agent Development",
                    "Idea Validation",
                    "WhatsApp Automation",
                    "Software Engineering",
                    "MVP Strategy",
                    "LLM Integration"
                  ],
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+880-1885-975808",
                    "contactType": "customer service",
                    "availableLanguage": ["English", "Bengali"]
                  }
                }
              ]
            })
          }}
        />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
