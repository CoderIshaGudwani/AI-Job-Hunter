import { motion } from "framer-motion";

const filters = [{ id: "remoteOnly", label: "Remote only", type: "toggle" }];

const experienceOptions = [
  { value: "all", label: "All levels" },
  { value: "mid", label: "Mid-level" },
  { value: "senior", label: "Senior+" },
];

const sortOptions = [
  { value: "match", label: "Best match" },
  { value: "date", label: "Most recent" },
  { value: "salary", label: "Salary" },
];

export default function FilterBar({
  filters: filterState,
  onFilterChange,
  resultCount,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="glass-panel flex flex-col gap-4 rounded-2xl p-4 sm:flex-row sm:items-center sm:justify-between"
    >
      <div className="flex flex-wrap items-center gap-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            onClick={() =>
              onFilterChange({
                ...filterState,
                [filter.id]: !filterState[filter.id],
              })
            }
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200 sm:text-sm ${
              filterState[filter.id]
                ? "bg-blue-500/15 text-blue-300 ring-1 ring-blue-500/30"
                : "bg-white/[0.03] text-zinc-400 ring-1 ring-white/[0.06] hover:bg-white/[0.06] hover:text-zinc-200"
            }`}
          >
            {filter.label}
          </button>
        ))}

        <select
          value={filterState.experience}
          onChange={(e) =>
            onFilterChange({ ...filterState, experience: e.target.value })
          }
          className="rounded-lg border-0 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-300 ring-1 ring-white/[0.06] transition-colors hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-blue-500/20 sm:text-sm"
        >
          {experienceOptions.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-zinc-900">
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center justify-between gap-3 sm:justify-end">
        <span className="text-xs text-zinc-500 sm:text-sm">
          {resultCount} {resultCount === 1 ? "role" : "roles"}
        </span>
        <select
          value={filterState.sort}
          onChange={(e) =>
            onFilterChange({ ...filterState, sort: e.target.value })
          }
          className="rounded-lg border-0 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-zinc-300 ring-1 ring-white/[0.06] transition-colors hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-blue-500/20 sm:text-sm"
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-zinc-900">
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </motion.div>
  );
}
