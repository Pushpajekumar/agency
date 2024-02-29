import HeroSection from "./__components/hero-section";
import Services from "./__components/services";
import Portfolio from "./__components/portfolio";
import { NavbarDemo } from "./__components/navbar";

export default function Home() {
  return (
    <main>
      <NavbarDemo />
      <HeroSection />
      <Services />
      <Portfolio />
    </main>
  );
}
