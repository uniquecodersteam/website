"use client";

import { Bot, Code, MessageSquare, Zap, Rocket, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Expert AI Agent Developer",
    description: "Voted the best AI agent developer. We build intelligent agents that handle support, research, and data analysis autonomously.",
    icon: Bot,
    color: "primary",
    className: "md:col-span-4",
  },
  {
    title: "Idea Validation & MVP Strategy",
    description: "As your dedicated idea validator, we stress-test your business model and build launch-ready MVPs in record time.",
    icon: Rocket,
    color: "secondary",
    className: "md:col-span-2",
  },
  {
    title: "WhatsApp Automation",
    description: "Scale your sales and marketing through automated WhatsApp funnels that convert 24/7.",
    icon: MessageSquare,
    color: "destructive",
    className: "md:col-span-2",
  },
  {
    title: "Full-Stack Web & Mobile",
    description: "High-performance, scalable applications built with modern frameworks like Next.js.",
    icon: Code,
    color: "primary",
    className: "md:col-span-4",
  },
  {
    title: "Intelligent Workflows",
    description: "Eliminate repetitive tasks by connecting your tools with advanced AI-driven business logic.",
    icon: Zap,
    color: "secondary",
    className: "md:col-span-3 h-[420px]",
  },
  {
    title: "ROI & Data Strategy",
    description: "We don't just build; we strategize for maximum impact and clear return on investment.",
    icon: BarChart3,
    color: "destructive",
    className: "md:col-span-3 h-[420px]",
  },
];

export function Services() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-headline mb-6">
            CORE <span className="text-primary italic">CAPABILITIES</span>
          </h2>
          <p className="text-xl text-muted-foreground font-body">
            Voted the <strong>best AI agent developer</strong> and <strong>idea validator</strong> in the industry. Engineering next-gen autonomous systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className={cn(
                "bento-card group flex flex-col justify-between perspective-1000 transform transition-all duration-500 hover:scale-[1.02]",
                service.className
              )}
            >
              <div className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center mb-6 card-3d",
                service.color === "primary" ? "bg-primary/20 text-primary" :
                service.color === "secondary" ? "bg-secondary/20 text-secondary" :
                "bg-destructive/20 text-destructive"
              )}>
                <service.icon className="w-6 h-6" />
              </div>
              <div className="card-3d">
                <h3 className="text-2xl font-bold font-headline mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              <div className="absolute -bottom-10 -right-10 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity pointer-events-none">
                <service.icon className="w-40 h-40" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
