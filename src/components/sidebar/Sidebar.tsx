import {
  Briefcase,
  LayoutDashboard,
  LogOut,
  Receipt,
  Settings,
  Users,
} from "lucide-react";
import Logo from "../ui/Logo";
import SidebarLink from "./SidebarLink";
import { Button } from "../ui/button";

function Sidebar() {
  return (
    <aside className="z-40 flex h-screen flex-col px-6 py-6 sm:w-72">
      <Logo width={120} className="mx-auto mb-16 mt-10" />

      <div className="flex h-full flex-col justify-between">
        <div className="space-y-2">
          <SidebarLink to="/dashboard">
            <LayoutDashboard strokeWidth={1.7} />
            <span>Dashboard</span>
          </SidebarLink>

          <SidebarLink to="/roles">
            <Briefcase strokeWidth={1.7} />
            <span>Roles</span>
          </SidebarLink>

          <SidebarLink to="/employees">
            <Users strokeWidth={1.7} />
            <span>Employees</span>
          </SidebarLink>

          <SidebarLink to="/payroll">
            <Receipt strokeWidth={1.7} />
            <span>Payroll</span>
          </SidebarLink>

          <SidebarLink to="/settings">
            <Settings strokeWidth={1.7} />
            <span>Settngs</span>
          </SidebarLink>
        </div>

        <Button variant={"ghost"} className="flex items-center justify-start gap-3">
          <LogOut strokeWidth={1.7} />
          <span>Log out</span>
        </Button>
      </div>
    </aside>
  );
}

export default Sidebar;
