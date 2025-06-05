import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";

function Layout() {
  return (
    <div className="bg-grid-svg min-h-screen  ">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
