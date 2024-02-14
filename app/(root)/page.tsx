import { FC } from "react";

import Hero from "@/components/sections/Hero";
import CtaSection from "@/components/sections/CtaCard";
import Quotes from "@/components/sections/Quotes";
import CardsCarousel from "@/components/sections/CardsCarousel";
import TakeAction from "@/components/sections/TakeAction";
import ContactUsForm from "@/components/sections/ContactUsForm";

const Landing: FC = () => {

  return (
    <main>
      <Hero />
      <CtaSection />
      <Quotes />
      <CardsCarousel />
      <TakeAction />
      <ContactUsForm />
    </main>
  )
}

export default Landing;