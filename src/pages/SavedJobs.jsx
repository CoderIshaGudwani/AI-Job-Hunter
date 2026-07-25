import PageHeader from "../components/PageHeader";
import { JobCardList } from "../components/JobCard";
import { getSavedJobs } from "../services/jobService";

export default function SavedJobs() {
  const jobs = getSavedJobs();

  return (
    <div>
      <PageHeader
        title="Saved Jobs"
        description="Roles you've bookmarked for later review and application."
      />
      <JobCardList jobs={jobs} />
    </div>
  );
}
