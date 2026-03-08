const credentials = [
  { text: "14+", highlight: true },
  { text: " Years Specialized", highlight: false },
  { separator: true },
  { text: "CBT-E", highlight: true },
  { text: " Certified", highlight: false },
  { separator: true },
  { text: "DBT", highlight: true },
  { text: " Trained", highlight: false },
  { separator: true },
  { text: "HAES®", highlight: true },
  { text: " Aligned", highlight: false },
  { separator: true },
  { text: "Licensed NJ · CT · FL · SC", highlight: false },
  { separator: true },
  { text: "Founder-Led Practice", highlight: false },
  { separator: true },
  { text: "HIPAA Compliant Telehealth", highlight: false },
];

function CredentialItems() {
  return (
    <>
      {credentials.map((item, i) => {
        if ("separator" in item && item.separator) {
          return (
            <span key={i} className="mx-4 text-stone/40">·</span>
          );
        }
        return (
          <span
            key={i}
            className={
              item.highlight
                ? "text-clay font-medium"
                : "text-stone/70"
            }
          >
            {item.text}
          </span>
        );
      })}
    </>
  );
}

export default function CredentialBar() {
  return (
    <div className="sticky top-[72px] z-40 bg-charcoal py-3 overflow-hidden">
      {/* Desktop: static centered row */}
      <div className="hidden md:flex items-center justify-center px-8">
        <p className="font-body text-xs tracking-widest uppercase whitespace-nowrap">
          <CredentialItems />
        </p>
      </div>

      {/* Mobile: marquee scroll */}
      <div className="md:hidden flex items-center overflow-hidden">
        <div className="marquee-mobile flex items-center whitespace-nowrap font-body text-xs tracking-widest uppercase">
          <span className="flex items-center">
            <CredentialItems />
            <span className="mx-8 text-stone/40">·</span>
            <CredentialItems />
            <span className="mx-8 text-stone/40">·</span>
          </span>
        </div>
      </div>
    </div>
  );
}
