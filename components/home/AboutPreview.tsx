import Image from "next/image";
import Link from "next/link";

const credentials = [
  "Licensed in NJ, CT, FL, and South Carolina",
  "DBT Intensive Training Certified",
  "CBT-E (Cognitive Behavioral Therapy-Enhanced for Eating Disorders)",
  "HAES® Aligned Practice Member",
  "14+ Years Inpatient & Outpatient ED Experience",
  "Neuro-Affirming & Autism-Informed Care",
];

export default function AboutPreview() {
  return (
    <section className="bg-warm-white" style={{ padding: "140px 80px" }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-[45fr_55fr] gap-24 items-center">
        {/* Image side */}
        <div className="relative" style={{ aspectRatio: "3/4" }}>
          <Image
            src="/images/kristen-headshot.jpg"
            alt="Kristen Forman, LCSW — Eating Disorder Therapist Ridgewood NJ"
            fill
            className="object-cover object-top"
          />
          {/* Clay accent box */}
          <div className="absolute bottom-0 right-0 translate-x-6 translate-y-6 bg-clay w-32 h-32 flex flex-col items-center justify-center z-10">
            <span className="font-display text-4xl text-warm-white">14+</span>
            <span className="font-body text-[9px] uppercase tracking-widest text-white/70 text-center leading-tight mt-1">
              Years<br />Specialized
            </span>
          </div>
        </div>

        {/* Content side */}
        <div>
          <p className="font-body text-xs tracking-widest uppercase text-clay mb-6">
            Meet Your Therapist
          </p>

          <h2 className="font-display text-5xl font-light text-charcoal mb-8 leading-tight">
            Kristen Forman, LCSW
          </h2>

          <p className="font-body text-sm text-stone leading-relaxed mb-6">
            With over 14 years of specialized experience in eating disorder treatment, Kristen Forman brings a rare combination of clinical depth and genuine warmth to every session. She has worked in inpatient, residential, and outpatient settings — and now leads her boutique private practice in Ridgewood, NJ.
          </p>
          <p className="font-body text-sm text-stone leading-relaxed mb-6">
            Kristen&apos;s approach is firmly rooted in evidence-based modalities — CBT-E, DBT, and ACT — combined with HAES® principles that honor every body without bias. She specializes in anorexia, bulimia, binge eating disorder, and disordered eating across all ages and presentations.
          </p>

          {/* Blockquote */}
          <blockquote className="border-l-2 border-clay-light pl-6 my-10">
            <p className="font-display text-xl italic font-light text-charcoal leading-relaxed">
              &ldquo;My clients are the experts in their own lives. My role is to work alongside them — without judgment, without focusing on weight, and always with respect.&rdquo;
            </p>
            <footer className="font-body text-xs uppercase tracking-widest text-stone mt-3">
              — Kristen Forman, LCSW
            </footer>
          </blockquote>

          {/* Credential list */}
          <ul className="flex flex-col gap-3 mt-10">
            {credentials.map((cred) => (
              <li key={cred} className="flex items-center gap-3 text-sm text-stone font-body">
                <span className="w-1.5 h-1.5 bg-clay rounded-full flex-shrink-0" />
                {cred}
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Link
              href="/about"
              className="font-body text-stone text-sm border-b border-stone-light pb-0.5 hover:text-charcoal hover:border-charcoal transition-colors duration-300"
            >
              Full Bio & Credentials →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
