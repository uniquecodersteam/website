"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function InquiryFlow() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    details: ""
  });
  const { toast } = useToast();

  const handleNext = () => setStep(prev => prev + 1);
  const handlePrev = () => setStep(prev => prev - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const message = `Hello Unique Coders, I would like to discuss a project.\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Project Type:* ${formData.projectType}\n*Details:* ${formData.details}`;
    const whatsappNumber = "8801885975808";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    setLoading(false);
    window.open(whatsappUrl, "_blank");
    
    setStep(4);
    toast({
      title: "Redirecting to WhatsApp",
      description: "Please send the pre-filled message to our team.",
    });
  };

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto glass p-8 md:p-12 rounded-[2rem] border-white/5">
          {step < 4 && (
            <div className="mb-8">
              <div className="flex justify-between mb-4">
                {[1, 2, 3].map(i => (
                  <div 
                    key={i} 
                    className={cn(
                      "h-1 flex-1 mx-1 rounded-full transition-all",
                      i <= step ? "bg-primary" : "bg-white/10"
                    )}
                  />
                ))}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Step {step} of 3</span>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-3xl font-bold font-headline">Tell us about <span className="text-primary">You</span></h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      className="bg-white/5" 
                      required 
                      value={formData.name}
                      onChange={(e) => updateField("name", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@company.com" 
                      className="bg-white/5" 
                      required 
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                    />
                  </div>
                </div>
                <Button onClick={handleNext} className="w-full bg-primary h-12 rounded-xl">Next Step</Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-3xl font-bold font-headline">Project <span className="text-secondary">Type</span></h2>
                <div className="grid grid-cols-1 gap-3">
                  {["AI Automation", "Full-Stack Web", "WhatsApp Funnel", "MVP Startup"].map(type => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => {
                        updateField("projectType", type);
                        handleNext();
                      }}
                      className={cn(
                        "text-left p-4 rounded-xl border border-white/10 hover:border-primary/50 transition-all bg-white/5",
                        formData.projectType === type && "border-primary bg-primary/10"
                      )}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" onClick={handlePrev} className="flex-1 rounded-xl">Back</Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-3xl font-bold font-headline">The <span className="text-destructive">Vision</span></h2>
                <div className="space-y-2">
                  <Label htmlFor="details">Briefly describe what you're building</Label>
                  <Textarea 
                    id="details" 
                    placeholder="We need to automate our lead qualification process..." 
                    className="bg-white/5 min-h-[120px]" 
                    required 
                    value={formData.details}
                    onChange={(e) => updateField("details", e.target.value)}
                  />
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" onClick={handlePrev} className="flex-1 rounded-xl">Back</Button>
                  <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90 rounded-xl" disabled={loading}>
                    {loading ? "Sending..." : "Submit Inquiry"}
                  </Button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="text-center py-12 animate-in fade-in zoom-in duration-700">
                <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold font-headline mb-4 uppercase">Redirecting to WhatsApp</h2>
                <p className="text-muted-foreground mb-8">
                  You are being redirected to WhatsApp to complete your inquiry. Our technical strategist will assist you there.
                </p>
                <Button onClick={() => {
                  setFormData({ name: "", email: "", projectType: "", details: "" });
                  setStep(1);
                }} variant="outline" className="rounded-xl">Send another brief</Button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
