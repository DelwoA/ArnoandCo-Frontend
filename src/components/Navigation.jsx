/* Navigation.jsx */
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => (
  <header className="sticky top-4 z-50 px-4 sm:px-6 lg:px-7">
    <div className="mx-auto max-w-[1344px] flex items-center justify-between rounded-full py-3 px-16 bg-gradient-to-b from-white/30 via-white/20 to-white/10 backdrop-blur-md backdrop-saturate-150 ring-1 ring-white/40 shadow-lg shadow-black/10 border-gray-100 border-1">
      {/* logo */}
      <Link to="/">
        <img src="/logo-primary-transparent.png" alt="Logo" className="w-20" />
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
  </header>
);

export default Navigation;
