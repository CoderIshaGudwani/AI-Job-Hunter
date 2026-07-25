import GlassCard from "../components/GlassCard";
import PageHeader from "../components/PageHeader";

export default function CoverLetter() {
  return (
    <div>
      <PageHeader
        title="Cover Letter"
        description="Generate tailored cover letters for each application — coming in Phase 2."
      />
      <GlassCard className="p-8 text-center">
        <p className="text-lg font-semibold text-white">Phase 2 Feature</p>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-400">
          Create personalized cover letters based on job descriptions, your
          experience, and company context using AI assistance.
        </p>
      </GlassCard>
    </div>
  );
}
