import Image from "next/image";
import Link from "next/link";

const servicesLinks = [
  { label: "Anorexia Therapy", href: "/therapy/anorexia" },
  { label: "Bulimia Recovery", href: "/therapy/bulimia" },
  { label: "Binge Eating", href: "/therapy/binge-eating" },
  { label: "Disordered Eating", href: "/therapy/disordered-eating" },
  { label: "Coaching", href: "/coaching" },
];

const practiceLinks = [
  { label: "About Kristen", href: "/about" },
  { label: "Our Approach", href: "/approach" },
  { label: "Blog & Resources", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Book Now", href: "https://kristen-forman.clientsecure.me/", external: true },
];

const findUsLinks = [
  { label: "Psychology Today", href: "https://www.psychologytoday.com", external: true },
  { label: "Healthgrades", href: "https://www.healthgrades.com", external: true },
  { label: "Instagram", href: "https://www.instagram.com", external: true },
  { label: "CBTE Directory", href: "https://www.cbte.co", external: true },
  { label: "NPI Registry", href: "https://npiregistry.cms.hhs.gov", external: true },
];

function FooterLinkList({ links }: { links: Array<{ label: string; href: string; external?: boolean }> }) {
  return (
    <ul className="flex flex-col gap-3">
      {links.map((link) =>
        link.external ? (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-stone/55 hover:text-warm-white transition-colors duration-300"
            >
              {link.label}
            </a>
          </li>
        ) : (
          <li key={link.label}>
            <Link
              href={link.href}
              className="font-body text-sm text-stone/55 hover:text-warm-white transition-colors duration-300"
            >
              {link.label}
            </Link>
          </li>
        )
      )}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="bg-charcoal" style={{ padding: "80px 80px 48px" }}>
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-16 mb-16 pb-16 border-b border-white/8">
          {/* Col 1: Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Balanced Brain & Body"
              width={120}
              height={36}
              style={{ height: "36px", width: "auto", filter: "brightness(0) invert(1)" }}
            />
            <p className="font-body text-sm text-stone/50 leading-relaxed mt-4 max-w-xs">
              Boutique eating disorder therapy and mindful eating coaching in Ridgewood, NJ. Telehealth across NJ, CT, FL &amp; SC.
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-body text-[10px] tracking-widest uppercase text-stone/35 mb-6">
              Services
            </h4>
            <FooterLinkList links={servicesLinks} />
          </div>

          {/* Col 3: Practice */}
          <div>
            <h4 className="font-body text-[10px] tracking-widest uppercase text-stone/35 mb-6">
              Practice
            </h4>
            <FooterLinkList links={practiceLinks} />
          </div>

          {/* Col 4: Find Us */}
          <div>
            <h4 className="font-body text-[10px] tracking-widest uppercase text-stone/35 mb-6">
              Find Us
            </h4>
            <FooterLinkList links={findUsLinks} />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap justify-between items-center gap-4">
          <p className="font-body text-xs text-stone/25">
            © 2026 Balanced Brain &amp; Body · Kristen Forman, LCSW · Ridgewood, NJ 07450 · NPI: 1285105403
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sage" />
            <span className="font-body text-[10px] uppercase tracking-widest text-stone/30">
              HIPAA Compliant · Confidential &amp; Secure
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
