export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <div className="h-4 w-40 animate-pulse rounded-sm bg-steel-700" />
      <div className="mt-6 h-10 w-2/3 animate-pulse rounded-sm bg-steel-700" />
      <div className="mt-4 h-4 w-1/2 animate-pulse rounded-sm bg-steel-800" />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-40 animate-pulse rounded-sm bg-steel-800" />
        ))}
      </div>
    </div>
  );
}
