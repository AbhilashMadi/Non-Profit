import Image from "next/image"
import { FC } from "react"
import { TextH1, TextH2, TextLg } from "../ui/typography"

const TakeAction: FC = () => {

  return (
    <section className="container mb-8 overflow-hidden">
      <div className="relative h-[400px]">
        <Image
          src={"https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          alt="Volunteer Image"
          className="object-cover rounded-md"
          fill
        />
        <div className="h-full w-full bg-gradient-to-t from-blue-700 to-transparent absolute top-0 left-0 rounded-b-md" />
        <TextH2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-muted">
          <span className="gr-underline">Contact Us to volunteer</span> your skills<br />
          and create lasting impact
        </TextH2>
      </div>
    </section>
  )
}

export default TakeAction