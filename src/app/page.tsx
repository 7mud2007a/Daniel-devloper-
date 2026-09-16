import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Capabilities } from "@/components/Capabilities";
import { Projects } from "@/components/Projects";
import { Investment } from "@/components/Investment";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-sky-500/30">
      <Navbar />
      <main className="flex-grow space-y-8 sm:space-y-16">
        <Hero />
        <Capabilities />
        <Projects />
        <Investment />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
