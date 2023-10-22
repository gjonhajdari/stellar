import { Outlet } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-1 divide-x-2 divide-slate-100 overflow-hidden">
        <Sidebar />

        <div className="flex flex-1 flex-col divide-y-2 divide-slate-100">
          <Header />
          <div className="flex flex-1 overflow-y-scroll">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
