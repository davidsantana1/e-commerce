import { Outlet } from "react-router";
import NavBar from "./NavBar";

function AppLayout() {
  return (
    <div className="bg-brand-950 min-h-screen lg:p-8">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
