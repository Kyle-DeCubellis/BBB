const pillars = [
  {
    number: "01",
    title: "HAES® Aligned & Weight-Inclusive",
    body: "Your worth is not your weight. We follow Health at Every Size® principles, rejecting weight-centric approaches that can harm recovery. All bodies deserve compassionate, evidence-based care.",
    tag: "Anti-Diet Framework",
  },
  {
    number: "02",
    title: "Evidence-Based Methods",
    body: "CBT-E, DBT, ACT, and Mindfulness-Based approaches — carefully selected and matched to your diagnosis, your history, and where you are in recovery. Never one-size-fits-all.",
    tag: "CBT-E · DBT · ACT",
  },
  {
    number: "03",
    title: "Founder-Led, Always",
    body: "You work directly with Kristen Forman, LCSW — not a rotating team, not a student clinician. Same specialist, every session, through the full arc of your care.",
    tag: "Boutique Practice",
  },
];

export default function Pillars() {
  return (
    <section className="bg-cream" style={{ padding: "120px 80px" }}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="border-t border-stone-light pt-14 mb-14">
          <h2 className="font-display text-4xl font-light text-charcoal">
            How we approach your healing
          </h2>
        </div>

        {/* Cards grid — gap creates border illusion */}
        <div className="grid md:grid-cols-3 gap-px bg-stone-light">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-warm-white hover:bg-cream transition-colors duration-300 p-12 flex flex-col"
              style={{ padding: "48px 40px" }}
            >
              {/* Large number */}
              <span className="font-display text-7xl font-light text-stone-light leading-none mb-6">
                {pillar.number}
              </span>

              {/* Title */}
              <h3 className="font-display text-2xl font-normal text-charcoal mb-4">
                {pillar.title}
              </h3>

              {/* Body */}
              <p className="font-body text-sm text-stone leading-relaxed flex-1">
                {pillar.body}
              </p>

              {/* Tag */}
              <span className="inline-block mt-7 font-body text-[10px] tracking-widest uppercase text-clay border border-clay-light px-4 py-2 self-start">
                {pillar.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
