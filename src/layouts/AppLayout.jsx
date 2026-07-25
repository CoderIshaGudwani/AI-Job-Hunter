import { Outlet, useLocation } from "react-router-dom";
import { useSidebar } from "../hooks/useSidebar";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";
import { NAV_ITEMS } from "../utils/constants";

function getPageTitle(pathname) {
  const match = NAV_ITEMS.find(
    (item) =>
      item.path === pathname ||
      (item.path !== "/" && pathname.startsWith(item.path)),
  );
  return match?.label ?? "Dashboard";
}

export default function AppLayout() {
  const { isOpen, open, close } = useSidebar();
  const location = useLocation();
  const pageTitle = getPageTitle(location.pathname);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-black via-slate-950 to-slate-900">
      <Sidebar isOpen={isOpen} onClose={close} />

      <div className="flex min-w-0 flex-1 flex-col">
        <TopNavbar onMenuClick={open} title={pageTitle} />

        <main className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl animate-fade-in">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
