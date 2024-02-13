import { TextH2, TextLead } from "@ui/typography";
import Image from "next/image";
import { FC } from "react";

const CtaCard: FC = () => {

  return (
    <article className="container p-8">
      <TextH2 className="text-blue-700 my-6">
        WELCOME TO <b className="gr-underline">EQUAL OPPORTUNITY</b>
      </TextH2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Image
            src="https://images.unsplash.com/photo-1569173675610-42c361a86e37?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="CTA Section Image"
            width={800}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="space-y-4">
          <TextLead>
            At Harisha Foundation, we believe in the power of compassion to transform lives and build stronger communities. Whether it&apos;s providing vital resources to those in need, championing causes close to our hearts, or fostering a culture of giving and empathy, we are dedicated to making a meaningful difference in the world.
          </TextLead>

          <TextLead>
            Join us on our journey to create a brighter future for all. Explore our mission, discover volunteer opportunities, and learn how you can contribute to our cause. Together, we can ignite hope, inspire change, and make the world a better place, one small act of kindness at a time.
          </TextLead>
        </div>

        <div className="space-y-4">
          <TextLead>
            The 100% Model - We exist to serve communities, not ourselves. That’s why 100% of the donations we receive go directly to helping those in need.
          </TextLead>

          <TextLead>
            Together, we can build a brighter tomorrow, one small act of kindness at a time. Join us on this journey of hope, healing, and transformation. Together, we can make a lasting impact that reverberates throughout generations.
          </TextLead>
        </div>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="CTA Section Image"
            width={800}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </article>
  )
}

export default CtaCard