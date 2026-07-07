import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { AiDiscovery } from "@/components/sections/AiDiscovery";
import { Portfolio } from "@/components/sections/Portfolio";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { InquiryFlow } from "@/components/sections/InquiryFlow";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-6">
        <div className="container px-4 mx-auto">
          <div className="glass px-8 py-4 rounded-full border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-black text-xl italic">U</div>
              <span className="font-headline font-bold text-xl tracking-tighter">UNIQUECODERS</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
              <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">Portfolio</a>
              <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">Case Studies</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
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

      <Hero />
      <div id="services"><Services /></div>
      <AiDiscovery />
      <div id="portfolio"><Portfolio /></div>
      <div id="projects"><CaseStudies /></div>
      <div id="contact"><InquiryFlow /></div>

      {/* Footer */}
      <footer className="py-24 border-t border-white/5 bg-card">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-black text-2xl italic">U</div>
                <span className="font-headline font-bold text-2xl tracking-tighter">UNIQUECODERS</span>
              </div>
              <p className="text-muted-foreground text-lg max-w-sm mb-8">
                Building the autonomous infrastructure of tomorrow. We bridge the gap between human vision and machine capability.
              </p>
              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></button>
                <button className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></button>
                <button className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-primary transition-colors"><Github className="w-5 h-5" /></button>
              </div>
            </div>
            <div>
              <h4 className="font-headline font-bold text-lg mb-6">SERVICES</h4>
              <ul className="space-y-4 text-muted-foreground text-sm">
                <li><a href="#" className="hover:text-primary">AI Agents</a></li>
                <li><a href="#" className="hover:text-primary">Full-Stack Development</a></li>
                <li><a href="#" className="hover:text-primary">WhatsApp Funnels</a></li>
                <li><a href="#" className="hover:text-primary">MVP Strategy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline font-bold text-lg mb-6">STUDIO</h4>
              <ul className="space-y-4 text-muted-foreground text-sm">
                <li><a href="#" className="hover:text-primary">Our Process</a></li>
                <li><a href="#" className="hover:text-primary">Case Studies</a></li>
                <li><a href="#" className="hover:text-primary">Tech Stack</a></li>
                <li><a href="#" className="hover:text-primary">Careers</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            <p>&copy; 2024 UNIQUECODERS STUDIO. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
