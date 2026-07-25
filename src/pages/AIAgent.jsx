import { useEffect, useState } from "react";

export default function AIAgent() {
  const [preferences, setPreferences] = useState({
    role: "React Developer",
    location: "Ludhiana",
    workType: "Hybrid",
    experience: "Fresher",
    salary: "18000",
  });

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("ai-agent-settings")) ||
      preferences;

    setPreferences(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "ai-agent-settings",
      JSON.stringify(preferences)
    );

    localStorage.setItem(
      "preferred-role",
      preferences.role
    );

    localStorage.setItem(
      "preferred-location",
      preferences.location
    );
  }, [preferences]);

  function change(e) {
    setPreferences({
      ...preferences,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="space-y-8">

      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

        <h1 className="text-3xl font-bold text-white">
          AI Job Agent
        </h1>

        <p className="mt-2 text-slate-400">
          Configure your job search once.
        </p>

      </div>

      <div className="grid gap-5 md:grid-cols-2">

        <input
          name="role"
          value={preferences.role}
          onChange={change}
          className="rounded-xl bg-slate-900 p-4 text-white"
          placeholder="Role"
        />

        <input
          name="location"
          value={preferences.location}
          onChange={change}
          className="rounded-xl bg-slate-900 p-4 text-white"
          placeholder="Location"
        />

        <select
          name="workType"
          value={preferences.workType}
          onChange={change}
          className="rounded-xl bg-slate-900 p-4 text-white"
        >
          <option>Remote</option>
          <option>Hybrid</option>
          <option>Onsite</option>
        </select>

        <select
          name="experience"
          value={preferences.experience}
          onChange={change}
          className="rounded-xl bg-slate-900 p-4 text-white"
        >
          <option>Fresher</option>
          <option>0-1 Years</option>
          <option>1-2 Years</option>
          <option>2-3 Years</option>
        </select>

        <input
          name="salary"
          value={preferences.salary}
          onChange={change}
          className="rounded-xl bg-slate-900 p-4 text-white"
          placeholder="Minimum Salary"
        />

      </div>

      <div className="rounded-xl border border-green-700 bg-green-900/20 p-6">

        <h2 className="text-xl font-bold text-green-400">
          ✅ Active Search
        </h2>

        <p className="mt-2 text-slate-300">
          {preferences.role}
        </p>

        <p className="text-slate-300">
          {preferences.location}
        </p>

        <p className="text-slate-300">
          {preferences.workType}
        </p>

        <p className="text-slate-300">
          ₹{preferences.salary}+
        </p>

      </div>
      <div className="rounded-xl border border-blue-700 bg-slate-900 p-6">

        <h2 className="text-2xl font-bold text-white mb-6">
          ⚡ Quick Actions
        </h2>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

          <button
            onClick={() => window.location.href = "/jobs"}
            className="rounded-xl bg-blue-600 p-4 font-bold text-white hover:bg-blue-500"
          >
            Browse Jobs
          </button>

          <button
            onClick={() => window.location.href = "/search-hub"}
            className="rounded-xl bg-green-600 p-4 font-bold text-white hover:bg-green-500"
          >
            Open Search Hub
          </button>

          <button
            onClick={() => window.location.href = "/applications"}
            className="rounded-xl bg-purple-600 p-4 font-bold text-white hover:bg-purple-500"
          >
            Applications
          </button>

          <button
            onClick={() => window.location.href = "/saved-jobs"}
            className="rounded-xl bg-orange-600 p-4 font-bold text-white hover:bg-orange-500"
          >
            Saved Jobs
          </button>

        </div>

      </div>
    </div>
  );
}