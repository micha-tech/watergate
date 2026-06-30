import { CheckCircle2 } from "lucide-react";
import { PublicLayout } from "@/components/public/public-layout";
import { SectionHeading } from "@/components/public/section-heading";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "About Watergate Flow Technologies | Water Utility Solutions",
  "Learn about Watergate Flow Technologies, a water utility technology company supplying products for water treatment, metering, purification, and treatment plant operations.",
  "/about"
);

export default function AboutPage() {
  return (
    <PublicLayout>
      <section className="bg-marine px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="container-tight">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-aqua">About</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">Water Utility Products and Support Solutions</h1>
          <p className="mt-5 max-w-3xl leading-8 text-slate-100">
            Watergate Flow Technologies provides essential water utility products and support solutions for organizations that depend on reliable water systems.
          </p>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="container-tight grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading title="Focused on Reliability, Control, Water Quality, and Utility Performance" />
          <div className="space-y-5 text-base leading-8 text-mutedText">
            <p>
              We serve estates, industries, institutions, facility managers, developers, water operators, and commercial facilities with products that support treatment, metering, purification, and plant operations.
            </p>
            <p>
              Our focus is simple: help customers improve water reliability, operational control, water quality, and utility performance through dependable water technologies.
            </p>
            {["Treatment product sourcing", "Prepaid water metering support", "Purification and reverse osmosis enquiries", "Treatment plant maintenance components"].map((item) => (
              <p key={item} className="flex items-center gap-3 font-semibold text-charcoal"><CheckCircle2 className="text-aqua" size={18} /> {item}</p>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
