import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@ui/button";
import { Paths } from "@/resources/paths";

import logSrc from "@/public/assets/tr-logo-resize.png";

const Navbar: FC = () => {

  return (
    <header className="bg-muted">
      <div className="flex justify-between p-4 items-center container">
        <figure>
          <Link href={Paths.LANDING}>
            <Image
              src={logSrc}
              alt="Harisha Foundation.org"
              width={200} height={100}
              placeholder="blur" />
          </Link>
        </figure>
        <nav className="flex items-center gap-6">
          <menu>
            <ul className="flex gap-3 uppercase text-sm font-medium">
              <li><Link href={Paths.THE_ISSUE}>The Issue</Link></li>
              <li><Link href={Paths.ABOUT_US}>About Us</Link></li>
              <li><Link href={Paths.OUR_IMPACT}>Our Impact</Link></li>
              <li><Link href={Paths.GET_INVOLVED}>Get Involved</Link></li>
            </ul>
          </menu>
          <Button>
            Donate
          </Button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar;