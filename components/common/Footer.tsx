import { FC } from "react";
import { TextMuted } from "@ui/typography";
import { Labels } from "@/resources/labels";

const Footer: FC = () => {

  return (
    <footer className="bg-muted">
      <TextMuted className="container p-4 text-center">
        {Labels.harishaFoundation} &copy;{new Date().getFullYear()}
      </TextMuted>
    </footer>
  )
}

export default Footer;