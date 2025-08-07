import Navigation from "@/components/Navigation";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-blue-200 ">
      <Navigation />
      <div className="mt-10 ">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
