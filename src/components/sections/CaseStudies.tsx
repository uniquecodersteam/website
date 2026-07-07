"use client";

import { ArrowUpRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "EcoStream AI",
    category: "AI Automation",
    stats: "85% Reduction in Support Time",
    description: "Implemented a custom Genkit-powered AI agent for a global logistics firm. The system handles complex tracking inquiries and support tickets autonomously, resulting in a massive ROI within the first 3 months.",
    image: "https://picsum.photos/seed/uniquecoders-5/1200/800",
    tech: ["Genkit", "Node.js", "Firebase", "WhatsApp"]
  },
  {
    title: "Nova Retail",
    category: "Full-Stack Web",
    stats: "2.4x Conversion Increase",
    description: "Developed a next-generation e-commerce platform using Next.js 15. The solution included AI-driven personalization and a seamless checkout experience that directly boosted conversion metrics.",
    image: "https://picsum.photos/seed/uniquecoders-6/1200/800",
    tech: ["Next.js", "Tailwind", "Stripe", "PostgreSQL"]
  },
  {
    title: "Vault Finance",
    category: "Custom Software",
    stats: "$2M+ Managed via Platform",
    description: "A secure, high-performance financial dashboard built for a fintech startup. Features real-time data visualization and enterprise-grade security protocols for managing large-scale assets.",
    image: "https://picsum.photos/seed/uniquecoders-7/1200/800",
    tech: ["React", "D3.js", "Redis", "AWS"]
  },
];

export function CaseStudies() {
  const handleContactWhatsApp = (title: string) => {
    const whatsappNumber = "8801405618060";
    const msg = encodeURIComponent(`Hi, I'm interested in the ${title} case study.`);
    window.location.href = `https://wa.me/${whatsappNumber}?text=${msg}`;
  };

  return (
    <section className="py-24 bg-card">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold font-headline mb-6 uppercase">
              ENGINEERING <span className="text-primary underline decoration-secondary">RESULTS</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              A glimpse into the ROI-driven builds we've delivered for visionary clients.
            </p>
          </div>
          <button className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:text-primary transition-colors border-b-2 border-primary/20 pb-1">
            View All Studies <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Dialog key={i}>
              <DialogTrigger asChild>
                <div className="group cursor-pointer">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6">
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      data-ai-hint="case study"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <Badge className="mb-3 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border-none">
                        {project.category}
                      </Badge>
                      <h3 className="text-2xl font-bold font-headline mb-1">{project.title}</h3>
                      <p className="text-secondary font-bold text-sm tracking-tight">{project.stats}</p>
                    </div>
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className="max-w-3xl glass border-white/10 p-0 overflow-hidden">
                <div className="flex flex-col">
                  <div className="relative h-64 w-full">
                    <Image src={project.image} alt={project.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-6 left-8">
                      <Badge className="mb-2 bg-secondary text-black">{project.category}</Badge>
                      <h3 className="text-3xl font-bold font-headline">{project.title}</h3>
                    </div>
                  </div>
                  <div className="p-8">
                    <DialogHeader className="mb-6">
                      <DialogTitle className="text-xl font-bold font-headline text-primary mb-2">Metrics & Outcome</DialogTitle>
                      <DialogDescription className="text-lg text-muted-foreground leading-relaxed">
                        {project.description}
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map(t => (
                        <Badge key={t} variant="outline" className="opacity-70">{t}</Badge>
                      ))}
                    </div>

                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl py-6 gap-2"
                      onClick={() => handleContactWhatsApp(project.title)}
                    >
                      <MessageCircle className="w-5 h-5" />
                      Discuss This Study
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
