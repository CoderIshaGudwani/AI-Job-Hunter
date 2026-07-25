export const APP_NAME = "AI Job Hunter";

export const NAV_ITEMS = [
  {
    label: "Dashboard",
    path: "/",
    icon: "dashboard",
  },
  {
    label: "Jobs",
    path: "/jobs",
    icon: "jobs",
  },
  {
    label: "Saved Jobs",
    path: "/saved-jobs",
    icon: "saved",
  },
  {
    label: "Resume Analyzer",
    path: "/resume-analyzer",
    icon: "resume",
  },
  {
    label: "Cover Letter",
    path: "/cover-letter",
    icon: "cover",
  },
  {
    label: "Applications",
    path: "/applications",
    icon: "briefcase",
  },

  {
    label: "AI Agent",
    path: "/ai-agent",
    icon: "sparkles",
  },
  {
    label: "Search Hub",
    path: "/search-hub",
    icon: "search",
  },
  {
    label: "Settings",
    path: "/settings",
    icon: "settings",
  },
];

export const DASHBOARD_STATS = [
  {
    id: "applications",
    label: "Applications Sent",
    value: "24",
    change: "+6 this week",
    trend: "up",
    icon: "send",
  },
  {
    id: "interviews",
    label: "Interviews Scheduled",
    value: "3",
    change: "2 upcoming",
    trend: "neutral",
    icon: "calendar",
  },
  {
    id: "saved",
    label: "Saved Jobs",
    value: "12",
    change: "+4 new matches",
    trend: "up",
    icon: "bookmark",
  },
  {
    id: "match-score",
    label: "Avg Match Score",
    value: "87%",
    change: "+5% vs last month",
    trend: "up",
    icon: "target",
  },
];
