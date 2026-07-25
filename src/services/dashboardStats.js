export function getDashboardStats() {
    const saved =
      JSON.parse(localStorage.getItem("ai-job-hunter-saved")) || [];
  
    const applications =
      JSON.parse(localStorage.getItem("application-tracker")) || [];
  
    return {
      savedJobs: saved.length,
      applied: applications.filter(
        (a) => a.status === "Applied"
      ).length,
      interviews: applications.filter(
        (a) => a.status === "Interview"
      ).length,
      offers: applications.filter(
        (a) => a.status === "Offer"
      ).length,
      total: applications.length,
    };
  }