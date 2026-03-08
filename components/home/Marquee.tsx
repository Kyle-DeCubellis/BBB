const items = [
  "Anorexia Recovery",
  "Bulimia Treatment",
  "Binge Eating Disorder",
  "Disordered Eating",
  "Mindful Eating Coaching",
  "DBT Skills Training",
  "CBT-E Protocol",
  "HAES® Aligned",
  "Food Neutrality",
  "Body Trust",
  "Emotional Regulation",
  "Neuro-Affirming Care",
];

function TrackContent() {
  return (
    <>
      {items.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-5 mx-5">
          <span className="text-[11px] tracking-widest uppercase text-stone/50 whitespace-nowrap">
            {item}
          </span>
          <span className="text-clay">✦</span>
        </span>
      ))}
    </>
  );
}

export default function Marquee() {
  return (
    <div className="bg-charcoal py-4 overflow-hidden">
      {/* Track 1: left to right */}
      <div className="flex mb-3 overflow-hidden">
        <div className="flex whitespace-nowrap marquee-forward">
          <TrackContent />
          <TrackContent />
        </div>
      </div>

      {/* Track 2: right to left */}
      <div className="flex overflow-hidden">
        <div className="flex whitespace-nowrap marquee-reverse">
          <TrackContent />
          <TrackContent />
        </div>
      </div>
    </div>
  );
}
