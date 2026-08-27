import { Nav } from "@/sections/Nav";
import { Hero } from "@/sections/Hero";
import { Approach } from "@/sections/Approach";
import { Work } from "@/sections/Work";
import { Proof } from "@/sections/Proof";
import { Contact, Footer } from "@/sections/Contact";
import { Marquee } from "@/components/Marquee";

const TICKER = [
  "GOOGLE ADS",
  "SALES FUNNELS",
  "REACT & TYPESCRIPT",
  "AI TOOLING",
  "SUPABASE",
  "GROWTH SYSTEMS",
];

function App() {
  return (
    <div id="top" className="min-h-screen bg-[var(--color-ink)] text-[var(--color-paper)]">
      <Nav />
      <main>
        <Hero />
        <Marquee items={TICKER} />
        <Approach />
        <Work />
        <Proof />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
