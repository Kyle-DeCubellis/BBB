export default function Testimonial() {
  return (
    <section className="bg-warm-white" style={{ padding: "120px 80px" }}>
      <div className="max-w-[900px] mx-auto text-center">
        {/* Decorative quote mark */}
        <div
          className="font-display leading-none text-clay-light select-none mb-8"
          style={{ fontSize: "120px" }}
          aria-hidden="true"
        >
          &ldquo;
        </div>

        {/* Quote */}
        <blockquote className="font-display text-3xl font-light italic text-charcoal leading-[1.6] mb-10">
          I came in thinking my relationship with food was broken beyond repair. Two years later, I eat without guilt for the first time in my life. Kristen gave me tools, not rules.
        </blockquote>

        {/* Divider */}
        <div className="w-16 h-px bg-stone-light mx-auto mb-6" />

        {/* Attribution */}
        <p className="font-body text-xs uppercase tracking-widest text-stone">
          Former Client · Bergen County, NJ · Binge Eating Disorder Recovery
        </p>

        {/* Privacy note */}
        <p className="font-body text-xs italic text-stone/40 mt-4">
          Testimonial shared with permission. Details de-identified to protect privacy.
        </p>
      </div>
    </section>
  );
}
