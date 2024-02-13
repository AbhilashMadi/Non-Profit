import { TextH1, TextH4 } from "@ui/typography";
import Image from "next/image";
import { FC } from "react";

const Hero: FC = () => {

  return (
    <section>
      <figure className="relative h-[70dvh] bg-cover bg-no-repeat">
        <Image
          src={"https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          alt={"Hero Image"}
          className="object-cover object-center object"
          fill
        />
        <div className="bg-gradient-to-t from-primary to-transparent h-full w-full absolute bottom-0 left-0" />
        <div className="absolute right-1/2 top-1/3 translate-x-1/2 translate-y-1/2 container text-muted">
          <TextH1 className="animate-fade-down animate-once animate-ease-in-out">
            Empowering Compassion: Join Us in Making a Difference Today!
          </TextH1>
          <TextH4 className="mt-4 animate-fade duration-1000">
            We believe in the power of collective kindness to transform lives. Every day, we strive to make a positive impact on communities in need, from providing essential resources to offering hope and support to those facing adversity. Join us in our mission to create a brighter future for all, where compassion knows no bounds. Together, we can make a world of difference. Explore our initiatives, volunteer opportunities, and ways to donate to become part of the change.
          </TextH4>
        </div>
      </figure>
    </section>
  )
}

export default Hero