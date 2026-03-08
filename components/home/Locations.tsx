const locations = [
  { label: "Office", value: "Ridgewood NJ" },
  { label: "Telehealth", value: "New Jersey" },
  { label: "Telehealth", value: "Connecticut" },
  { label: "Telehealth", value: "Florida" },
  { label: "Telehealth", value: "South Carolina" },
  { label: "Coaching", value: "Nationwide" },
];

export default function Locations() {
  return (
    <section className="bg-charcoal" style={{ padding: "48px 80px" }}>
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16 items-center">
        {locations.map((loc, index) => (
          <div key={`${loc.label}-${loc.value}`} className="flex items-center gap-8 md:gap-16">
            <div className="text-center">
              <p className="font-body text-[10px] tracking-widest uppercase text-stone/40 mb-2">
                {loc.label}
              </p>
              <p className="font-display text-xl text-warm-white font-light">
                {loc.value}
              </p>
            </div>
            {/* Vertical divider (not after last item) */}
            {index < locations.length - 1 && (
              <div className="hidden md:block w-px h-12 bg-white/10 self-center" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
