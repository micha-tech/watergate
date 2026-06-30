import { JsonLd } from "@/components/json-ld";
import { FAQAccordion } from "@/components/public/faq-accordion";
import { PublicLayout } from "@/components/public/public-layout";
import { faqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "FAQ | Watergate Flow Technologies",
  "Answers to common questions about Watergate Flow Technologies, prepaid water meters, dosing pumps, reverse osmosis systems, and quotation requests.",
  "/faq"
);

export default function FAQPage() {
  return (
    <PublicLayout>
      <JsonLd data={faqJsonLd()} />
      <section className="bg-marine px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="container-tight">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-aqua">FAQ</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">Frequently Asked Questions</h1>
          <p className="mt-5 max-w-3xl leading-8 text-slate-100">
            Clear answers for procurement teams, facility managers, estate operators, and technical buyers.
          </p>
        </div>
      </section>
      <section className="section-pad bg-mist">
        <FAQAccordion />
      </section>
    </PublicLayout>
  );
}
