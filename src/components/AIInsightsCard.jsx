import GlassCard from "./GlassCard";
import Icon from "./Icon";

const priorityStyles = {
  high: "border-l-emerald-500",
  medium: "border-l-blue-500",
  action: "border-l-amber-500",
};

export default function AIInsightsCard({ insights }) {
  return (
    <GlassCard className="h-full p-5 sm:p-6">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20">
          <Icon name="sparkles" className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white">AI Insights</h2>
          <p className="text-sm text-slate-400">
            Personalized recommendations for your search
          </p>
        </div>
      </div>

      <ul className="space-y-3">
        {insights.map((insight, index) => (
          <li
            key={insight.id}
            className={`animate-slide-up rounded-xl border-l-4 bg-slate-900/50 p-4 ${priorityStyles[insight.priority]}`}
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <h3 className="text-sm font-semibold text-white">
              {insight.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
              {insight.description}
            </p>
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}
