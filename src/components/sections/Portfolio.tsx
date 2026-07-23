"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Eye, ArrowUpRight, Folder, MessageCircle } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: "kamo-privacy",
    title: "Kamo Privacy Shield",
    category: "Full-Stack Web",
    description: "A premium, high-performance anti-tracking and privacy protection landing page designed to safeguard digital fingerprints, showcase real-time tracking blocking, and display interactive privacy health metrics.",
    stats: "100% Privacy Protection",
    image: "/kamo_privacy_mockup.png",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Lucide React"],
    whatsappNumber: "8801885975808"
  },
  {
    id: "grab-eats",
    title: "Grab & Eats",
    category: "Full-Stack Web",
    description: "A premium on-demand food delivery platform featuring real-time tracking, multi-vendor support, and a seamless, high-performance customer experience.",
    stats: "15 Min Avg Delivery",
    image: "/grab_eats_mockup.png",
    tech: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
    whatsappNumber: "8801885975808"
  },
  {
    id: "gigsync-automation",
    title: "GigSync Translator & Refresher",
    category: "Custom Software",
    description: "A professional automation and translation browser extension for freelancers, managing smart refresh timers and real-time client communication on platforms like Fiverr, Upwork, and LinkedIn.",
    stats: "4.8/5 Avg Rating",
    image: "/gigsync_automation.png",
    tech: ["Chrome Extension API", "OpenAI API", "Node.js", "WebSockets"],
    whatsappNumber: "8801885975808"
  },
  {
    id: "skyforge-drones",
    title: "SkyForge Drones",
    category: "Full-Stack Web",
    description: "A premium, high-fidelity drone shop and booking portal with interactive 3D product previews, comprehensive category filters, and a seamless checkout experience.",
    stats: "99.9% Uptime",
    image: "/skyforge_drones.png",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "Stripe"],
    whatsappNumber: "8801885975808"
  },
  {
    id: "ai-tools-directory",
    title: "AI Tools Directory",
    category: "Custom Software",
    description: "A modern directory and ad-promotion platform for cutting-edge AI tools, featuring interactive promotion plans, automated submission flows, and detailed category filtering.",
    stats: "15k+ Monthly Visitors",
    image: "/ai_tools_directory.png",
    tech: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    whatsappNumber: "8801885975808"
  },
  {
    id: "homestead-real-estate",
    title: "Homestead Real Estate",
    category: "Full-Stack Web",
    description: "An enterprise-grade property listing and agent dashboard with map integrations, advanced filter grids, and real-time listing updates for modern real estate operations.",
    stats: "2.5k Listings Live",
    image: "/real_estate_platform.png",
    tech: ["Next.js", "Mapbox GL", "Tailwind CSS", "PostgreSQL"],
    whatsappNumber: "8801885975808"
  },
  {
    id: "rag-pipeline-chatbot",
    title: "RAG Pipeline & Chatbot",
    category: "Workflow Automation",
    description: "An automated n8n workflow connecting Google Drive triggers, Pinecone vector stores, and custom OpenAI-powered AI agents to build a high-performance Retrieval-Augmented Generation (RAG) pipeline for document-based client interactions.",
    stats: "100% Automated Pipeline",
    image: "/n8n_rag_pipeline.png",
    tech: ["n8n", "Pinecone", "OpenAI API", "Google Drive API"],
    whatsappNumber: "8801885975808"
  },
  {
    id: "ivalidate-mobile-identity",
    title: "iVALIDATE Mobile Identity",
    category: "Mobile App",
    description: "A comprehensive digital identity and decentralized credential verification mobile application, featuring biometric selfie authentication, QR code verification, and secure credential sharing.",
    stats: "Secure & Instant Verification",
    image: "/ivalidate_mobile_flow.png",
    tech: ["React Native", "TypeScript", "Tailwind CSS", "Expo"],
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
            onClick={() => {
              const whatsappNumber = "8801885975808";
              const msg = encodeURIComponent("Hey, I am interested to work with you, could you please share me your more work samples?");
              window.location.href = `https://wa.me/${whatsappNumber}?text=${msg}`;
            }}
          >
            View 200 More projects <ArrowUpRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
