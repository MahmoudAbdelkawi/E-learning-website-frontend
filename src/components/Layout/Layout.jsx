import { useEffect } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Layout;
