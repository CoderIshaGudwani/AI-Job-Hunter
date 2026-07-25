export default function JobSearchHub() {
    const role = localStorage.getItem("preferred-role") || "React Developer";
    const location = localStorage.getItem("preferred-location") || "Ludhiana";
  
    const searches = [
      {
        name: "LinkedIn",
        url: `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(role)}&location=${encodeURIComponent(location)}`
      },
      {
        name: "Naukri",
        url: `https://www.naukri.com/${encodeURIComponent(role)}-jobs-in-${encodeURIComponent(location)}`
      },
      {
        name: "Foundit",
        url: `https://www.foundit.in/srp/results?query=${encodeURIComponent(role)}&locations=${encodeURIComponent(location)}`
      },
      {
        name: "Indeed",
        url: `https://in.indeed.com/jobs?q=${encodeURIComponent(role)}&l=${encodeURIComponent(location)}`
      },
      {
        name: "Wellfound",
        url: `https://wellfound.com/jobs`
      },
      {
        name: "Cutshort",
        url: `https://cutshort.io/jobs`
      },
      {
        name: "Hirist",
        url: `https://www.hirist.com`
      },
      {
        name: "RemoteOK",
        url: `https://remoteok.com/remote-react-jobs`
      },
      {
        name: "Internshala",
        url: `https://internshala.com/jobs`
      },
      {
        name: "Google Jobs",
        url: `https://www.google.com/search?q=${encodeURIComponent(role+" jobs "+location)}`
      }
    ];
  
    function openAll() {
      searches.forEach(site => window.open(site.url, "_blank"));
    }
  
    return (
      <div className="space-y-6">
  
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
  
          <h1 className="text-3xl font-bold text-white">
            🚀 Job Search Hub
          </h1>
  
          <p className="mt-2 text-slate-400">
            One click opens every major job portal.
          </p>
  
        </div>
  
        <button
          onClick={openAll}
          className="rounded-xl bg-blue-600 px-6 py-4 text-lg font-bold text-white hover:bg-blue-500"
        >
          Open All Job Sites
        </button>
  
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
  
          {searches.map(site=>(
            <button
              key={site.name}
              onClick={()=>window.open(site.url,"_blank")}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6 text-left hover:border-blue-500"
            >
              <h2 className="text-xl font-bold text-white">
                {site.name}
              </h2>
  
              <p className="mt-2 text-slate-400">
                Search {role} jobs in {location}
              </p>
            </button>
          ))}
  
        </div>
  
      </div>
    );
  }