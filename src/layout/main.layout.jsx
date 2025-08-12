import Navigation from "@/components/Home/Navigation";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <div className="mt-5">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
