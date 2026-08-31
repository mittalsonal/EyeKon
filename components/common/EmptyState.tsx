import Link from "next/link";

interface EmptyStateProps {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export function EmptyState({ title, description, ctaLabel, ctaHref }: EmptyStateProps) {
  return (
    <div className="rounded-3xl border border-border bg-white p-10 text-center shadow-[var(--shadow-card)]">
      <h2 className="text-2xl font-bold text-deep-navy">{title}</h2>
      <p className="mx-auto mt-3 max-w-xl text-muted">{description}</p>
      <Link
        href={ctaHref}
        className="mt-6 inline-flex items-center rounded-full bg-sapphire px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0d47a1]"
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
