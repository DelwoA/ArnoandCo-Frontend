/* Navigation.jsx */
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-4 z-50 px-4 sm:px-6 lg:px-7">
      <nav>
        {/* TODO: Create a new category as a brand that i am first in. The category is: first ever IT company to feature instant contact and self payments (like fiverr). [source: https://www.instagram.com/reel/DM5EqooNNOP/?igsh=OGl3ZjhobzUwNjls] */}
        {/* TODO: 1344px is the max-w for the desktop menu during start, then reduce to 1000px as scrolling takes place */}
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
            <li className="hover:text-sky-700">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-sky-700">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-sky-700">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="hover:text-sky-700">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          {/* right buttons */}
          <ul className="flex gap-4">
            <li>
              <Link to="/limited-special">
                <Button variant="ghost" className="rounded-lg text-slate-900">
                  Limited special
                </Button>
              </Link>
            </li>
            <li>
              <Button asChild className="rounded-full">
                <Link to="/get-started-now">Get started now</Link>
              </Button>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <Popover>
          {/* Pill wrapper */}
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

            {/* Invisible, full-width anchor (ONE child only) */}
            <PopoverAnchor asChild>
              <div
                aria-hidden
                className="absolute inset-x-0 top-full h-0 pointer-events-none"
              />
            </PopoverAnchor>

            {/* Only this toggles the popover */}
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

          {/* Popover content */}
          <PopoverContent
            side="bottom"
            align="center"
            sideOffset={6}
            collisionPadding={16}
            // Make the content match the pill’s responsive width
            className="p-0 overflow-hidden rounded-2xl max-w-[1023px] w-[90vw] bg-gradient-to-b from-white/30 via-white/20 to-white/10 backdrop-blur-md backdrop-saturate-150 ring-[0.5px] ring-black/10 shadow-xl"
          >
            <div className="lg:hidden">
              <ul className="flex flex-col gap-2 md:gap-3 py-3 md:py-3 px-2 text-base sm:text-lg md:text-xl text-slate-800">
                <li>
                  <Link to="/" className="block px-6 py-2 md:py-3">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="block px-6 py-2 md:py-3">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="block px-6 py-2 md:py-3">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="block px-6 py-2 md:py-3">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/limited-special"
                    className="block px-6 py-2 md:py-3"
                  >
                    Limited special
                  </Link>
                </li>
                <li>
                  <Button
                    className="rounded-full w-full px-6 py-5 md:py-6 justify-start text-base sm:text-lg md:text-xl"
                    asChild
                  >
                    <Link to="/get-started-now" className="block">
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
