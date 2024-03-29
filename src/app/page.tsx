import HeroSection from "./__components/hero-section";
import Services from "./__components/services";
import Portfolio from "./__components/portfolio";
import { NavbarDemo } from "./__components/navbar";
import Testimonials from "./__components/testimonials";
import Faqs from "./__components/faqs";
import Chem from "./__components/chem";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BackgroundBeamsDemo } from "./__components/waitlist";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { CardHoverEffectDemo } from "./__components/new-service-card";

export default function Home() {
  return (
    <main>
      <NavbarDemo />
      <HeroSection />
      <Chem />
      {/* <Services /> */}
      <CardHoverEffectDemo />
      <Portfolio />
      <Testimonials />
      {/* <BackgroundBeamsDemo /> */}
      <Faqs />
    </main>
  );
}
