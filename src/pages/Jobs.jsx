import { useMemo, useState } from "react";

import PageHeader from "../components/PageHeader";
import SearchBar from "../components/SearchBar";
import { JobCardList } from "../components/JobCard";

import {
  getAllJobs,
  filterJobs,
} from "../services/jobService";

export default function Jobs() {
  const [search, setSearch] = useState("");

  const jobs = getAllJobs();

  const filteredJobs = useMemo(() => {
    return filterJobs(jobs, {
      search,
      remoteOnly: false,
      experience: "all",
      sort: "match",
    });
  }, [jobs, search]);

  return (
    <div className="space-y-6">

      <PageHeader
        title="Jobs"
        description="Frontend • React • MERN • JavaScript • Full Stack"
      />

      <SearchBar
        value={search}
        onChange={setSearch}
        placeholder="Search React, MERN, Company, Location..."
      />

      <JobCardList jobs={filteredJobs} />

    </div>
  );
}