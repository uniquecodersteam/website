"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calculator, Smartphone, Globe, Bot, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const options = [
  { id: "mobile", label: "Mobile App (iOS/Android)", price: 8000, icon: Smartphone },
  { id: "web", label: "Web Platform", price: 6000, icon: Globe },
  { id: "ai", label: "AI Core / LLM Integration", price: 5000, icon: Bot },
  { id: "admin", label: "Admin Dashboard", price: 3000, icon: ShieldCheck },
];

export function Estimator() {
  const [selected, setSelected] = useState<string[]>([]);
  const [complexity, setComplexity] = useState(1);

  const calculateTotal = () => {
    const base = selected.reduce((acc, id) => {
      const opt = options.find(o => o.id === id);
      return acc + (opt?.price || 0);
    }, 0);
    return base * complexity;
  };

  const toggleOption = (id: string) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-headline mb-6">
            MVP PROJECT <span className="text-destructive">ESTIMATOR</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Get an instant rough estimate for your next big software or AI project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold font-headline flex items-center gap-2">
                1. Select Core Components
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => toggleOption(opt.id)}
                    className={cn(
                      "flex flex-col items-center justify-center p-6 rounded-2xl glass transition-all border text-center gap-4",
                      selected.includes(opt.id) ? "border-primary bg-primary/10" : "border-white/5"
                    )}
                  >
                    <opt.icon className={cn("w-8 h-8", selected.includes(opt.id) ? "text-primary" : "text-muted-foreground")} />
                    <span className="font-medium text-sm">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold font-headline">2. Project Complexity</h3>
                <span className="text-primary font-bold">{complexity}x</span>
              </div>
              <Slider 
                value={[complexity]} 
                onValueChange={([v]) => setComplexity(v)} 
                min={1} 
                max={3} 
                step={0.5} 
                className="py-4"
              />
              <div className="flex justify-between text-xs text-muted-foreground font-medium uppercase tracking-widest">
                <span>Standard</span>
                <span>Advanced</span>
                <span>Enterprise</span>
              </div>
            </div>
          </div>

          <Card className="glass border-white/5 sticky top-24">
            <CardHeader>
              <CardTitle className="font-headline text-center">Estimation Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {selected.length === 0 && <p className="text-muted-foreground text-center italic py-4">Select components to see breakdown</p>}
                {selected.map(id => {
                  const opt = options.find(o => o.id === id);
                  return (
                    <div key={id} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{opt?.label}</span>
                      <span className="font-mono">${opt?.price.toLocaleString()}</span>
                    </div>
                  );
                })}
              </div>
              <div className="pt-6 border-t border-white/10 flex justify-between items-end">
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-1">Total Estimated Investment</span>
                  <span className="text-4xl md:text-5xl font-bold font-headline text-primary">${calculateTotal().toLocaleString()}</span>
                </div>
                <Calculator className="w-12 h-12 text-white/10" />
              </div>
              <p className="text-[10px] text-muted-foreground leading-relaxed">
                *This is a rough estimate based on average project requirements. Final pricing depends on specific functional specifications.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
