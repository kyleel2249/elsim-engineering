'use client';

import type { ElementType, ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { cn } from '@/lib/utils';

interface RevealProps {
  children: ReactNode;
  /** Stagger in milliseconds, for sequencing siblings. */
  delay?: number;
  as?: ElementType;
  className?: string;
}

/**
 * Wraps content so it fades and lifts into place the first time it is scrolled
 * into view. Honours prefers-reduced-motion via useReveal, and the CSS in
 * globals.css leaves `.reveal` fully visible when motion is reduced — so this
 * never hides content from anyone.
 */
export function Reveal({ children, delay = 0, as: Tag = 'div', className }: RevealProps) {
  const { ref, revealed } = useReveal<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      className={cn('reveal', className)}
      data-revealed={revealed}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
