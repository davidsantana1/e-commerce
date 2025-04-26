import { Outlet } from "react-router";
import NavBar from "./NavBar";

function AppLayout() {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#e9eced] to-[#939fa7] lg:p-8">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
