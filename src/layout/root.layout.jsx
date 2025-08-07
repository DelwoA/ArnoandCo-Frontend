import { Outlet } from "react-router-dom";
import ContentWrapper from "@/components/ContentWrapper";

const RootLayout = () => {
  return (
    <div className="">
      <Outlet />
    </div>
  );
};

export default RootLayout;
