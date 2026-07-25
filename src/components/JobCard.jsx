import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CompanyLogo from "./CompanyLogo";
import { formatPostedDate } from "../services/jobService";

function MatchBadge({ score }) {
  const color =
    score >= 90
      ? "text-emerald-400 bg-emerald-500/10 ring-emerald-500/20"
      : score >= 80
        ? "text-blue-400 bg-blue-500/10 ring-blue-500/20"
        : "text-amber-400 bg-amber-500/10 ring-amber-500/20";

  return (
    <span
      className={`inline-flex rounded-lg px-2 py-1 text-xs font-semibold ring-1 ${color}`}
    >
      {score}% match
    </span>
  );
}

export default function JobCard({ job, index = 0, compact = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.05,
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -2 }}
    >
      <Link to={`/jobs/${job.id}`} className="block">
        <article className="glass-panel glass-panel-hover group rounded-2xl p-4 sm:p-5">
          <div className="flex gap-4">
            <CompanyLogo
              logo={job.companyLogo}
              company={job.company}
              size="lg"
            />

            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-base font-semibold text-white transition-colors group-hover:text-blue-300 sm:text-lg">
                    {job.title}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-zinc-400">
                    {job.company}
                  </p>
                </div>
                <MatchBadge score={job.aiMatchScore} />
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-zinc-500 sm:text-sm">
                <span>{job.location}</span>
                <span className="hidden sm:inline">·</span>
                <span>{job.salary}</span>
                <span className="hidden sm:inline">·</span>
                <span>{job.experience}</span>
                {job.remote && (
                  <>
                    <span className="hidden sm:inline">·</span>
                    <span className="rounded-md bg-emerald-500/10 px-1.5 py-0.5 text-emerald-400 ring-1 ring-emerald-500/20">
                      Remote
                    </span>
                  </>
                )}
              </div>

              {!compact && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {job.skills.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-white/[0.04] px-2 py-0.5 text-xs font-medium text-zinc-400 ring-1 ring-white/[0.06]"
                    >
                      {skill}
                    </span>
                  ))}
                  {job.skills.length > 4 && (
                    <span className="px-1 text-xs text-zinc-600">
                      +{job.skills.length - 4}
                    </span>
                  )}
                </div>
              )}

              <p className="mt-3 text-xs text-zinc-600">
                Posted {formatPostedDate(job.postedDate)}
              </p>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

export function JobCardList({ jobs, compact = false }) {
  if (jobs.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-panel rounded-2xl p-12 text-center"
      >
        <p className="text-sm font-medium text-zinc-400">
          No jobs match your filters.
        </p>
        <p className="mt-1 text-xs text-zinc-600">
          Try adjusting search or filter criteria.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="space-y-3">
      {jobs.map((job, index) => (
        <JobCard key={job.id} job={job} index={index} compact={compact} />
      ))}
    </div>
  );
}

export function RecentJobsSection({ jobs }) {
  return (
    <section>
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-white">
            Recent Jobs
          </h2>
          <p className="mt-1 text-sm text-zinc-500">
            Latest frontend roles matched to your profile
          </p>
        </div>
        <Link
          to="/jobs"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
        >
          View all
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
      <JobCardList jobs={jobs} compact />
    </section>
  );
}
