import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import SavedJobs from "./pages/SavedJobs";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import CoverLetter from "./pages/CoverLetter";
import Settings from "./pages/Settings";
import AIAgent from "./pages/AIAgent.jsx"; 
import ApplicationTracker from "./pages/ApplicationTracker";
import JobSearchHub from "./pages/JobSearchHub";
import JobDetails from "./pages/JobDetails";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="jobs/:id" element={<JobDetails />} />
          <Route path="saved-jobs" element={<SavedJobs />} />
          <Route path="resume-analyzer" element={<ResumeAnalyzer />} />
          <Route path="cover-letter" element={<CoverLetter />} />
          <Route path="settings" element={<Settings />} />
          <Route path="ai-agent" element={<AIAgent />} /> {/* Add AIAgent route */}
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route
            path="/applications"
            element={<ApplicationTracker />}
          />
          <Route
            path="search-hub"
            element={<JobSearchHub />}
          />
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
