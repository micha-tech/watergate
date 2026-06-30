import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/public/product-grid";
import { PublicLayout } from "@/components/public/public-layout";
import { SectionHeading } from "@/components/public/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { getCategory } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

type CategoryPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = await getCategory(slug);
  return pageMetadata(`${category?.name || "Product Category"} | Watergate Flow Technologies`, category?.description, `/categories/${slug}`);
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = await getCategory(slug);
  if (!category) notFound();
  const products = "products" in category && Array.isArray(category.products) ? category.products : [];

  return (
    <PublicLayout>
      <section className="bg-marine px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="container-tight">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-aqua">Product Category</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">{category.name}</h1>
          <p className="mt-5 max-w-3xl leading-8 text-slate-100">{category.description}</p>
          <ButtonLink href="/contact" variant="secondary" className="mt-7">Request Quote</ButtonLink>
        </div>
      </section>
      <section className="section-pad bg-white">
        <div className="container-tight">
          <SectionHeading title={`${category.name} Products`} copy="Review available catalogue entries or send an enquiry if your required specification is not listed." />
          <div className="mt-10"><ProductGrid products={products} /></div>
        </div>
      </section>
      <section className="section-pad bg-mist">
        <div className="container-tight grid gap-6 lg:grid-cols-3">
          {["Applications", "Benefits", "Related Categories"].map((title) => (
            <div key={title} className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-charcoal">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-mutedText">
                {title === "Related Categories"
                  ? "Explore other water treatment, metering, purification, and treatment plant support products in the Watergate catalogue."
                  : category.description}
              </p>
              {title === "Related Categories" ? <Link href="/products" className="mt-5 inline-flex text-sm font-bold text-primary">View all products</Link> : null}
            </div>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}
