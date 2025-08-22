import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";

const RootLayout = () => {
  return (
    <div className="bg-gray-100">
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
