import { useParams, Link } from "react-router-dom";
import { getJobById } from "../services/jobService";

export default function JobDetails() {
  const { id } = useParams();

  const job = getJobById(id);

  if (!job) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-white">
          Job Not Found
        </h1>

        <Link
          to="/jobs"
          className="rounded-lg bg-blue-600 px-5 py-3 text-white"
        >
          Back to Jobs
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

        <h1 className="text-3xl font-bold text-white">
          {job.title}
        </h1>

        <p className="mt-2 text-lg text-slate-400">
          {job.company}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">

          <span className="rounded bg-slate-800 px-3 py-2 text-sm text-white">
            📍 {job.location}
          </span>

          <span className="rounded bg-slate-800 px-3 py-2 text-sm text-white">
            💰 {job.salary}
          </span>

          <span className="rounded bg-slate-800 px-3 py-2 text-sm text-white">
            💼 {job.experience}
          </span>

          <span className="rounded bg-blue-600 px-3 py-2 text-sm text-white">
            {job.aiMatchScore}% Match
          </span>

        </div>

      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

        <h2 className="mb-4 text-xl font-semibold text-white">
          Required Skills
        </h2>

        <div className="flex flex-wrap gap-2">
          {job.skills.map((skill) => (
            <span
              key={skill}
              className="rounded bg-slate-800 px-3 py-2 text-sm text-slate-200"
            >
              {skill}
            </span>
          ))}
        </div>

      </div>

      <div className="flex flex-wrap gap-4">

        <a
          href={job.applyUrl || "#"}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white"
        >
          Apply Now
        </a>

        <Link
          to="/jobs"
          className="rounded-lg bg-slate-700 px-6 py-3 font-semibold text-white"
        >
          Back to Jobs
        </Link>

      </div>

    </div>
  );
}