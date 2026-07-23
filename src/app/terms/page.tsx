import { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FileText, ChevronRight, Scale, ShieldAlert, Cpu, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | UniqueCoders Studio',
  description: 'Terms of Service for UniqueCoders Studio. Read about the terms, conditions, and guidelines governing the use of our services, deliverables, and platforms.',
  alternates: {
    canonical: 'https://www.uniquecoders.com/terms',
  },
};

export default function TermsOfService() {
  const lastUpdated = 'July 24, 2026';

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header Spacer & Content */}
      <section className="pt-36 pb-24 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container px-4 mx-auto max-w-4xl relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground">Terms of Service</span>
          </div>

          {/* Page Intro */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/5 text-xs font-bold uppercase tracking-widest text-primary mb-6">
              <Scale className="w-4 h-4" />
              Legal Agreements
            </div>
            <h1 className="font-headline font-bold text-4xl md:text-5xl tracking-tighter mb-4">
              Terms of Service
            </h1>
            <p className="text-muted-foreground text-sm">
              Last updated: {lastUpdated}
            </p>
          </div>

          {/* Terms Layout */}
          <div className="space-y-8">
            <div className="glass p-8 rounded-3xl border-white/5 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Welcome to <strong>UniqueCoders Studio</strong>. These Terms of Service ("Terms") govern your access to and use of our website, tools, and professional software development services. By accessing our site, requesting consultations, or contracting our services, you agree to be bound by these Terms.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Please read them carefully. If you do not agree with any part of these Terms, you must not use our website or hire us for software projects.
              </p>
            </div>

            {/* Section 1 */}
            <div className="glass p-8 rounded-3xl border-white/5 space-y-4">
              <h2 className="font-headline font-bold text-2xl text-foreground flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">1</span>
                Description of Services
              </h2>
              <div className="pl-0 md:pl-11 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  UniqueCoders Studio is a premium autonomous systems and software engineering studio. We build and consult on:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Custom AI Agents, multi-agent frameworks, and autonomous LLM integrations.</li>
                  <li>WhatsApp Marketing funnels, chatbots, and automation logic.</li>
                  <li>Full-Stack Minimum Viable Products (MVPs), web applications, and API architectures.</li>
                  <li>Idea validation services, wireframing, and systems design.</li>
                </ul>
                <p>
                  Each project is subject to custom specifications, timelines, and deliverables detailed in individual project orders.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="glass p-8 rounded-3xl border-white/5 space-y-4">
              <h2 className="font-headline font-bold text-2xl text-foreground flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">2</span>
                Fiverr Ecosystem & Transactions
              </h2>
              <div className="pl-0 md:pl-11 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Unless explicitly agreed otherwise in a separate enterprise contract, all project transactions, orders, escrow services, payments, and revisions are processed through <strong>Fiverr</strong> via our official developer profile: <a href="https://www.fiverr.com/unique_coders" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">fiverr.com/unique_coders</a>.
                </p>
                <p>
                  Therefore, in addition to these Terms, you are bound by the <a href="https://www.fiverr.com/terms_of_service" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Fiverr Terms of Service</a>. We are not responsible for Fiverr platform downtimes, payment gateway issues, or resolution disputes handled under Fiverr's Terms.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="glass p-8 rounded-3xl border-white/5 space-y-4">
              <h2 className="font-headline font-bold text-2xl text-foreground flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">3</span>
                Client Responsibilities
              </h2>
              <div className="pl-0 md:pl-11 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  To successfully deliver custom development services, you agree to:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Provide clear, accurate, and complete project guidelines, wireframes, or API specifications.</li>
                  <li>Timely supply necessary access credentials (e.g., API keys, hosting platform logins, database URLs) required for building and deploying configurations.</li>
                  <li>Ensure all third-party services, APIs, and LLM providers used in the project have valid, funded accounts. We are not responsible for API limits or outages.</li>
                  <li>Verify and test deliverable prototypes during designated feedback and review windows.</li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div className="glass p-8 rounded-3xl border-white/5 space-y-4">
              <h2 className="font-headline font-bold text-2xl text-foreground flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">4</span>
                Intellectual Property & Deliverables
              </h2>
              <div className="pl-0 md:pl-11 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Upon full completion of the project and release of all funds from escrow (e.g., Fiverr order completion):
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>You receive full ownership of the custom codebase, design layouts, and assets created specifically for your project.</li>
                  <li>UniqueCoders Studio retains ownership of pre-existing boilerplates, core libraries, automation workflows, and internal development methodologies that are standard across multiple projects. We grant you a non-exclusive, perpetual, royalty-free license to use these libraries within your project deliverables.</li>
                </ul>
              </div>
            </div>

            {/* Section 5 */}
            <div className="glass p-8 rounded-3xl border-white/5 space-y-4">
              <h2 className="font-headline font-bold text-2xl text-foreground flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">5</span>
                Disclaimers & Limitations of Liability
              </h2>
              <div className="pl-0 md:pl-11 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  All software, AI configurations, and agents are provided <strong>"as is"</strong> without warranties of any kind.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>AI Hallucinations and Models:</strong> Large Language Models (LLMs) are probabilistic and may hallucinate, output incorrect answers, or generate unexpected outputs. UniqueCoders Studio is not liable for errors, inaccuracies, or damages resulting from autonomous AI model decisions.</li>
                  <li><strong>API Cost and Outages:</strong> We are not liable for costs generated by third-party LLM APIs (OpenAI, Anthropic, Gemini, etc.) or system downtime caused by external API rate limit failures.</li>
                  <li><strong>Liability Cap:</strong> In no event shall UniqueCoders Studio's total liability exceed the total amount paid by the client for the specific project order in question.</li>
                </ul>
              </div>
            </div>

            {/* Section 6 */}
            <div className="glass p-8 rounded-3xl border-white/5 space-y-4">
              <h2 className="font-headline font-bold text-2xl text-foreground flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">6</span>
                Governing Law
              </h2>
              <div className="pl-0 md:pl-11 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of Bangladesh, without regard to its conflict of law provisions. Any dispute arising out of or in connection with these Terms shall be resolved through negotiation first, or through arbitration under local rules if necessary.
                </p>
              </div>
            </div>

            {/* Inquiry Callout */}
            <div className="glass p-8 rounded-3xl border border-primary/20 bg-primary/5 space-y-4">
              <h2 className="font-headline font-bold text-2xl text-primary flex items-center gap-3">
                <ShieldAlert className="w-6 h-6" />
                Legal Questions?
              </h2>
              <p className="text-muted-foreground leading-relaxed pl-0 md:pl-9">
                If you have any questions, concerns, or requests regarding these Terms of Service, feel free to contact us:
              </p>
              <div className="pl-0 md:pl-9 grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="glass p-4 rounded-2xl border-white/5">
                  <span className="block text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Email Support</span>
                  <a href="mailto:contact@uniquecoders.com" className="text-sm font-semibold hover:text-primary transition-colors">contact@uniquecoders.com</a>
                </div>
                <div className="glass p-4 rounded-2xl border-white/5">
                  <span className="block text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Fiverr Portal</span>
                  <a href="https://www.fiverr.com/unique_coders" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:text-primary transition-colors">fiverr.com/unique_coders</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
