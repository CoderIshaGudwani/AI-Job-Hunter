import { motion } from "framer-motion";
import { fadeUpItem } from "../utils/animations";

export function Skeleton({ className = "" }) {
  return (
    <div
      className={`skeleton-shimmer rounded-lg bg-white/[0.04] ${className}`}
    />
  );
}

export function StatCardSkeleton() {
  return (
    <div className="glass-panel rounded-2xl p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1 space-y-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-9 w-16" />
          <Skeleton className="h-3 w-28" />
        </div>
        <Skeleton className="h-11 w-11 rounded-xl" />
      </div>
    </div>
  );
}

export function JobCardSkeleton() {
  return (
    <div className="glass-panel rounded-2xl p-5">
      <div className="flex gap-4">
        <Skeleton className="h-12 w-12 shrink-0 rounded-xl" />
        <div className="min-w-0 flex-1 space-y-3">
          <Skeleton className="h-5 w-3/5" />
          <Skeleton className="h-4 w-2/5" />
          <div className="flex gap-2">
            <Skeleton className="h-6 w-16 rounded-md" />
            <Skeleton className="h-6 w-20 rounded-md" />
            <Skeleton className="h-6 w-14 rounded-md" />
          </div>
        </div>
        <Skeleton className="hidden h-8 w-14 sm:block" />
      </div>
    </div>
  );
}

export function DashboardSkeleton() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <Skeleton className="h-9 w-48" />
        <Skeleton className="h-4 w-96 max-w-full" />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <StatCardSkeleton key={i} />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="space-y-3 xl:col-span-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <JobCardSkeleton key={i} />
          ))}
        </div>
        <div className="glass-panel space-y-4 rounded-2xl p-6">
          <Skeleton className="h-6 w-32" />
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-20 w-full rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  );
}

export function JobsPageSkeleton() {
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Skeleton className="h-9 w-32" />
        <Skeleton className="h-4 w-80 max-w-full" />
      </div>
      <Skeleton className="h-14 w-full rounded-2xl" />
      <Skeleton className="h-16 w-full rounded-2xl" />
      <div className="space-y-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <JobCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}

export function JobDetailsSkeleton() {
  return (
    <motion.div variants={fadeUpItem} className="space-y-6">
      <Skeleton className="h-8 w-32" />
      <div className="glass-panel rounded-2xl p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          <Skeleton className="h-16 w-16 rounded-2xl" />
          <div className="flex-1 space-y-4">
            <Skeleton className="h-8 w-2/3" />
            <Skeleton className="h-5 w-1/3" />
            <div className="flex gap-2">
              <Skeleton className="h-6 w-24 rounded-md" />
              <Skeleton className="h-6 w-28 rounded-md" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="glass-panel space-y-3 rounded-2xl p-6">
              <Skeleton className="h-5 w-40" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          ))}
        </div>
        <div className="glass-panel space-y-4 rounded-2xl p-6">
          <Skeleton className="mx-auto h-24 w-24 rounded-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-10 w-full rounded-xl" />
        </div>
      </div>
    </motion.div>
  );
}
