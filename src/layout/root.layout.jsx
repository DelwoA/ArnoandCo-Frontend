import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";

const RootLayout = () => {
  return (
    <div className="">
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
