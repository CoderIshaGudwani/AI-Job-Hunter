const JOB_SOURCES = [
    {
      id: "linkedin",
      name: "LinkedIn",
      enabled: true,
      searchUrl:
        "https://www.linkedin.com/jobs/search/?keywords={keyword}&location={location}",
    },
    {
      id: "indeed",
      name: "Indeed",
      enabled: true,
      searchUrl:
        "https://in.indeed.com/jobs?q={keyword}&l={location}",
    },
    {
      id: "naukri",
      name: "Naukri",
      enabled: true,
      searchUrl:
        "https://www.naukri.com/{keyword}-jobs-in-{location}",
    },
    {
      id: "foundit",
      name: "Foundit",
      enabled: true,
      searchUrl:
        "https://www.foundit.in/srp/results?query={keyword}&locations={location}",
    },
    {
      id: "wellfound",
      name: "Wellfound",
      enabled: true,
      searchUrl:
        "https://wellfound.com/jobs",
    },
    {
      id: "internshala",
      name: "Internshala",
      enabled: true,
      searchUrl:
        "https://internshala.com/jobs/{keyword}-jobs/",
    },
    {
      id: "remoteok",
      name: "RemoteOK",
      enabled: true,
      searchUrl:
        "https://remoteok.com/remote-{keyword}-jobs",
    },
  ];
  
  export default JOB_SOURCES;