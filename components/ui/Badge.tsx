import { cn } from '@/lib/utils';

export function Badge({
  children,
  tone = 'default',
  className
}: {
  children: React.ReactNode;
  tone?: 'default' | 'copper' | 'cyan';
  className?: string;
}) {
  const tones = {
    default: 'border-steel-500 text-steel-300',
    copper: 'border-copper-500 text-copper-400',
    cyan: 'border-cyan-500 text-cyan-400'
  } as const;

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-sm border px-2 py-0.5 font-mono text-[11px] tracking-wide',
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
