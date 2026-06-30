import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Droplets, Gauge, Settings2, ShieldCheck } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { PublicLayout } from "@/components/public/public-layout";
import { ProductGrid } from "@/components/public/product-grid";
import { SectionHeading } from "@/components/public/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FAQAccordion } from "@/components/public/faq-accordion";
import { industries, productCategories, solutions } from "@/lib/content";
import { getProducts } from "@/lib/data";
import { faqJsonLd, organizationJsonLd, pageMetadata, websiteJsonLd } from "@/lib/seo";

export const metadata = pageMetadata(
  "Watergate Flow Technologies | Water Utility Products and Treatment Solutions",
  "Watergate Flow Technologies supplies dosing pumps, prepaid water meters, reverse osmosis systems, and water treatment plant accessories for estates, industries, institutions, water operators, and commercial facilities.",
  "/"
);

export const dynamic = "force-dynamic";

const trustPoints = ["Dosing Systems", "Prepaid Metering", "Reverse Osmosis", "Treatment Plant Utilities"];
const valueCards = [
  { title: "Utility-Grade Product Supply", copy: "Practical product sourcing for organizations that depend on reliable water systems.", icon: ShieldCheck },
  { title: "Better Treatment Control", copy: "Products that support accurate dosing, purification, filtration, and process reliability.", icon: Droplets },
  { title: "Smarter Water Metering", copy: "Prepaid metering options for accountability, consumption visibility, and revenue control.", icon: Gauge },
  { title: "Practical Plant Support", copy: "Accessories and utility components for maintenance, replacement, and daily plant operations.", icon: Settings2 }
];

export default async function HomePage() {
  const featuredProducts = await getProducts({ featured: true });

  return (
    <PublicLayout>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={websiteJsonLd()} />
      <JsonLd data={faqJsonLd()} />
      <section className="relative overflow-hidden bg-marine text-white">
        <div className="absolute inset-0 opacity-15">
          <Image src="/assets/water-flow-1.png" alt="" fill priority className="object-cover" />
        </div>
        <div className="container-tight relative flex min-h-[calc(100vh-5rem)] items-center px-4 py-16 sm:px-6 lg:px-8">
          <div>
            <Badge className="bg-white/10 text-white ring-1 ring-white/20">Watergate Flow Technologies</Badge>
            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Reliable Water Utility Technologies for Modern Water Systems
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-100">
              Watergate Flow Technologies supplies dosing pumps, prepaid water meters, reverse osmosis systems, and water treatment plant accessories for estates, industries, institutions, water operators, facility managers, and commercial facilities.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-200">
              From chemical dosing and purification to prepaid metering and plant support, we provide essential products that help water systems operate with greater reliability, control, efficiency, and accountability.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/products" variant="secondary">Explore Products <ArrowRight size={18} /></ButtonLink>
              <ButtonLink href="/contact" className="border border-white/20 bg-aqua hover:bg-ocean">Request a Quote</ButtonLink>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {trustPoints.map((point) => (
                <div key={point} className="rounded-md border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold backdrop-blur">
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Operational Reliability"
            title="Essential Technologies for Reliable Water Operations"
            copy="Water systems depend on accurate dosing, dependable metering, efficient purification, and durable plant components. Watergate Flow Technologies helps organizations source the right products for treatment, monitoring, maintenance, and long-term utility performance."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {valueCards.map((card) => (
              <div key={card.title} className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
                <card.icon className="text-ocean" size={28} />
                <h3 className="mt-5 text-lg font-bold text-charcoal">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-mutedText">{card.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-mist">
        <div className="container-tight">
          <SectionHeading title="Featured Water Utility Products" copy="Explore key products for water treatment, metering, purification, and treatment plant support." />
          <div className="mt-10"><ProductGrid products={featuredProducts} /></div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-tight">
          <SectionHeading title="Products for Treatment, Metering, Purification, and Plant Operations" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {productCategories.map((category) => (
              <Link key={category.slug} href={`/categories/${category.slug}`} className="group rounded-md border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
                <category.icon className="text-ocean" size={30} />
                <h3 className="mt-5 text-xl font-bold text-charcoal group-hover:text-primary">{category.name}</h3>
                <p className="mt-3 text-sm leading-7 text-mutedText">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-marine text-white">
        <div className="container-tight">
          <SectionHeading light title="Practical Solutions for Water Utility Challenges" copy="Match operational problems to products that support better control, reliability, and accountability." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <div key={solution.title} className="rounded-md border border-white/10 bg-white/10 p-6">
                <solution.icon className="text-aqua" size={28} />
                <h3 className="mt-4 text-lg font-bold">{solution.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-200"><strong>Problem:</strong> {solution.problem}</p>
                <p className="mt-2 text-sm leading-6 text-slate-200"><strong>Relevant products:</strong> {solution.products}</p>
                <p className="mt-2 text-sm leading-6 text-slate-200"><strong>Business value:</strong> {solution.value}</p>
                <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white hover:text-aqua">Request quote <ArrowRight size={16} /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-tight">
          <SectionHeading title="Serving Organizations That Depend on Reliable Water Systems" />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <div key={industry.name} className="flex items-center gap-3 rounded-md border border-slate-200 bg-white p-4 text-sm font-semibold text-charcoal shadow-sm">
                <industry.icon size={18} className="text-ocean" /> {industry.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-mist">
        <div className="container-tight grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">Reliable Products. Practical Support. Better Water Operations.</h2>
            <p className="mt-4 leading-7 text-mutedText">
              Watergate Flow Technologies focuses on practical water utility products that support real operational needs across treatment, metering, purification, and plant maintenance.
            </p>
            <ButtonLink href="/contact" className="mt-7">Request a Quote</ButtonLink>
          </div>
          <div className="grid gap-3">
            {[
              "Focused on water utility products and treatment support",
              "Suitable for estate, commercial, industrial, and institutional applications",
              "Products that support reliability, control, purification, and plant performance",
              "Clear enquiry and quotation process",
              "Practical support for customers sourcing water utility equipment"
            ].map((item) => (
              <p key={item} className="flex items-start gap-3 rounded-md bg-white p-4 text-sm font-semibold text-charcoal shadow-sm">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-aqua" /> {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <SectionHeading title="Frequently Asked Questions" />
        <div className="mt-10"><FAQAccordion /></div>
      </section>

      <section className="section-pad bg-primary text-white">
        <div className="container-tight text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Need Reliable Water Utility Products for Your Project or Facility?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-100">
            Tell us what you are building, replacing, maintaining, or upgrading. We will help you identify the right product category and provide a suitable quotation.
          </p>
          <ButtonLink href="/contact" variant="secondary" className="mt-8">Request a Quote</ButtonLink>
        </div>
      </section>
    </PublicLayout>
  );
}
