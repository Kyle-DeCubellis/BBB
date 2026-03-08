const trustItems = [
  "HIPAA-Compliant Telehealth",
  "No Rotating Clinicians",
  "HAES® Aligned",
  "Free 15-Min Consult",
  "Licensed in 4 States",
];

export default function CTA() {
  return (
    <section
      className="bg-warm-white relative overflow-hidden text-center"
      style={{ padding: "160px 80px" }}
    >
      {/* Subtle radial gradient overlays */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgb(196 149 122 / 0.08) 0%, transparent 70%)" }}
      />
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgb(138 158 140 / 0.08) 0%, transparent 70%)" }}
      />

      <div className="relative z-10">
        {/* Eyebrow */}
        <p className="font-body text-xs tracking-widest uppercase text-clay mb-8">
          Ready when you are
        </p>

        {/* Headline */}
        <h2
          className="font-display font-light text-charcoal leading-[1.1] max-w-3xl mx-auto mb-6"
          style={{ fontSize: "clamp(3rem, 5vw, 5rem)" }}
        >
          Your relationship with food can{" "}
          <span className="italic text-clay">heal.</span>
        </h2>

        {/* Subhead */}
        <p className="font-body text-base text-stone max-w-lg mx-auto leading-relaxed mb-14">
          Recovery is possible at any age, in any body, at any stage of your journey. Kristen is accepting new clients — telehealth across NJ, CT, FL &amp; SC, and in-person in Ridgewood, NJ.
        </p>

        {/* Button row */}
        <div className="flex flex-wrap gap-5 justify-center">
          <a
            href="https://kristen-forman.clientsecure.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-charcoal text-warm-white px-16 py-6 font-body text-xs tracking-widest uppercase hover:bg-clay transition-colors duration-300"
          >
            Schedule a Free Consultation
          </a>
          <a
            href="/contact"
            className="inline-block border border-stone-light text-stone px-16 py-6 font-body text-xs tracking-widest uppercase hover:border-charcoal hover:text-charcoal transition-colors duration-300"
          >
            Send a Message
          </a>
        </div>

        {/* Trust row */}
        <div className="mt-16 flex flex-wrap gap-10 justify-center">
          {trustItems.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-sage-light flex items-center justify-center flex-shrink-0">
                <span className="text-[9px] text-charcoal">✓</span>
              </div>
              <span className="font-body text-xs text-stone">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
