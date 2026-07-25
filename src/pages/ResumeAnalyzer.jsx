import GlassCard from "../components/GlassCard";
import PageHeader from "../components/PageHeader";

export default function ResumeAnalyzer() {
  return (
    <div>
      <PageHeader
        title="Resume Analyzer"
        description="AI-powered resume scoring and keyword optimization — coming in Phase 2."
      />
      <GlassCard className="p-8 text-center">
        <p className="text-lg font-semibold text-white">Phase 2 Feature</p>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-400">
          Upload your resume to get match scores, skill gap analysis, and
          tailored suggestions for frontend developer roles.
        </p>
      </GlassCard>
    </div>
  );
}
