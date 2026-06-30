import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PublicLayout } from "@/components/public/public-layout";
import { solutions } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Water Utility Solutions | Watergate Flow Technologies",
  "Practical solutions for estate water metering, industrial water treatment, commercial purification, treatment plant maintenance, and utility revenue control.",
  "/solutions"
);

export default function SolutionsPage() {
  return (
    <PublicLayout>
      <section className="bg-marine px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="container-tight">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-aqua">Solutions</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">Practical Solutions for Water Utility Challenges</h1>
          <p className="mt-5 max-w-3xl leading-8 text-slate-100">
            Connect operational water problems with product categories that support reliability, accountability, purification, and plant performance.
          </p>
        </div>
      </section>
      <section className="section-pad bg-mist">
        <div className="container-tight grid gap-6 md:grid-cols-2">
          {solutions.map((solution) => (
            <article key={solution.title} className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
              <solution.icon className="text-ocean" size={30} />
              <h2 className="mt-5 text-xl font-bold text-charcoal">{solution.title}</h2>
              <p className="mt-4 text-sm leading-7 text-mutedText"><strong>Problem:</strong> {solution.problem}</p>
              <p className="mt-3 text-sm leading-7 text-mutedText"><strong>Recommended Products:</strong> {solution.products}</p>
              <p className="mt-3 text-sm leading-7 text-mutedText"><strong>Business Value:</strong> {solution.value}</p>
              <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">Request quote <ArrowRight size={16} /></Link>
            </article>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}
