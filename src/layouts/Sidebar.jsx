import { NavLink } from "react-router-dom";
import { APP_NAME, NAV_ITEMS } from "../utils/constants";
import Icon from "../components/Icon";

function SidebarNav({ onNavigate }) {
  return (
    <nav className="flex-1 space-y-1 px-3 py-4">
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.path === "/"}
          onClick={onNavigate}
          className={({ isActive }) =>
            `group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ${isActive
              ? "bg-blue-500/15 text-blue-300 ring-1 ring-blue-500/25"
              : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
            }`
          }
        >
          <Icon
            name={item.icon}
            className="h-5 w-5 shrink-0 transition-colors group-hover:text-blue-400"
          />
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-slate-800/80 bg-slate-950/95 backdrop-blur-xl transition-transform duration-300 lg:static lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-slate-800/80 px-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500 text-white shadow-lg shadow-blue-500/25">
              <Icon name="sparkles" className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">{APP_NAME}</p>
              <p className="text-xs text-slate-500">Phase 1</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white lg:hidden"
            aria-label="Close sidebar"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>
        </div>

        <SidebarNav onNavigate={onClose} />

        <div className="border-t border-slate-800/80 p-4">
          <div className="glass rounded-xl p-4">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Profile
            </p>
            <p className="mt-1 text-sm font-semibold text-white">ISHA GUDWANI</p>

            <p className="text-xs text-slate-400">
              React • MERN • Job Hunter
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
