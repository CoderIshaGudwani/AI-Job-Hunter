import GlassCard from "../components/GlassCard";
import PageHeader from "../components/PageHeader";

const settingsSections = [
  {
    title: "Job Preferences",
    items: [
      "Target role: Frontend Developer",
      "Location: Remote & Hybrid",
      "Salary range: $140k – $200k",
    ],
  },
  {
    title: "Notifications",
    items: [
      "New job matches: Enabled",
      "Interview reminders: Enabled",
      "Weekly digest: Enabled",
    ],
  },
  {
    title: "Account",
    items: [
      "Email: alex.morgan@email.com",
      "Plan: Free (Phase 1)",
      "Data export: Available in Phase 2",
    ],
  },
];

export default function Settings() {
  return (
    <div>
      <PageHeader
        title="Settings"
        description="Manage your job search preferences and account settings."
      />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {settingsSections.map((section) => (
          <GlassCard key={section.title} className="p-5 sm:p-6">
            <h2 className="text-base font-semibold text-white">
              {section.title}
            </h2>
            <ul className="mt-4 space-y-3">
              {section.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg bg-slate-900/50 px-3 py-2.5 text-sm text-slate-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
