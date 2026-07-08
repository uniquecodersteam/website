"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Eye, ArrowUpRight, Folder, MessageCircle } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: "eco-stream",
    title: "EcoStream AI",
    category: "AI Automation",
    description: "A comprehensive AI support agent that handles 85% of tier-1 inquiries, saving over 40 hours of manual labor per week for a logistics startup.",
    stats: "85% Automation Rate",
    image: "https://picsum.photos/seed/p1/1200/800",
    tech: ["Genkit", "Next.js", "Firebase", "WhatsApp API"],
    whatsappNumber: "8801885975808"
  },
  {
    id: "nova-retail",
    title: "Nova Retail",
    category: "Full-Stack Web",
    description: "High-conversion e-commerce platform with real-time inventory management and predictive analytics for stock forecasting.",
    stats: "2.4x Conversion Growth",
    image: "https://picsum.photos/seed/p2/1200/800",
    tech: ["React", "PostgreSQL", "Tailwind", "Stripe"],
    whatsappNumber: "8801885975808"
  },
  {
    id: "vault-finance",
    title: "Vault Finance",
    category: "Custom Software",
    description: "Secure asset management dashboard with multi-signature authorization and real-time market data streaming.",
    stats: "$2M+ Asset Throughput",
    image: "https://picsum.photos/seed/p3/1200/800",
    tech: ["Next.js", "Web3.js", "Redis", "Framer Motion"],
    whatsappNumber: "8801885975808"
  },
  {
    id: "nexus-chat",
    title: "Nexus Sales Bot",
    category: "WhatsApp Funnel",
    description: "An automated sales funnel for WhatsApp that qualifies leads via natural language processing before handing off to human agents.",
    stats: "1.2k Leads Qualified/Mo",
    image: "https://picsum.photos/seed/p4/1200/800",
    tech: ["Node.js", "OpenAI", "Twilio", "Supabase"],
    whatsappNumber: "8801885975808"
  }
];

export function Portfolio() {
  const handleContactWhatsApp = (projectTitle: string) => {
    const whatsappNumber = "8801885975808";
    const msg = encodeURIComponent(`Hi, I'm interested in a project similar to ${projectTitle}.`);
    window.location.href = `https://wa.me/${whatsappNumber}?text=${msg}`;
  };

  return (
    <section id="portfolio" className="py-24 bg-background overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold tracking-widest uppercase border rounded-full border-secondary/30 text-secondary">
            <Folder className="w-3 h-3" />
            Selected Works
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-headline mb-6">
            THE <span className="text-secondary italic">SHOWCASE</span>
          </h2>
          <p className="text-xl text-muted-foreground font-body">
            A portfolio of autonomous systems and premium software delivered with pixel-perfect precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1000">
          {projects.map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <div 
                  className="group relative cursor-pointer bento-card card-3d overflow-hidden p-0 h-[400px]"
                >
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-40"
                    data-ai-hint="portfolio project"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <Badge className="mb-4 w-fit bg-secondary text-black hover:bg-secondary/80">
                      {project.category}
                    </Badge>
                    <h3 className="text-3xl font-bold font-headline mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm max-w-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-secondary font-bold text-sm tracking-tight">{project.stats}</span>
                      <div className="w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Eye className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className="max-w-4xl glass border-white/10 p-0 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative aspect-square md:aspect-auto h-full min-h-[300px]">
                    <Image src={project.image} alt={project.title} fill className="object-cover" />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col">
                    <DialogHeader className="mb-6">
                      <Badge className="mb-4 w-fit bg-secondary text-black">{project.category}</Badge>
                      <DialogTitle className="text-4xl font-bold font-headline mb-2">{project.title}</DialogTitle>
                      <DialogDescription className="text-lg text-muted-foreground leading-relaxed">
                        {project.description}
                      </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-6 mt-auto">
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t) => (
                            <Badge key={t} variant="outline" className="border-white/10">{t}</Badge>
                          ))}
                        </div>
                      </div>

                      <div className="pt-6 border-t border-white/5">
                        <Button 
                          className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl py-6 gap-2"
                          onClick={() => handleContactWhatsApp(project.title)}
                        >
                          <MessageCircle className="w-5 h-5" />
                          Contact on WhatsApp
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button 
            variant="link" 
            className="text-muted-foreground hover:text-primary font-bold tracking-widest uppercase text-xs"
            onClick={() => handleContactWhatsApp("UniqueCoders Services")}
          >
            Start a project on WhatsApp <ArrowUpRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
