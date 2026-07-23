import { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Shield, ChevronRight, Lock, Eye, FileText, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | UniqueCoders Studio',
  description: 'Privacy Policy for UniqueCoders Studio. Learn how we handle, protect, and process your data when you visit our website or interact with our services.',
  alternates: {
    canonical: 'https://www.uniquecoders.com/privacy',
  },
};

export default function PrivacyPolicy() {
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
            <span className="text-foreground">Privacy Policy</span>
          </div>

          {/* Page Intro */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/5 text-xs font-bold uppercase tracking-widest text-primary mb-6">
              <Shield className="w-4 h-4" />
              Privacy Center
            </div>
            <h1 className="font-headline font-bold text-4xl md:text-5xl tracking-tighter mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-sm">
              Last updated: {lastUpdated}
            </p>
          </div>

          {/* Policy Layout */}
          <div className="space-y-8">
            <div className="glass p-8 rounded-3xl border-white/5 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                At <strong>UniqueCoders Studio</strong>, accessible from <a href="https://www.uniquecoders.com" className="text-primary hover:underline">https://www.uniquecoders.com</a>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by UniqueCoders Studio and how we use it.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
              </p>
            </div>

            {/* Section 1 */}
            <div className="glass p-8 rounded-3xl border-white/5 space-y-4">
              <h2 className="font-headline font-bold text-2xl text-foreground flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">1</span>
                Information We Collect
              </h2>
              <div className="pl-0 md:pl-11 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Contact Information:</strong> If you contact us directly via our forms, email, or telephone, we may receive personal details such as your name, email address, phone number, the contents of the message, and any attachments you send us.</li>
                  <li><strong>Project Requirements:</strong> Information you provide regarding your business, idea validation requests, flow diagrams, or system specifications required to design and build your autonomous AI agents or web applications.</li>
                  <li><strong>Log Files:</strong> UniqueCoders Studio follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.</li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div className="glass p-8 rounded-3xl border-white/5 space-y-4">
              <h2 className="font-headline font-bold text-2xl text-foreground flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">2</span>
                How We Use Your Information
              </h2>
              <div className="pl-0 md:pl-11 space-y-4 text-muted-foreground leading-relaxed">
                <p>We use the information we collect in various ways, including to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Provide, operate, and maintain our website and services.</li>
                  <li>Improve, personalize, and expand our website and user experience.</li>
                  <li>Understand and analyze how you use our website.</li>
                  <li>Develop new AI products, services, features, and functionality.</li>
                  <li>Communicate with you, either directly or through one of our partners, for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li>
                  <li>Send you emails regarding project updates or inquiries.</li>
                  <li>Find and prevent fraud.</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="glass p-8 rounded-3xl border-white/5 space-y-4">
              <h2 className="font-headline font-bold text-2xl text-foreground flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">3</span>
                Cookies and Web Beacons
              </h2>
              <div className="pl-0 md:pl-11 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Like any other website, UniqueCoders Studio uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
                </p>
                <p>
                  You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="glass p-8 rounded-3xl border-white/5 space-y-4">
              <h2 className="font-headline font-bold text-2xl text-foreground flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">4</span>
                Third-Party Platforms (Fiverr & Integrations)
              </h2>
              <div className="pl-0 md:pl-11 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Our primary platform for billing, ordering, and formal client communication is <strong>Fiverr</strong>. When you hire us through Fiverr:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Your financial transactions, escrow payments, and personal billing details are handled directly by Fiverr and are subject to the <a href="https://www.fiverr.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Fiverr Privacy Policy</a>. We do not store or process your credit card details or bank account information on our servers.</li>
                  <li>We comply fully with Fiverr's Terms of Service regarding communications, deliveries, and data sharing.</li>
                </ul>
              </div>
            </div>

            {/* Section 5 */}
            <div className="glass p-8 rounded-3xl border-white/5 space-y-4">
              <h2 className="font-headline font-bold text-2xl text-foreground flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">5</span>
                Data Security
              </h2>
              <div className="pl-0 md:pl-11 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We value your trust in providing us your personal and project information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="glass p-8 rounded-3xl border-white/5 space-y-4">
              <h2 className="font-headline font-bold text-2xl text-foreground flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">6</span>
                GDPR Data Protection Rights
              </h2>
              <div className="pl-0 md:pl-11 space-y-4 text-muted-foreground leading-relaxed">
                <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>The right to access:</strong> You have the right to request copies of your personal data.</li>
                  <li><strong>The right to rectification:</strong> You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</li>
                  <li><strong>The right to erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
                  <li><strong>The right to restrict processing:</strong> You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                  <li><strong>The right to object to processing:</strong> You have the right to object to our processing of your personal data, under certain conditions.</li>
                  <li><strong>The right to data portability:</strong> You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
                </ul>
              </div>
            </div>

            {/* Contact Section */}
            <div className="glass p-8 rounded-3xl border border-primary/20 bg-primary/5 space-y-4">
              <h2 className="font-headline font-bold text-2xl text-primary flex items-center gap-3">
                <Shield className="w-6 h-6" />
                Contact Our Privacy Officer
              </h2>
              <p className="text-muted-foreground leading-relaxed pl-0 md:pl-9">
                If you have any questions about this Privacy Policy, or if you would like to exercise one of your data protection rights, please reach out to us at:
              </p>
              <div className="pl-0 md:pl-9 grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="glass p-4 rounded-2xl border-white/5">
                  <span className="block text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Email</span>
                  <a href="mailto:contact@uniquecoders.com" className="text-sm font-semibold hover:text-primary transition-colors">contact@uniquecoders.com</a>
                </div>
                <div className="glass p-4 rounded-2xl border-white/5">
                  <span className="block text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Fiverr Shop</span>
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
