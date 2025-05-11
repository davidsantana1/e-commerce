import { Outlet } from "react-router";
import NavBar from "./NavBar";
import MobileNavBar from "./MobileNavBar";

function AppLayout() {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#e9eced] to-[#bec5ca]">
      <NavBar />
      <MobileNavBar />
      <div className="lg:p-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
