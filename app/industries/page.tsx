import { PublicLayout } from "@/components/public/public-layout";
import { SectionHeading } from "@/components/public/section-heading";
import { industries } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Industries Served | Watergate Flow Technologies",
  "Watergate Flow Technologies serves estates, industries, institutions, hospitality facilities, commercial buildings, water operators, and treatment plants.",
  "/industries"
);

export default function IndustriesPage() {
  return (
    <PublicLayout>
      <section className="bg-marine px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="container-tight">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-aqua">Industries</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">Serving Organizations That Depend on Reliable Water Systems</h1>
          <p className="mt-5 max-w-3xl leading-8 text-slate-100">
            Product support for the facilities, operators, and institutions that need dependable water treatment, metering, and plant operations.
          </p>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="container-tight">
          <SectionHeading title="Industry Coverage" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div key={industry.name} className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
                <industry.icon className="text-ocean" size={24} />
                <h2 className="mt-4 text-lg font-bold text-charcoal">{industry.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
