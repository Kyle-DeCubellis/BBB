"use client";

import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Therapy", href: "/therapy/anorexia" },
  { label: "Coaching", href: "/coaching" },
  { label: "Resources", href: "/blog" },
];

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[72px] bg-warm-white/90 backdrop-blur-md border-b border-stone-light/30">
      <div className="max-w-7xl mx-auto h-full px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo.png"
            alt="Balanced Brain & Body"
            width={120}
            height={40}
            style={{ height: "40px", width: "auto" }}
            priority
          />
        </Link>

        {/* Center nav links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-xs tracking-widest uppercase text-stone hover:text-charcoal transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="https://kristen-forman.clientsecure.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block border border-charcoal text-charcoal px-6 py-3 text-xs tracking-widest uppercase hover:bg-charcoal hover:text-warm-white transition-all duration-300 font-body"
        >
          Begin Your Journey
        </a>

        {/* Mobile menu placeholder */}
        <button className="md:hidden text-charcoal" aria-label="Open menu">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
