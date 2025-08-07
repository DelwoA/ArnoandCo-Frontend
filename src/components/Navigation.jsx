import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 py-5 px-12">
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
          <Link to="/login">
            <Button className="rounded-full">Get started now</Button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
