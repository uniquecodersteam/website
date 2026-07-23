'use client';

import Link from 'next/link';

export function Navbar() {
  return (
    <nav aria-label="Main Navigation" className="fixed top-0 left-0 right-0 z-50 py-6">
      <div className="container px-4 mx-auto">
        <div className="glass px-8 py-4 rounded-full border-white/5 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <img src="/logo.png" alt="UniqueCoders Logo" className="w-10 h-10 object-contain" />
            <span className="font-headline font-bold text-xl tracking-tighter">UNIQUECODERS</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/#portfolio" className="text-sm font-medium hover:text-primary transition-colors">
              Portfolio
            </Link>
            <Link href="/#metrics" className="text-sm font-medium hover:text-primary transition-colors">
              Metrics
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
          
          <a
            href="https://www.fiverr.com/unique_coders"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-primary hover:text-white transition-all inline-block"
          >
            Hire on Fiverr
          </a>
        </div>
      </div>
    </nav>
  );
}
