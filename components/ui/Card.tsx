import { cn } from '@/lib/utils';

export function Card({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'group relative border border-steel-700 bg-steel-800/60 p-6 backdrop-blur-sm transition-colors duration-200 hover:border-cyan-500/60',
        className
      )}
    >
      <span className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l border-t border-cyan-400/0 transition-colors duration-200 group-hover:border-cyan-400/70" />
      <span className="pointer-events-none absolute bottom-0 right-0 h-3 w-3 border-b border-r border-cyan-400/0 transition-colors duration-200 group-hover:border-cyan-400/70" />
      {children}
    </div>
  );
}
