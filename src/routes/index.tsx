import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Industries } from "@/components/sections/Industries";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Clients } from "@/components/sections/Clients";
import { Booking } from "@/components/sections/Booking";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { CursorGlow } from "@/components/CursorGlow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SparkEdge — Professional Deep Cleaning & Housekeeping" },
      {
        name: "description",
        content:
          "SparkEdge delivers world-class deep cleaning, housekeeping & facility management for homes, offices and commercial spaces in Visakhapatnam.",
      },
      { property: "og:title", content: "SparkEdge — Professional Deep Cleaning & Housekeeping" },
      {
        property: "og:description",
        content:
          "Luxury-grade cleaning. Certified teams. Precision equipment. Book a free inspection today.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <CursorGlow />
      <Nav />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Industries />
      <BeforeAfter />
      <Clients />
      <Booking />
      <InstagramSection />
      <Contact />
      <Footer />
    </main>
  );
}
