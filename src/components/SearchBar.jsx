import { motion } from "framer-motion";

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search jobs, companies, skills...",
  className = "",
  compact = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative ${className}`}
    >
      <svg
        className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full rounded-xl border border-white/[0.06] bg-white/[0.03] text-zinc-100 placeholder:text-zinc-500 transition-all duration-200 focus:border-blue-500/40 focus:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-blue-500/15 ${
          compact ? "py-2 pl-10 pr-4 text-sm" : "py-2.5 pl-10 pr-4 text-sm"
        }`}
      />
    </motion.div>
  );
}
