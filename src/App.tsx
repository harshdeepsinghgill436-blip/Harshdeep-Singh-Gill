import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Testimonial } from "@/components/Testimonial";
import { VideoTestimonial } from "@/components/VideoTestimonial";
import { CaseStudy } from "@/components/CaseStudy";
import { Footer } from "@/components/Footer";
import { ClosingStatement } from "@/components/ClosingStatement";
import { LightboxProvider } from "@/components/Lightbox";

// High Society
import hsHome from "@/assets/case-studies/high-society/home.jpg";
import hsLearning from "@/assets/case-studies/high-society/learning-center.jpg";
import hsJobBoard from "@/assets/case-studies/high-society/job-board.jpg";
import hsMarketplace from "@/assets/case-studies/high-society/marketplace.jpg";

// Ledger
import lgRental from "@/assets/case-studies/ledger/rental.jpg";
import lgBrrrr from "@/assets/case-studies/ledger/brrrr.jpg";
import lgTally from "@/assets/case-studies/ledger/tally.jpg";
import lgWalkaway from "@/assets/case-studies/ledger/walkaway.jpg";

// Small Business Talks
import sbtHero from "@/assets/case-studies/sbt/hero.jpg";
import sbtYoutube from "@/assets/case-studies/sbt/youtube.jpg";
import sbtPodcast from "@/assets/case-studies/sbt/podcast.jpg";
import sbtResults from "@/assets/case-studies/sbt/results.jpg";
import sbtSamples from "@/assets/case-studies/sbt/samples.jpg";
import sbtMainstreet from "@/assets/case-studies/sbt/mainstreet.jpg";
import sbtFaq from "@/assets/case-studies/sbt/faq.jpg";
import sbtPackage from "@/assets/case-studies/sbt/package.jpg";
import sbtProcess from "@/assets/case-studies/sbt/process.jpg";

// ZES
import zesDashboard from "@/assets/case-studies/zes/dashboard.jpg";
import zesCampaigns from "@/assets/case-studies/zes/campaigns.jpg";
import zesCopysets from "@/assets/case-studies/zes/copysets.jpg";
import zesClients from "@/assets/case-studies/zes/clients.jpg";
import zesSettings from "@/assets/case-studies/zes/settings.jpg";
import zesLogin from "@/assets/case-studies/zes/login.jpg";

// Testimonials
import drewImg from "@/assets/testimonials/drew.jpg";
import danielImg from "@/assets/testimonials/daniel.jpg";
import clientVideo from "@/assets/testimonials/client-video.mp4";
import clientVideoPoster from "@/assets/testimonials/client-video-poster.jpg";

function App() {
  return (
    <LightboxProvider>
      <div id="top" className="min-h-screen bg-[var(--color-bg)] text-white">
        <Nav />
        <main>
          <Hero />

          <VideoTestimonial
            src={clientVideo}
            poster={clientVideoPoster}
            context="Helped him book more calls in less time, on a tighter budget"
          />

          <CaseStudy
            bg="scan"
            eyebrow="Live build · Coaching & community"
            title="From Discord server to"
            titleAccent="private empire."
            description="High Society was a coaching community living entirely inside Discord. I gave it a home of its own — a private branded app, a website that actually sells the vision, and a funnel engineered to convert cold visitors into paying members."
            stats={[
              { value: "20", label: "New members in 3 weeks" },
              { value: "↑", label: "Direct sales, post-launch" },
              { value: "New", label: "Affiliate channel stood up" },
              { value: "1", label: "Private branded app shipped" },
            ]}
            shots={[
              { src: hsHome, caption: "Home — first impression on login" },
              { src: hsLearning, caption: "Learning Center — value visible from minute one" },
              { src: hsJobBoard, caption: "Job Board — real utility, not a novelty feature" },
              { src: hsMarketplace, caption: "Marketplace — another reason to stay inside the app" },
            ]}
          />

          <Testimonial
            quote="I find this very useful and valuable."
            name="Daniel"
            context="Founder, DH Marketing — repaired his marketing funnel"
            img={danielImg}
            bg="stars"
          />

          <CaseStudy
            bg="web"
            eyebrow="Live build · Real estate tooling"
            title="A deal calculator that"
            titleAccent="picks a side."
            description="The Ledger is a tailored real estate investment calculator — every screen below is the actual live tool, running real numbers. Six deal types, one shared structure, instant verdicts."
            stats={[
              { value: "6", label: "Deal types in one tool" },
              { value: "Live", label: "Every field recalculates instantly" },
              { value: "Cap rate", label: "Cash flow, CoC return, 1% rule" },
              { value: "3", label: "Deals saved and ready to compare" },
            ]}
            shots={[
              { src: lgRental, caption: "Rental mode — the base line-item structure every mode shares" },
              { src: lgBrrrr, caption: "BRRRR mode — rehab cost, ARV, and refinance terms up front" },
              { src: lgTally, caption: "The tally — cap rate 5.9%, stamped Worth A Look" },
              { src: lgWalkaway, caption: "Same deal type, different numbers — stamped Walk Away" },
            ]}
          />

          <Testimonial
            quote="I've been impressed so far with his depth of knowledge and technical capabilities building our platform from the ground up."
            name="Drew Knapp"
            context="Founder & CEO, A Greater Town"
            img={drewImg}
            bg="ember"
            shimmer
          />

          <CaseStudy
            bg="growth"
            heartbeat
            eyebrow="Live build · High-converting landing page"
            title="A landing page,"
            titleAccent="built to convert."
            description="A high-converting landing page, built on demand — one clear offer, stated plainly, with nothing between the visitor and the order."
            shots={[
              { src: sbtHero, caption: "The hero — the full offer, stated plainly" },
              { src: sbtYoutube, caption: "A real published interview, embedded live" },
              { src: sbtPodcast, caption: "The real podcast feed — proof, not a promise" },
              { src: sbtResults, caption: "Dawn Home Care — page 3 to page 1 in 3 weeks" },
              { src: sbtSamples, caption: "Samples organized by format — video, podcast, social" },
              { src: sbtMainstreet, caption: "\u201cBuilt for Main Street\u201d — the exclusion is the pitch" },
              { src: sbtPackage, caption: "21 items, spaced out — nothing left vague" },
              { src: sbtProcess, caption: "Three steps — book, produce, publish" },
              { src: sbtFaq, caption: "FAQ — the real objections, answered plainly" },
            ]}
          />

          <CaseStudy
            bg="pulse"
            eyebrow="Live build · Cold email infrastructure"
            title="A cold email platform,"
            titleAccent="built from the wires up."
            description="Z Email System is a self-hosted cold outreach tool sold as a one-time purchase instead of a subscription. AI lead parsing, unlimited sequenced follow-up steps, and multi-client sub-accounts — built for agencies, not rented to them."
            stats={[
              { value: "AI", label: "Lead parsing from raw text/CSV" },
              { value: "∞", label: "Unlimited sequenced steps" },
              { value: "Multi", label: "Client sub-accounts, own expiry" },
              { value: "Self", label: "Hosted — no rented platform" },
            ]}
            shots={[
              { src: zesDashboard, caption: "The dashboard — live counts, not estimates" },
              { src: zesCampaigns, caption: "A live campaign — one lead, one active sequence" },
              { src: zesCopysets, caption: "Cold Outreach 1 — 2 steps, Day 1 + a 2-day follow-up" },
              { src: zesClients, caption: "Client accounts — 31-day cycles, one admin with no expiry" },
              { src: zesSettings, caption: "The architecture, laid out in plain language" },
              { src: zesLogin, caption: "Private access only — no public signup" },
            ]}
          />

          <ClosingStatement />
        </main>
        <Footer />
      </div>
    </LightboxProvider>
  );
}

export default App;
