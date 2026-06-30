import { MessageCircle } from "lucide-react";
import { PublicLayout } from "@/components/public/public-layout";
import { QuoteForm } from "@/components/public/quote-form";
import { ButtonLink } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Request a Quote | Watergate Flow Technologies",
  "Request a quote for dosing pumps, prepaid water meters, reverse osmosis systems, and water treatment plant accessories from Watergate Flow Technologies.",
  "/contact"
);

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ product?: string }> }) {
  const params = await searchParams;
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  return (
    <PublicLayout>
      <section className="bg-marine px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="container-tight">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-aqua">Request Quote</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">Tell Us What Your Water System Needs</h1>
          <p className="mt-5 max-w-3xl leading-8 text-slate-100">
            Submit your requirement for dosing pumps, prepaid water meters, reverse osmosis systems, treatment plant accessories, or a general water utility enquiry.
          </p>
          {whatsapp ? (
            <a href={`https://wa.me/${whatsapp}`} className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-aqua px-5 text-sm font-semibold text-white hover:bg-ocean">
              <MessageCircle size={18} /> Talk to Us on WhatsApp
            </a>
          ) : null}
        </div>
      </section>
      <section className="section-pad bg-mist">
        <div className="container-tight grid gap-8 lg:grid-cols-[0.7fr_1fr]">
          <div className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-charcoal">Quotation Context</h2>
            <p className="mt-4 leading-7 text-mutedText">
              Share your project type, location, desired product category, and any operating details available. Exact model selection and pricing depend on requirement scope, quantity, and technical specification.
            </p>
            <ButtonLink href="/products" variant="outline" className="mt-6">Explore Products</ButtonLink>
          </div>
          <div className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
            <QuoteForm productName={params.product} />
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
