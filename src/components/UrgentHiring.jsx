import { getAllJobs } from "../services/jobService";

export default function UrgentHiring() {
  const jobs = getAllJobs();

  const urgentJobs = jobs
    .filter(
      (job) =>
        job.aiMatchScore >= 85 ||
        job.location?.includes("Ludhiana") ||
        job.location?.includes("Mohali") ||
        job.location?.includes("Chandigarh") ||
        job.remote
    )
    .slice(0, 8);

  return (
    <div className="mt-8">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-3xl font-bold text-white">
          🚨 Priority Jobs
        </h2>

        <span className="rounded-full bg-red-600 px-4 py-2 text-sm font-bold text-white">
          Apply Today
        </span>

      </div>

      <div className="grid gap-5 md:grid-cols-2">

        {urgentJobs.map((job) => (

          <div
            key={job.id}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500"
          >

            <div className="flex justify-between">

              <div>

                <h2 className="text-xl font-bold text-white">
                  {job.title}
                </h2>

                <p className="text-slate-400">
                  {job.company}
                </p>

              </div>

              <div className="rounded-full bg-green-600 px-3 py-1 text-sm font-bold text-white">
                {job.aiMatchScore}%
              </div>

            </div>

            <div className="mt-5 space-y-2 text-slate-300">

              <p>📍 {job.location}</p>

              <p>💰 {job.salary}</p>

              <p>💼 {job.experience}</p>

            </div>

            <div className="mt-6 flex gap-3">

              <button
                className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-500"
              >
                View
              </button>

              <button
                className="rounded-lg bg-green-600 px-5 py-2 text-white hover:bg-green-500"
              >
                Save
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}