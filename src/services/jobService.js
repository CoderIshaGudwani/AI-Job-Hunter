import {
  jobs,
  AI_INSIGHTS,
} from "../data/jobs";

import { indianJobs } from "../data/indianJobs";

const allJobs = [...indianJobs, ...jobs];

export { AI_INSIGHTS };

export function getAllJobs() {
  return allJobs;
}

export function getJobById(id) {
  return allJobs.find((job) => job.id === id);
}

export function getRecentJobs(limit = 6) {
  return [...allJobs]
    .sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate))
    .slice(0, limit);
}

export function filterJobs(
  jobsList,
  {
    search = "",
    remoteOnly = false,
    experience = "all",
    sort = "match",
  },
) {
  let result = [...jobsList];

  if (search.trim()) {
    const query = search.toLowerCase();

    result = result.filter(
      (job) =>
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query) ||
        job.skills.some((skill) =>
          skill.toLowerCase().includes(query),
        ),
    );
  }

  if (remoteOnly) {
    result = result.filter((job) => job.remote);
  }

  if (experience === "fresher") {
    result = result.filter(
      (job) =>
        job.experience.includes("0") ||
        job.experience.toLowerCase().includes("fresh"),
    );
  }

  if (experience === "mid") {
    result = result.filter(
      (job) =>
        job.experience.includes("1") ||
        job.experience.includes("2") ||
        job.experience.includes("3"),
    );
  }

  if (experience === "senior") {
    result = result.filter(
      (job) =>
        job.experience.includes("4") ||
        job.experience.includes("5") ||
        job.experience.includes("6"),
    );
  }

  switch (sort) {
    case "match":
      result.sort((a, b) => b.aiMatchScore - a.aiMatchScore);
      break;

    case "date":
      result.sort(
        (a, b) =>
          new Date(b.postedDate) - new Date(a.postedDate),
      );
      break;

    case "salary":
      result.sort((a, b) => b.aiMatchScore - a.aiMatchScore);
      break;

    default:
      break;
  }

  return result;
}

export function getSavedJobs() {
  try {
    const savedIds =
      JSON.parse(
        localStorage.getItem("ai-job-hunter-saved"),
      ) || [];

    return allJobs.filter((job) =>
      savedIds.includes(job.id),
    );
  } catch (error) {
    console.error(error);
    return [];
  }
}

export function formatPostedDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();

  const diffDays = Math.floor(
    (now - date) / (1000 * 60 * 60 * 24),
  );

  if (diffDays <= 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 14) return "1 week ago";

  return `${Math.floor(diffDays / 7)} weeks ago`;
}