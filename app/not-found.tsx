import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-start justify-center px-6">
      <span className="font-mono text-xs text-copper-400">SHEET NOT FOUND</span>
      <h1 className="mt-3 font-display text-3xl text-steel-100">
        This drawing isn't in the set.
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-steel-300">
        The page you're looking for doesn't exist or has moved.
      </p>
      <div className="mt-8">
        <Button href="/">Back home</Button>
      </div>
    </div>
  );
}
