"use client"

import { cn } from "@/lib/utils";
import { Card } from "@ui/card";
import { FC, useEffect, useState } from "react";
import { BlockQuote } from "../ui/typography";

const quotes: ReadonlyArray<string> = [
  "The best way to find yourself is to lose yourself in the service of others.",
  "We make a living by what we get, but we make a life by what we give.",
  "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
  "The happiest people are not those getting more, but those giving more.",
];

const Quotes: FC = () => {
  const [quoteIndex, setQuoteIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuoteIndex((prevIndex: number) =>
        prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [quoteIndex]);

  return (
    <section className="container">
      <Card className="p-4 my-8">
        <BlockQuote className={cn("mx-auto text-center max-w-xl", "animate-fade animate-duration-700")}>
          {quotes[quoteIndex]}
        </BlockQuote>
      </Card>
    </section>
  );
};

export default Quotes;
