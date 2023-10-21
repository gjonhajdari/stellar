import { Outlet } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div>
      <Sidebar />
      <Header />

      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
