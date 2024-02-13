import { FC } from "react";
import Link from "next/link";
import { Button } from "@ui/button";
import { Paths } from "@/resources/paths";

const Navbar: FC = () => {

  return (
    <header className="bg-muted">
      <div className="flex justify-between p-4 items-center container">
        <figure>
          <Link href={Paths.LANDING}>
            Harisha Foundation
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