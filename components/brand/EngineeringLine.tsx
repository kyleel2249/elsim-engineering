/**
 * EngineeringLine — the recurring "single-line diagram" motif.
 *
 * A horizontal conductor with node markers, in the spirit of an electrical
 * single-line diagram:  ─────●─────●─────
 *
 * Deliberately restrained: a thin stroke and a couple of node dots, never a
 * busy schematic. Used as a section divider / decorative accent, not as a
 * literal circuit diagram.
 */

interface EngineeringLineProps {
  className?: string;
  /** Stroke + node colour. Defaults to the current theme's accent. */
  color?: string;
  /** Number of node markers along the line (2–4 looks best). */
  nodes?: 2 | 3 | 4;
}

export function EngineeringLine({
  className = '',
  color = 'currentColor',
  nodes = 2,
}: EngineeringLineProps) {
  const positions =
    nodes === 2 ? [25, 75] : nodes === 3 ? [16.6, 50, 83.3] : [12.5, 37.5, 62.5, 87.5];

  return (
    <svg
      viewBox="0 0 400 12"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
      style={{ width: '100%', height: 12, color }}
    >
      <line x1="0" y1="6" x2="400" y2="6" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      {positions.map((pct) => (
        <circle key={pct} cx={(pct / 100) * 400} cy="6" r="3" fill="currentColor" opacity="0.85" />
      ))}
    </svg>
  );
}
