import { useEffect, useState } from "react";

const STORAGE_KEY = "application-tracker";

export default function ApplicationTracker() {
  const [applications, setApplications] = useState([]);
  const [form, setForm] = useState({
    company: "",
    role: "",
    location: "",
    source: "LinkedIn",
    status: "Saved",
    salary: "",
    notes: "",
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    setApplications(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(applications));
  }, [applications]);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function addApplication() {
    if (!form.company || !form.role) return;

    setApplications([
      {
        id: Date.now(),
        ...form,
        date: new Date().toLocaleDateString(),
      },
      ...applications,
    ]);

    setForm({
      company: "",
      role: "",
      location: "",
      source: "LinkedIn",
      status: "Saved",
      salary: "",
      notes: "",
    });
  }

  function remove(id) {
    setApplications(applications.filter((a) => a.id !== id));
  }

  return (
    <div className="space-y-6">

      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">

        <h1 className="text-3xl font-bold text-white">
          Application Tracker
        </h1>

        <p className="text-slate-400 mt-2">
          Track every company you apply to.
        </p>

      </div>

      <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 grid gap-4 md:grid-cols-2">

        <input
          name="company"
          placeholder="Company"
          value={form.company}
          onChange={handleChange}
          className="rounded-xl bg-slate-950 border border-slate-700 p-3 text-white"
        />

        <input
          name="role"
          placeholder="Role"
          value={form.role}
          onChange={handleChange}
          className="rounded-xl bg-slate-950 border border-slate-700 p-3 text-white"
        />

        <input
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          className="rounded-xl bg-slate-950 border border-slate-700 p-3 text-white"
        />

        <input
          name="salary"
          placeholder="Salary"
          value={form.salary}
          onChange={handleChange}
          className="rounded-xl bg-slate-950 border border-slate-700 p-3 text-white"
        />

        <select
          name="source"
          value={form.source}
          onChange={handleChange}
          className="rounded-xl bg-slate-950 border border-slate-700 p-3 text-white"
        >
          <option>LinkedIn</option>
          <option>Naukri</option>
          <option>Indeed</option>
          <option>Foundit</option>
          <option>Referral</option>
        </select>

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="rounded-xl bg-slate-950 border border-slate-700 p-3 text-white"
        >
          <option>Saved</option>
          <option>Applied</option>
          <option>Interview</option>
          <option>Rejected</option>
          <option>Offer</option>
        </select>

        <textarea
          name="notes"
          rows="3"
          placeholder="Notes..."
          value={form.notes}
          onChange={handleChange}
          className="md:col-span-2 rounded-xl bg-slate-950 border border-slate-700 p-3 text-white"
        />

        <button
          onClick={addApplication}
          className="md:col-span-2 rounded-xl bg-blue-600 hover:bg-blue-500 p-3 text-white font-semibold"
        >
          Add Application
        </button>

      </div>

      <div className="space-y-4">

        {applications.map((job) => (
          <div
            key={job.id}
            className="rounded-2xl bg-slate-900 border border-slate-800 p-5"
          >
            <div className="flex justify-between items-start">

              <div>

                <h3 className="text-xl text-white font-bold">
                  {job.company}
                </h3>

                <p className="text-slate-300">
                  {job.role}
                </p>

                <p className="text-slate-500 mt-2">
                  {job.location}
                </p>

                <p className="text-slate-500">
                  {job.source}
                </p>

                <p className="text-slate-400">
                  {job.salary}
                </p>

                <p className="text-green-400 mt-2">
                  {job.status}
                </p>

                <p className="text-slate-500 mt-2">
                  {job.notes}
                </p>

              </div>

              <button
                onClick={() => remove(job.id)}
                className="text-red-400"
              >
                Delete
              </button>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
}