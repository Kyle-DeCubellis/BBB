import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import Philosophy from "@/components/home/Philosophy";
import Pillars from "@/components/home/Pillars";
import Services from "@/components/home/Services";
import AboutPreview from "@/components/home/AboutPreview";
import Process from "@/components/home/Process";
import Locations from "@/components/home/Locations";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Philosophy />
      <Pillars />
      <Services />
      <AboutPreview />
      <Process />
      <Locations />
      <CTA />
    </>
  );
}
