export default function Philosophy() {
  return (
    <section className="bg-warm-white py-36" style={{ padding: "140px 80px" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-16 md:gap-24 items-start">
          {/* Left label column */}
          <div className="hidden md:flex flex-col items-center gap-6 flex-shrink-0">
            <span
              className="font-body text-xs tracking-widest uppercase text-clay"
              style={{ writingMode: "vertical-rl", transform: "rotate(-90deg)", whiteSpace: "nowrap" }}
            >
              Our Philosophy
            </span>
            <div className="w-px h-16 bg-clay opacity-40" />
          </div>

          {/* Content */}
          <div className="flex-1">
            {/* Mobile label */}
            <p className="md:hidden font-body text-xs tracking-widest uppercase text-clay mb-8">
              Our Philosophy
            </p>

            {/* Pull quote */}
            <blockquote className="font-display text-4xl md:text-5xl font-light text-charcoal leading-[1.4] mb-6">
              &ldquo;Not all foods are nutritionally equal — but they should be morally equal.&rdquo;
            </blockquote>

            {/* Attribution */}
            <p className="font-body text-xs uppercase tracking-widest text-stone mb-16">
              — Kristen Forman, LCSW
            </p>

            {/* Supporting text */}
            <div className="grid md:grid-cols-2 gap-10">
              <p className="font-body text-sm text-stone leading-relaxed">
                At Balanced Brain & Body, we reject the notion that food is a moral issue. Recovery does not require you to eat &ldquo;perfectly&rdquo; — it requires you to find peace. Our approach is built on Health at Every Size® principles, weight-inclusive care, and genuine respect for every body that walks through our door.
              </p>
              <p className="font-body text-sm text-stone leading-relaxed">
                We believe the path to healing is paved with curiosity, not rules. Using CBT-E, DBT, ACT, and mindfulness-based interventions, Kristen works alongside each client to dismantle the patterns that keep them stuck — without diet culture, without shame, and without a scale in sight.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
