interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
}: SectionHeadingProps) {
  const textClass = invert ? "text-white" : "text-deep-navy";
  const bodyClass = invert ? "text-slate-300" : "text-muted";

  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-sapphire">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-3xl font-bold tracking-tight md:text-4xl ${textClass}`}>{title}</h2>
      {description ? <p className={`mt-4 text-base leading-7 md:text-lg ${bodyClass}`}>{description}</p> : null}
    </div>
  );
}
