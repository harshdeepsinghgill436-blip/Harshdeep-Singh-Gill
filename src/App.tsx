import { Nav } from "@/sections/Nav";
import { Hero } from "@/sections/Hero";
import { Approach } from "@/sections/Approach";
import { Work } from "@/sections/Work";
import { Proof } from "@/sections/Proof";
import { Contact, Footer } from "@/sections/Contact";

function App() {
  return (
    <div id="top" className="min-h-screen bg-[var(--color-ink)] text-[var(--color-paper)]">
      <Nav />
      <main>
        <Hero />
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
