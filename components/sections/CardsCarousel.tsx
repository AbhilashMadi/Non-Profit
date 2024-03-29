import { Card, CardContent, CardHeader, CardTitle } from "@ui/card"
import { TextLg } from "@ui/typography"
import { FC } from "react";

import Image from "next/image";

const CardsCarousel: FC = () => {

  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 gap-8">
      <Card>
        <CardHeader>
          <CardTitle>
            <b className="gr-underline">The Issue</b>
          </CardTitle>
          <TextLg className="mt-4 text-muted-foreground">
            For so many children and youth in poverty, childhood can be incredibly difficult.
          </TextLg>
        </CardHeader>
        <CardContent className="relative h-[400px]">
          <Image
            src={"/public/images/img-one.jpg"}
            alt="Card Image One"
            className="object-cover object-center rounded-md"
            blurDataURL="/public/images/img-one.jpg"
            placeholder="blur"
            fill
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            <b className="gr-underline">Our Work</b>
          </CardTitle>
          <TextLg className="mt-4 text-muted-foreground">
            One in four children lives in poverty. We&apos;re working hard every day to change that.
          </TextLg>
        </CardHeader>
        <CardContent className="relative h-[400px]">
          <Image
            src={"/public/images/img-two.jpg"}
            alt="Card Image One"
            className="object-cover object-center rounded-md"
            blurDataURL="/public/images/img-two.jpg"
            placeholder="blur"
            fill
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            <b className="gr-underline">Our Impact</b>
          </CardTitle>
          <TextLg className="mt-4 text-muted-foreground">
            We&apos;ve worked with over 100s children and motivated 100s of volunteers.
          </TextLg>
        </CardHeader>
        <CardContent className="relative h-[400px]">
          <Image
            src={"/public/images/img-three.jpg"}
            alt="Card Image One"
            className="object-cover object-center rounded-md"
            blurDataURL="/public/images/img-three.jpg"
            placeholder="blur"
            fill
          />
        </CardContent>
      </Card>
    </section>
  )
}

export default CardsCarousel