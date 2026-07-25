import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { APP_NAME, NAV_ITEMS } from "../utils/constants";
import Icon from "./Icon";

function SidebarNav({ onNavigate }) {
  return (
    <nav className="flex-1 space-y-0.5 px-3 py-4">
      {NAV_ITEMS.map((item, index) => (
        <motion.div
          key={item.path}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.05 + index * 0.04 }}
        >
          <NavLink
            to={item.path}
            end={item.path === "/"}
            onClick={onNavigate}
            className={({ isActive }) =>
              `group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium transition-all duration-200 ${
                isActive
                  ? "bg-white/[0.06] text-white"
                  : "text-zinc-500 hover:bg-white/[0.03] hover:text-zinc-300"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.span
                    layoutId="sidebar-active"
                    className="absolute inset-0 rounded-xl bg-blue-500/10 ring-1 ring-blue-500/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon
                  name={item.icon}
                  className={`relative h-[18px] w-[18px] shrink-0 transition-colors ${
                    isActive
                      ? "text-blue-400"
                      : "text-zinc-500 group-hover:text-zinc-300"
                  }`}
                />
                <span className="relative">{item.label}</span>
              </>
            )}
          </NavLink>
        </motion.div>
      ))}
    </nav>
  );
}

function SidebarContent({ onClose, showClose = false }) {
  return (
    <>
      <div className="flex h-14 items-center justify-between px-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 shadow-lg shadow-blue-500/20">
            <Icon name="sparkles" className="h-4 w-4 text-white" />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-tight text-white">
              {APP_NAME}
            </p>
            <p className="text-[10px] font-medium uppercase tracking-wider text-zinc-600">
              Premium
            </p>
          </div>
        </div>
        {showClose && (
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-zinc-500 transition-colors hover:bg-white/[0.06] hover:text-white"
            aria-label="Close sidebar"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>
        )}
      </div>

      <SidebarNav onNavigate={onClose} />

      <div className="border-t border-white/[0.06] p-3">
        <div className="glass-panel rounded-xl p-3.5">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-xs font-bold text-white">
              AM
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-white">
              ISHA GUDWANI
              </p>
              <p className="truncate text-xs text-zinc-500">React • MERN Developer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <motion.aside
        initial={false}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "spring", damping: 28, stiffness: 320 }}
        className="fixed inset-y-0 left-0 z-50 flex w-[260px] flex-col border-r border-white/[0.06] bg-[#050505]/95 backdrop-blur-2xl lg:hidden"
      >
        <SidebarContent onClose={onClose} showClose />
      </motion.aside>

      <aside className="hidden h-screen w-[260px] shrink-0 flex-col border-r border-white/[0.06] bg-[#050505]/80 backdrop-blur-2xl lg:flex">
        <SidebarContent />
      </aside>
    </>
  );
}
