import { motion } from "framer-motion";
import SearchBar from "./SearchBar";
import Icon from "./Icon";

export default function TopNavbar({
  onMenuClick,
  title = "Dashboard",
  searchValue = "",
  onSearchChange,
  showSearch = true,
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/[0.06] bg-[#050505]/80 backdrop-blur-2xl">
      <div className="flex h-14 items-center gap-3 px-4 sm:gap-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-lg p-2 text-zinc-500 transition-colors hover:bg-white/[0.06] hover:text-white lg:hidden"
          aria-label="Open sidebar"
        >
          <Icon name="menu" className="h-5 w-5" />
        </button>

        <div className="min-w-0 flex-1">
          <motion.p
            key={title}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="truncate text-sm font-semibold tracking-tight text-white sm:text-[15px]"
          >
            {title}
          </motion.p>
        </div>

        {showSearch && onSearchChange && (
          <div className="hidden max-w-sm flex-1 md:block">
            <SearchBar value={searchValue} onChange={onSearchChange} compact />
          </div>
        )}

        <div className="flex items-center gap-1.5 sm:gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="relative rounded-xl p-2 text-zinc-500 transition-colors hover:bg-white/[0.06] hover:text-white"
            aria-label="Notifications"
          >
            <Icon name="bell" className="h-5 w-5" />
            <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 ring-2 ring-[#050505]" />
          </motion.button>

          <div className="hidden items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.03] py-1 pl-1 pr-3 sm:flex">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-[10px] font-bold text-white">
              IG
            </div>
            <div className="hidden lg:block">
              <p className="text-xs font-medium text-white">ISHA GUDWANI</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
