import { Card, CardContent, CardHeader, CardTitle } from "@ui/card"
import { TextLg } from "@ui/typography"
import { FC } from "react"

const CardsCarousel: FC = () => {

  return (
    <section className="container grid grid-cols-1 md:grid-cols-3 my-8 gap-8">
      <Card>
        <CardHeader>
          <CardTitle>
            <b className="gr-underline">The Issue</b>
          </CardTitle>
          <TextLg className="mt-4 text-muted-foreground">
            For so many children and youth in poverty, childhood can be incredibly difficult.
          </TextLg>
        </CardHeader>
        <CardContent>
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
        <CardContent>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            <b className="gr-underline">Our Impact</b>
          </CardTitle>
          <TextLg className="mt-4 text-muted-foreground">
            We&apos;ve worked with over 100s children and mobilized 100s of volunteers to take action.
          </TextLg>
        </CardHeader>
        <CardContent>
        </CardContent>
      </Card>
    </section>
  )
}

export default CardsCarousel