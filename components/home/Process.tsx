const steps = [
  {
    number: "1",
    title: "Free Consultation",
    description:
      "A 15-minute call with Kristen to determine whether this is the right fit. No pressure, no intake forms — just an honest conversation about where you are and what you need.",
  },
  {
    number: "2",
    title: "75-Minute Intake",
    description:
      "A comprehensive first session exploring your full history, relationship with food, co-occurring concerns like anxiety or depression, and your goals for treatment.",
  },
  {
    number: "3",
    title: "Personalized Treatment",
    description:
      "Weekly 45 or 60-minute sessions using evidence-based methods matched to your diagnosis and pace — with Kristen, always, from first session through recovery.",
  },
];

export default function Process() {
  return (
    <section className="bg-cream" style={{ padding: "120px 80px" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-body text-xs tracking-widest uppercase text-clay mb-4">
            Getting Started
          </p>
          <h2 className="font-display text-4xl font-light text-charcoal">
            Three steps to begin
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line (between cards, not on last) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-full w-full h-px bg-stone-light z-0" style={{ width: "calc(100% + 2.5rem)" }} />
              )}

              {/* Step number circle */}
              <div className="relative z-10 w-12 h-12 border border-stone-light flex items-center justify-center bg-cream mb-7">
                <span className="font-display text-lg text-charcoal">{step.number}</span>
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl font-normal text-charcoal mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-body text-sm text-stone leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://kristen-forman.clientsecure.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-charcoal text-warm-white px-12 py-5 font-body text-xs tracking-widest uppercase hover:bg-clay transition-colors duration-300"
          >
            Start with a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
