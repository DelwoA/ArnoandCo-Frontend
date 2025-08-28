import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
} from "@/components/ui/popover";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6 lg:px-7">
      <nav>
        {/* TODO: Create a new category as a brand that i am first in. The category is: first ever IT company to feature instant contact and self payments (like fiverr). [source: https://www.instagram.com/reel/DM5EqooNNOP/?igsh=OGl3ZjhobzUwNjls] */}
        {/* TODO: 1344px is the max-w for the desktop menu during start, then reduce to 1000px as scrolling takes place */}

        {/* TODO: Mobile view nav bar, after tapping on link, the nav drop down does not close automatically. Fix it! */}
        <div className="mx-auto max-w-[1344px] hidden lg:flex items-center justify-between rounded-full py-3 px-16 bg-gradient-to-b from-white/30 via-white/20 to-white/10 backdrop-blur-md backdrop-saturate-150 ring-1 ring-white/40 shadow-lg shadow-black/10 border-gray-200 border-1">
          {/* logo */}
          <Link to="/">
            <img
              src="/logo-primary-transparent.png"
              alt="Logo"
              className="w-20"
            />
          </Link>

          {/* mid links */}
          <ul className="flex space-x-6 text-slate-600 font-medium">
            <li className="">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-sky-600 hover:text-sky-700 underline underline-offset-5"
                    : "text-slate-600 hover:text-sky-700"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="hover:text-sky-700">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-sky-600 hover:text-sky-700 underline underline-offset-5"
                    : "text-slate-600 hover:text-sky-700"
                }
              >
                About
              </NavLink>
            </li>
            {/* TODO: Add portfolio link later when ready. */}
            {/* <li className="hover:text-sky-700">
              <Link to="/portfolio">Portfolio</Link>
            </li> */}
            <li className="hover:text-sky-700">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-sky-600 hover:text-sky-700 underline underline-offset-5"
                    : "text-slate-600 hover:text-sky-700 text-base"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* right buttons */}
          <ul className="flex gap-4">
            <li>
              <Button
                asChild
                variant="ghost"
                className="rounded-lg text-base
                         text-slate-600 hover:text-sky-700
                         aria-[current=page]:text-sky-600
                         aria-[current=page]:underline aria-[current=page]:underline-offset-5"
              >
                <NavLink to="/limited-special">Limited special</NavLink>
              </Button>
            </li>
            <li>
              <Button
                asChild
                className="rounded-full bg-[#071b31] hover:bg-[#071b31]/88 transition-all duration-300 ease-in-out"
              >
                <Link to="/get-started-now">Get started now</Link>
              </Button>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <Popover open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          {/* Pill wrapper */}
          <PopoverAnchor>
            <div
              className="relative mx-[5px] max-w-[1023px] lg:hidden
                 flex items-center justify-between
                 rounded-full py-3 px-8
                 bg-gradient-to-b from-white/30 via-white/20 to-white/10
                 backdrop-blur-md backdrop-saturate-150
                 ring-1 ring-white/40 shadow-lg shadow-black/10 border-gray-200 border-1"
            >
              {/* Logo */}
              <Link to="/">
                <img
                  src="/logo-primary-transparent.png"
                  alt="Logo"
                  className="w-20"
                />
              </Link>

              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  className="aspect-square !p-0"
                  aria-label="Open menu"
                >
                  <Menu className="size-8" />
                </Button>
              </PopoverTrigger>
            </div>
          </PopoverAnchor>

          {/* Popover content */}
          <PopoverContent
            side="bottom"
            align="center"
            sideOffset={6}
            // Make the content match the pill’s responsive width
            className="p-0 overflow-hidden rounded-2xl max-w-[1023px] w-[90vw] bg-gradient-to-b from-white/30 via-white/20 to-white/10 backdrop-blur-md backdrop-saturate-150 ring-[0.5px] ring-black/10 shadow-xl data-[state=open]:duration-200 data-[state=open]:ease-out data-[state=closed]:duration-300 data-[state=closed]:ease-in-out"
          >
            <div className="lg:hidden">
              <ul className="flex flex-col gap-2 md:gap-3 py-3 md:py-3 px-2 text-base sm:text-lg md:text-xl text-slate-800">
                <li>
                  <Link
                    to="/"
                    className="block px-6 py-2 md:py-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="block px-6 py-2 md:py-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                {/* TODO: Add portfolio link later when ready. */}
                {/* <li>
                  <Link
                    to="/portfolio"
                    className="block px-6 py-2 md:py-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Portfolio
                  </Link>
                </li> */}
                <li>
                  <Link
                    to="/contact"
                    className="block px-6 py-2 md:py-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/limited-special"
                    className="block px-6 py-2 md:py-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Limited special
                  </Link>
                </li>
                <li>
                  <Button
                    className="rounded-full w-full px-6 py-5 md:py-6 justify-start text-base sm:text-lg md:text-xl"
                    asChild
                  >
                    <Link
                      to="/get-started-now"
                      className="block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get started now
                    </Link>
                  </Button>
                </li>
              </ul>
            </div>
          </PopoverContent>
        </Popover>
      </nav>
    </header>
  );
};

export default Navigation;
