import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "ai-job-hunter-saved";

function readSavedIds() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function useSavedJobs() {
  const [savedIds, setSavedIds] = useState(readSavedIds);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedIds));
  }, [savedIds]);

  const isSaved = useCallback((jobId) => savedIds.includes(jobId), [savedIds]);

  const toggleSaved = useCallback((jobId) => {
    setSavedIds((prev) =>
      prev.includes(jobId)
        ? prev.filter((id) => id !== jobId)
        : [...prev, jobId],
    );
  }, []);

  return { savedIds, isSaved, toggleSaved };
}
