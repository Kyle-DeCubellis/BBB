import Image from "next/image";
import TrustBadge from "@/components/ui/TrustBadge";

const stats = [
  { number: "14+", label: "Years Specialized" },
  { number: "4", label: "States Licensed" },
  { number: "1:1", label: "Founder-Led Care" },
  { number: "CBT-E", label: "Enhanced Training" },
];

const badges = ["HAES® Aligned", "CBT-E Certified", "DBT Trained", "HIPAA Compliant"];

export default function Hero() {
  return (
    <section className="min-h-screen bg-warm-white grid md:grid-cols-[55fr_45fr]" style={{ paddingTop: "120px" }}>
      {/* Left column */}
      <div className="flex flex-col justify-center px-8 md:px-20 py-16 md:py-20">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-px bg-clay flex-shrink-0" />
          <p className="font-body text-xs tracking-[0.2em] uppercase text-clay">
            Ridgewood, NJ · Telehealth Across NJ, CT, FL &amp; SC
          </p>
        </div>

        {/* Headline */}
        <h1 className="font-display leading-[1.05] mb-10">
          <span className="block text-6xl md:text-7xl font-light text-charcoal">14 Years.</span>
          <span className="block text-6xl md:text-7xl font-light text-charcoal">One Specialist.</span>
          <span className="block text-6xl md:text-7xl font-light text-charcoal">Evidence-Based</span>
          <span className="block text-6xl md:text-7xl font-light italic text-clay">Recovery.</span>
        </h1>

        {/* Subhead */}
        <p className="font-body text-base text-stone leading-relaxed max-w-md mb-10">
          Kristen Forman, LCSW brings CBT-E and DBT expertise to eating disorder treatment — serving Ridgewood, NJ in-person and patients across NJ, CT, FL, and SC via HIPAA-compliant telehealth.
        </p>

        {/* Trust badges */}
        <div className="flex flex-row flex-wrap gap-3 mb-10">
          {badges.map((badge) => (
            <TrustBadge key={badge} label={badge} />
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-row flex-wrap gap-4 items-center">
          <a
            href="https://kristen-forman.clientsecure.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-charcoal text-warm-white px-10 py-5 font-body text-xs tracking-widest uppercase hover:bg-clay transition-colors duration-300"
          >
            Schedule a Free Consultation
          </a>
          <a
            href="/about"
            className="font-body text-stone text-sm border-b border-stone-light pb-0.5 hover:text-charcoal hover:border-charcoal transition-colors duration-300"
          >
            Learn About Kristen →
          </a>
        </div>

        {/* Credential stats */}
        <div className="mt-16 flex flex-wrap gap-12">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl font-light text-charcoal">{stat.number}</p>
              <p className="font-body text-[10px] tracking-widest uppercase text-stone mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right column */}
      <div className="relative overflow-hidden bg-cream min-h-[500px] md:min-h-full">
        {/* Main image */}
        <div className="absolute inset-10">
          <Image
            src="/images/kristen-headshot.jpg"
            alt="Kristen Forman, LCSW — Eating Disorder Therapist Ridgewood NJ"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Decorative offset frame */}
        <div className="absolute inset-6 border border-clay/20 pointer-events-none z-10" />

        {/* Floating credential card */}
        <div className="absolute bottom-10 left-0 -translate-x-1/4 z-20 bg-warm-white shadow-2xl p-6 w-56">
          <p className="font-body text-[10px] uppercase tracking-widest text-clay mb-1">Specialist in</p>
          <p className="font-display text-lg font-medium text-charcoal leading-tight">
            Eating Disorder Recovery
          </p>
          <p className="font-body text-[10px] text-stone tracking-wider mt-2">
            CBT-E · DBT · HAES® · ACT
          </p>
        </div>

        {/* Vertical text strip */}
        <div
          className="absolute right-6 top-1/2 -translate-y-1/2 z-10 font-body text-[10px] tracking-widest uppercase text-stone/40"
          style={{ writingMode: "vertical-rl", transform: "translateY(-50%) rotate(180deg)" }}
        >
          LCSW · NJ LICENSE · 14+ YEARS SPECIALIZED
        </div>
      </div>
    </section>
  );
}
