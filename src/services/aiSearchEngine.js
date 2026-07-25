import JOB_SOURCES from "./jobSources";

const DEFAULT_KEYWORDS = [
  "React Developer",
  "Frontend Developer",
  "MERN Developer",
  "JavaScript Developer",
  "Full Stack Developer",
];

const DEFAULT_LOCATIONS = [
  "Mohali",
  "Chandigarh",
  "Ludhiana",
  "Remote",
];

function buildUrl(template, keyword, location) {
  return template
    .replace("{keyword}", encodeURIComponent(keyword))
    .replace("{location}", encodeURIComponent(location));
}

export function generateSearchLinks(
  keywords = DEFAULT_KEYWORDS,
  locations = DEFAULT_LOCATIONS,
) {
  const links = [];

  JOB_SOURCES.forEach((source) => {
    if (!source.enabled) return;

    keywords.forEach((keyword) => {
      locations.forEach((location) => {
        links.push({
          id: crypto.randomUUID(),
          source: source.name,
          keyword,
          location,
          url: buildUrl(source.searchUrl, keyword, location),
        });
      });
    });
  });

  return links;
}

export function rankJobs(jobs = []) {
  return [...jobs].sort((a, b) => {
    const scoreA =
      (a.aiMatchScore || 0) +
      (a.urgentHiring ? 8 : 0) +
      (a.remote ? 4 : 0);

    const scoreB =
      (b.aiMatchScore || 0) +
      (b.urgentHiring ? 8 : 0) +
      (b.remote ? 4 : 0);

    return scoreB - scoreA;
  });
}

export function removeDuplicateJobs(jobs = []) {
  const seen = new Set();

  return jobs.filter((job) => {
    const key = `${job.title}-${job.company}-${job.location}`;

    if (seen.has(key)) return false;

    seen.add(key);
    return true;
  });
}

export function getRecommendedRoles() {
  return DEFAULT_KEYWORDS;
}

export function getRecommendedLocations() {
  return DEFAULT_LOCATIONS;
}