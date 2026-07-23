"use client";

import { Briefcase, Smile, ShieldCheck, DollarSign, Lightbulb, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

const metrics = [
  {
    title: "Delivered Orders",
    value: "200+",
    description: "Successfully built and deployed websites, mobile applications, and custom software systems.",
    icon: Briefcase,
    color: "primary",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    title: "Customer Satisfaction",
    value: "99.8%",
    description: "Highly rated by clients on major freelancing platforms for communication, speed, and quality.",
    icon: Smile,
    color: "secondary",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    title: "Success Score",
    value: "100%",
    description: "Our commitment to excellence ensures every single project meets user needs and business requirements.",
    icon: ShieldCheck,
    color: "destructive",
    gradient: "from-rose-500 to-red-600",
  },
  {
    title: "Saved Money",
    value: "$1M+",
    description: "Saved for our clients by identifying risks early and validating business models prior to coding.",
    icon: DollarSign,
    color: "secondary",
    gradient: "from-green-400 to-emerald-600",
  },
  {
    title: "Validated Ideas",
    value: "50+",
    description: "Transformed raw business models and strategies into robust, launch-ready MVPs.",
    icon: Lightbulb,
    color: "primary",
    gradient: "from-cyan-400 to-blue-600",
  },
  {
    title: "Built AI Agents",
    value: "30+",
    description: "Engineered autonomous tools, custom LLM solutions, research bots, and workflow agents.",
    icon: Bot,
    color: "destructive",
    gradient: "from-fuchsia-500 to-pink-600",
  },
];

export function Metrics() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background visual element */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[160px]" />
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-headline mb-6">
            ENGINEERING <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-destructive italic">METRICS</span>
          </h2>
          <p className="text-xl text-muted-foreground font-body">
            Numbers that represent our commitment to quality, efficiency, and real-world business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bento-card group flex flex-col justify-between perspective-1000 transform transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="flex justify-between items-start mb-6 card-3d">
                <div className={cn(
                  "w-12 h-12 rounded-2xl flex items-center justify-center",
                  metric.color === "primary" ? "bg-primary/20 text-primary" :
                  metric.color === "secondary" ? "bg-secondary/20 text-secondary" :
                  "bg-destructive/20 text-destructive"
                )}>
                  <metric.icon className="w-6 h-6" />
                </div>
                <span className={cn(
                  "text-5xl font-extrabold font-headline tracking-tighter bg-clip-text text-transparent bg-gradient-to-r",
                  metric.gradient
                )}>
                  {metric.value}
                </span>
              </div>
              <div className="card-3d">
                <h3 className="text-2xl font-bold font-headline mb-3 group-hover:text-primary transition-colors">
                  {metric.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {metric.description}
                </p>
              </div>

              <div className="absolute -bottom-10 -right-10 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none">
                <metric.icon className="w-40 h-40" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
