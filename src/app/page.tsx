import HeroSection from "./__components/hero-section";
import Services from "./__components/services";
import Portfolio from "./__components/portfolio";
import { NavbarDemo } from "./__components/navbar";
import Testimonials from "./__components/testimonials";
import Faqs from "./__components/faqs";
import Chem from "./__components/chem";

export default function Home() {
  return (
    <main>
      <NavbarDemo />
      <HeroSection />
      <Chem />
      <Services />
      <Portfolio />
      <Testimonials />
      <Faqs />
    </main>
  );
}
