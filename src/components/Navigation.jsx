import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <div className="flex justify-between items-center bg-white py-3 px-12 mx-auto max-w-[1350px] rounded-full shadow-lg shadow-gray-800/3 sticky top-4 z-50">
      {/* Left side of the navigation bar */}
      <Link to="/">
        <img
          src="/logo-primary-transparent.png"
          alt="Logo"
          className="w-20 p-0"
        />
      </Link>

      {/* Center of the navigation bar */}
      <ul className="flex gap-4 space-x-6 text-slate-600 font-medium">
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

      {/* Right side of the navigation bar */}
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
  );
};

export default Navigation;
