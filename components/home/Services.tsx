import Link from "next/link";

const services = [
  {
    number: "01",
    name: "Anorexia Nervosa",
    tags: ["CBT-E", "DBT"],
    href: "/therapy/anorexia",
  },
  {
    number: "02",
    name: "Bulimia Nervosa",
    tags: ["CBT", "Mindfulness"],
    href: "/therapy/bulimia",
  },
  {
    number: "03",
    name: "Binge Eating Disorder",
    tags: ["DBT", "Self-Compassion"],
    href: "/therapy/binge-eating",
  },
  {
    number: "04",
    name: "Disordered Eating",
    tags: ["ACT", "Intuitive Eating"],
    href: "/therapy/disordered-eating",
  },
  {
    number: "05",
    name: "Mindful Eating Coaching",
    tags: ["Available Nationwide"],
    href: "/coaching",
  },
];

export default function Services() {
  return (
    <section className="bg-charcoal" style={{ padding: "120px 80px" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-16 mb-20 items-end">
          <h2 className="font-display text-5xl font-light text-warm-white leading-[1.1]">
            Specialized care for the{" "}
            <span className="italic text-clay">full spectrum</span> of disordered eating.
          </h2>
          <p className="font-body text-sm text-stone/60 leading-relaxed">
            Every presentation of disordered eating is unique. Kristen brings evidence-based expertise across the full range of eating disorder diagnoses — tailoring treatment to you, not to a protocol.
          </p>
        </div>

        {/* Services list */}
        <div className="flex flex-col">
          {services.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className="group grid gap-10 py-8 border-b border-white/8 cursor-pointer items-center"
              style={{ gridTemplateColumns: "80px 1fr 220px 60px" }}
            >
              {/* Number */}
              <span className="font-display text-base text-white/25 font-light">
                {service.number}
              </span>

              {/* Name */}
              <span className="font-display text-3xl font-light text-warm-white group-hover:text-clay transition-colors duration-300">
                {service.name}
              </span>

              {/* Tags */}
              <div className="hidden md:flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-body text-[10px] tracking-widest uppercase text-white/30 border border-white/10 px-3 py-1.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <span className="justify-self-end text-clay text-xl opacity-40 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
