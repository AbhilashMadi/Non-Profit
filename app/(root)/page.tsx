import { FC } from "react";

import Hero from "@/components/sections/Hero";
import CtaSection from "@/components/sections/CtaCard";
import Quotes from "@/components/sections/Quotes";
import CardsCarousel from "@/components/sections/CardsCarousel";

const Landing: FC = () => {

  return (
    <main>
      <Hero />
      <CtaSection />
      <Quotes />
      <CardsCarousel />
    </main>
  )
}

export default Landing;