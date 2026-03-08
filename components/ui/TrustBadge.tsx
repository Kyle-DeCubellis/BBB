interface TrustBadgeProps {
  label: string;
  variant?: "outline" | "filled";
}

export default function TrustBadge({ label, variant = "outline" }: TrustBadgeProps) {
  if (variant === "filled") {
    return (
      <span className="bg-clay/10 border border-clay/20 text-clay text-[10px] tracking-widest uppercase px-3 py-2">
        {label}
      </span>
    );
  }
  return (
    <span className="border border-stone-light text-stone text-[10px] tracking-widest uppercase px-3 py-2">
      {label}
    </span>
  );
}
