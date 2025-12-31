import { Hero } from "../components/Hero";
import { Offer } from "../components/Offer";
import { ServicesBand } from "../components/ServicesBand";
import { Testimonials } from "../components/Testimonials";

export function HomePage() {
  return (
    <main>
      <Hero />
      <Offer />
      <ServicesBand />
      <Testimonials />
    </main>
  );
}