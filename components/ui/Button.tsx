import Link from 'next/link';
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'ghost' | 'outline';
type Size = 'sm' | 'md';

const variants: Record<Variant, string> = {
  primary:
    'bg-cyan-400 text-steel-950 hover:bg-cyan-500 focus-visible:ring-cyan-400',
  outline:
    'border border-steel-500 text-steel-100 hover:border-cyan-400 hover:text-cyan-400 focus-visible:ring-cyan-400',
  ghost: 'text-steel-200 hover:text-cyan-400 focus-visible:ring-cyan-400'
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm'
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-sm font-medium tracking-tight transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-steel-950 disabled:opacity-50 disabled:pointer-events-none';

interface CommonProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

interface LinkButtonProps
  extends CommonProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children' | 'href'> {
  href: string;
}

interface NativeButtonProps
  extends CommonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> {
  href?: never;
}

export type ButtonProps = LinkButtonProps | NativeButtonProps;

function isLinkProps(props: ButtonProps): props is LinkButtonProps {
  return typeof props.href === 'string';
}

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (isLinkProps(props)) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v2, size: _s2, className: _c2, children: _ch2, href: _h, ...rest } = props;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
