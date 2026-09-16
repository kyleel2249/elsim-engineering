/**
 * Route-level loading state.
 *
 * Mirrors the shape of a typical interior page — eyebrow, title, lede, card
 * grid — so the transition into real content does not jump.
 */
export default function Loading() {
  return (
    <div className="py-16 sm:py-24" style={{ backgroundColor: 'var(--theme-bg)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="sr-only" role="status">
          Loading
        </span>

        <div className="skeleton h-3 w-28 rounded" />
        <div className="skeleton mt-5 h-9 w-2/3 max-w-lg rounded" />
        <div className="skeleton mt-4 h-4 w-1/2 max-w-md rounded" />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded border p-6"
              style={{ borderColor: 'var(--theme-border)' }}
            >
              <div className="skeleton h-5 w-3/4 rounded" />
              <div className="skeleton mt-3 h-3 w-full rounded" />
              <div className="skeleton mt-2 h-3 w-5/6 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
