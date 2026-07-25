export default function PageHeader({ title, description, action }) {
  return (
    <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="animate-slide-up">
        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-2 max-w-2xl text-sm text-slate-400 sm:text-base">
            {description}
          </p>
        )}
      </div>
      {action && <div className="animate-fade-in">{action}</div>}
    </header>
  );
}
