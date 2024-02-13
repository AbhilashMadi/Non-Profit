import { cn } from "@/lib/utils";
import { ReactNode, FC } from "react";

type Text = FC<Readonly<{ children: ReactNode, className?: string }>>;

const TextH1: Text = ({ children, className }) => {
  return <h1 className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)}>{children}</h1>
}

const TextH2: Text = ({ children, className }) => {
  return <h2 className={cn("scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0", className)}>{children}</h2>
}

const TextH3: Text = ({ children, className }) => {
  return <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)}>{children}</h3>
}

const TextH4: Text = ({ children, className }) => {
  return <h4 className={cn("scroll-m-20 text-xl font-semibold tracking-tight", className)}>{children}</h4>
}

const Para: Text = ({ children, className }) => {
  return <p className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}>{children}</p>
}

const Code: Text = ({ children, className }) => {
  return <code className={cn("relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold", className)}>{children}</code>
}

const TextLead: Text = ({ children, className }) => {
  return <p className={cn("text-xl text-muted-foreground", className)}>{children}</p>
}

const TextLg: Text = ({ children, className }) => {
  return <p className={cn("text-lg font-semibold", className)}>{children}</p>
}

const TextSm: Text = ({ children, className }) => {
  return <p className={cn("text-sm font-medium leading-none", className)}>{children}</p>
}

const TextMuted: Text = ({ children, className }) => {
  return <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>
}

const BlockQuote: Text = ({ children, className }) => {
  return <blockquote className={cn("text-lg italic font-semibold text-gray-900 dark:text-white", className)}>{children}</blockquote>
}

const List: Text = ({ children, className }) => {
  return <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}>{children}</ul>
}

export {
  TextH1,
  TextH2,
  TextH3,
  TextH4,
  Para,
  Code,
  BlockQuote,
  List,
  TextLead,
  TextLg,
  TextSm,
  TextMuted,
}