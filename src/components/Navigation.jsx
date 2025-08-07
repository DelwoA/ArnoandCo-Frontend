import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white py-5 px-12">
      {/* Left side of the navigation bar */}
      <Link to="/">
        <img
          src="/logo-primary-transparent.png"
          alt="Logo"
          className="w-20 p-0"
        />
      </Link>

      {/* Center of the navigation bar */}
      <ul className="flex gap-4 space-x-6">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
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
