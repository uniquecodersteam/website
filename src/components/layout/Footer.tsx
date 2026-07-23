'use client';

import Link from 'next/link';
import { Github, Linkedin, Facebook, Mail, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer aria-label="Site Footer" className="py-24 border-t border-white/5 bg-card">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-20">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 hover:opacity-90 transition-opacity inline-flex">
              <img src="/logo.png" alt="UniqueCoders Logo" className="w-12 h-12 object-contain" />
              <span className="font-headline font-bold text-2xl tracking-tighter">UNIQUECODERS</span>
            </Link>
            <p className="text-muted-foreground text-lg max-w-sm mb-8">
              Building the autonomous infrastructure of tomorrow. We bridge the gap between human vision and machine capability.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/uniquecodersteam/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/uniquecoder/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Page"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/unique-coders-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-headline font-bold text-lg mb-6">SERVICES</h4>
            <ul className="space-y-4 text-muted-foreground text-sm">
              <li><Link href="/#services" className="hover:text-primary transition-colors">AI Agents</Link></li>
              <li><Link href="/#services" className="hover:text-primary transition-colors">Full-Stack Development</Link></li>
              <li><Link href="/#services" className="hover:text-primary transition-colors">WhatsApp Funnels</Link></li>
              <li><Link href="/#services" className="hover:text-primary transition-colors">MVP Strategy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-bold text-lg mb-6">STUDIO</h4>
            <ul className="space-y-4 text-muted-foreground text-sm">
              <li><Link href="/#services" className="hover:text-primary transition-colors">Our Process</Link></li>
              <li><Link href="/#metrics" className="hover:text-primary transition-colors">Metrics</Link></li>
              <li><Link href="/#portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/#faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-headline font-bold text-lg mb-6">CONTACT</h4>
            <ul className="space-y-4 text-muted-foreground text-sm">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-secondary/80" />
                <a href="mailto:contact@uniquecoders.com" className="hover:text-primary transition-colors break-all">
                  contact@uniquecoders.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-secondary/80" />
                <a href="tel:+8801885975808" className="hover:text-primary transition-colors">
                  +8801885975808
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">
          <p>&copy; {currentYear} UNIQUECODERS STUDIO. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
