import { Outlet } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="flex divide-x-2 divide-slate-100">
      <Sidebar />

      <div className="flex w-full flex-col divide-y-2 divide-slate-100">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
