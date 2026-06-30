import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, copy, light = false }: { eyebrow?: string; title: string; copy?: string; light?: boolean }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-aqua">{eyebrow}</p> : null}
      <h2 className={cn("text-3xl font-bold tracking-tight sm:text-4xl", light ? "text-white" : "text-charcoal")}>{title}</h2>
      {copy ? <p className={cn("mt-4 text-base leading-7", light ? "text-slate-200" : "text-mutedText")}>{copy}</p> : null}
    </div>
  );
}
