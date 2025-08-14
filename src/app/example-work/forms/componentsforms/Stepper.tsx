'use client';
type Props = { steps: string[]; current: number };

export default function Stepper({ steps, current }: Props) {
  return (
    <ol className="flex items-center gap-2 mb-4" aria-label="Form progress">
      {steps.map((s, idx) => {
        const active = idx <= current;
        return (
          <li key={s} className="flex-1">
            <div className="flex items-center gap-2">
              <span
                aria-hidden
                className={`h-6 w-6 rounded-full grid place-items-center text-xs font-bold ${
                  active ? 'bg-accent text-neutral-900' : 'bg-neutral-mid text-text-muted'
                }`}
              >
                {idx + 1}
              </span>
              <span className={`text-sm ${active ? 'text-text-base' : 'text-text-muted'}`}>{s}</span>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
