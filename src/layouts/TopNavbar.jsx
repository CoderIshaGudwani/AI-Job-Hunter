import Icon from "../components/Icon";

export default function TopNavbar({ onMenuClick, title = "Dashboard" }) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            onClick={onMenuClick}
            className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white lg:hidden"
            aria-label="Open sidebar"
          >
            <Icon name="menu" className="h-5 w-5" />
          </button>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white sm:text-base">
              {title}
            </p>
            <p className="hidden text-xs text-slate-500 sm:block">
              Sunday, July 19, 2026
            </p>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end gap-2 sm:gap-3">
          <div className="relative hidden max-w-md flex-1 sm:block">
            <Icon
              name="search"
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
            />
            <input
              type="search"
              placeholder="Search jobs, companies, skills..."
              className="w-full rounded-xl border border-slate-800 bg-slate-900/80 py-2 pl-10 pr-4 text-sm text-slate-200 placeholder:text-slate-500 transition-colors focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <button
            type="button"
            className="relative rounded-xl p-2.5 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
            aria-label="Notifications"
          >
            <Icon name="bell" className="h-5 w-5" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-blue-500 ring-2 ring-slate-950" />
          </button>

          <div className="hidden items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 px-3 py-1.5 sm:flex">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-xs font-bold text-white">
              IG
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-white">ISHA GUDWANI</p>
              <p className="text-xs text-slate-500">gudwaniisha@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
