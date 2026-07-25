import { motion } from "framer-motion";
import Icon from "./Icon";

const priorityStyles = {
  high: "border-emerald-500/50 bg-emerald-500/[0.04]",
  medium: "border-blue-500/50 bg-blue-500/[0.04]",
  action: "border-amber-500/50 bg-amber-500/[0.04]",
};

const priorityLabels = {
  high: "High impact",
  medium: "Trending",
  action: "Action needed",
};

export default function AIInsightCard({ insights }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.45 }}
      className="glass-panel h-full rounded-2xl p-6"
    >
      <div className="mb-6 flex items-center gap-3">
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-blue-400 ring-1 ring-blue-500/20"
        >
          <Icon name="sparkles" className="h-5 w-5" />
        </motion.div>
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-white">
            AI Insights
          </h2>
          <p className="text-sm text-zinc-500">Personalized for your search</p>
        </div>
      </div>

      <ul className="space-y-3">
        {insights.map((insight, index) => (
          <motion.li
            key={insight.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 + index * 0.08 }}
            whileHover={{ x: 4 }}
            className={`rounded-xl border-l-2 p-4 ${priorityStyles[insight.priority]}`}
          >
            <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
              {priorityLabels[insight.priority]}
            </span>
            <h3 className="mt-1 text-sm font-semibold text-white">
              {insight.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
              {insight.description}
            </p>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
