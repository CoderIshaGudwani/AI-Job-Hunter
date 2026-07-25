import PageHeader from "../components/PageHeader";
import StatCard from "../components/StatCard";
import { RecentJobsSection } from "../components/JobCard";
import AIInsightsCard from "../components/AIInsightsCard";
import { AI_INSIGHTS, getRecentJobs } from "../services/jobService";
import { getDashboardStats } from "../services/dashboardStats";
import UrgentHiring from "../components/UrgentHiring";

export default function Dashboard() {
  const recentJobs = getRecentJobs(4);

  const stats = getDashboardStats();

  const dashboardCards = [
    {
      id: "saved",
      label: "Saved Jobs",
      value: stats.savedJobs,
      change: "Stored locally",
      trend: "up",
      icon: "bookmark",
    },
    {
      id: "applied",
      label: "Applications",
      value: stats.applied,
      change: `${stats.total} tracked`,
      trend: "up",
      icon: "send",
    },
    {
      id: "interviews",
      label: "Interviews",
      value: stats.interviews,
      change: "Keep applying",
      trend: "neutral",
      icon: "calendar",
    },
    {
      id: "offers",
      label: "Offers",
      value: stats.offers,
      change: "Future goal 🚀",
      trend: "up",
      icon: "target",
    },
  ];

  return (
    <div>
      <PageHeader
        title="Welcome Back 👋"
        description="Let's get you a React / MERN job."
      />

      <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardCards.map((stat, index) => (
          <StatCard
            key={stat.id}
            {...stat}
            delay={index * 50}
          />
        ))}
      </section>
      <div className="mb-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">
              🎯 Today's Mission
            </h2>
            <p className="text-slate-400 mt-1">
              Consistency gets interviews.
            </p>
          </div>

          <div className="rounded-xl bg-blue-600 px-5 py-3">
            <span className="text-white font-bold">
              Goal: 10 Applications
            </span>
          </div>
        </div>

        <div className="mt-6 h-4 w-full rounded-full bg-slate-800">
          <div
            className="h-4 rounded-full bg-green-500 transition-all"
            style={{
              width: `${Math.min((stats.applied / 10) * 100, 100)}%`,
            }}
          />
        </div>

        <p className="mt-3 text-slate-300">
          {stats.applied}/10 Applications Completed Today
        </p>

      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <RecentJobsSection jobs={recentJobs} />
          <UrgentHiring />
        </div>
       
        <div className="xl:col-span-1">
          <AIInsightsCard insights={AI_INSIGHTS} />
        </div>

      </div>
    </div>
  );
}