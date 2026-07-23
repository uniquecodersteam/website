import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { AiDiscovery } from "@/components/sections/AiDiscovery";
import { Portfolio } from "@/components/sections/Portfolio";
import { Metrics } from "@/components/sections/Metrics";
import { InquiryFlow } from "@/components/sections/InquiryFlow";
import { Faq } from "@/components/sections/Faq";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <Hero />
      <div id="services"><Services /></div>
      <div id="metrics"><Metrics /></div>
      <div id="discovery"><AiDiscovery /></div>
      <div id="portfolio"><Portfolio /></div>
      <div id="faq"><Faq /></div>
      <div id="contact"><InquiryFlow /></div>

      <Footer />
    </main>
  );
}

