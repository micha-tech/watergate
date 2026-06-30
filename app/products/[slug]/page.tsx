import { notFound } from "next/navigation";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { Breadcrumbs } from "@/components/public/breadcrumbs";
import { ProductGallery } from "@/components/public/product-gallery";
import { PublicLayout } from "@/components/public/public-layout";
import { QuoteForm } from "@/components/public/quote-form";
import { SpecificationsTable } from "@/components/public/specifications-table";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { getProduct, getProducts } from "@/lib/data";
import { breadcrumbJsonLd, pageMetadata, productJsonLd } from "@/lib/seo";

type ProductPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return pageMetadata("Product | Watergate Flow Technologies");
  return pageMetadata(product.metaTitle || `${product.name} | Watergate Flow Technologies`, product.metaDescription || product.shortDescription, `/products/${product.slug}`);
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();
  const related = await getProducts({ category: product.category?.slug, publishedOnly: true });
  const features = Array.isArray(product.features) ? product.features : [];
  const applications = Array.isArray(product.applications) ? product.applications : [];
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  return (
    <PublicLayout>
      <JsonLd data={productJsonLd(product)} />
      <JsonLd data={breadcrumbJsonLd([{ name: "Products", href: "/products" }, { name: product.name, href: `/products/${product.slug}` }])} />
      <section className="section-pad bg-white">
        <div className="container-tight">
          <Breadcrumbs items={[{ label: "Products", href: "/products" }, { label: product.name }]} />
          <div className="mt-8 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <ProductGallery name={product.name} imageUrl={product.imageUrl} galleryImages={product.galleryImages} />
            <div>
              {product.category ? <Badge>{product.category.name}</Badge> : null}
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-charcoal">{product.name}</h1>
              <p className="mt-4 text-lg leading-8 text-mutedText">{product.shortDescription}</p>
              <p className="mt-6 text-xl font-bold text-primary">{product.priceLabel || "Contact for Pricing"}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={`/contact?product=${encodeURIComponent(product.name)}`}>Request Quote</ButtonLink>
                {whatsapp ? (
                  <a href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(`Hello Watergate, I want to enquire about ${product.name}.`)}`} className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-primary/20 bg-white px-5 text-sm font-semibold text-primary hover:bg-mist">
                    <MessageCircle size={18} /> WhatsApp Enquiry
                  </a>
                ) : null}
              </div>
              <div className="mt-8 rounded-md border border-slate-200 bg-mist p-5">
                <h2 className="text-lg font-bold text-charcoal">Product Enquiry</h2>
                <div className="mt-4"><QuoteForm productName={product.name} productId={product.id} /></div>
              </div>
            </div>
          </div>
          <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
            <section>
              <h2 className="text-2xl font-bold text-charcoal">Detailed Description</h2>
              <p className="mt-4 leading-8 text-mutedText">{product.description}</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-charcoal">Specifications</h2>
              <div className="mt-4"><SpecificationsTable specifications={product.specifications} /></div>
            </section>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <section className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-charcoal">Features</h2>
              <div className="mt-5 grid gap-3">
                {features.map((feature) => <p key={String(feature)} className="flex gap-3 text-sm text-mutedText"><CheckCircle2 size={18} className="shrink-0 text-aqua" /> {String(feature)}</p>)}
              </div>
            </section>
            <section className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-charcoal">Applications</h2>
              <div className="mt-5 grid gap-3">
                {applications.map((item) => <p key={String(item)} className="flex gap-3 text-sm text-mutedText"><CheckCircle2 size={18} className="shrink-0 text-aqua" /> {String(item)}</p>)}
              </div>
            </section>
          </div>
          <section className="mt-14">
            <h2 className="text-2xl font-bold text-charcoal">Related Products</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {related.filter((item) => item.slug !== product.slug).slice(0, 3).map((item) => (
                <a key={item.slug} href={`/products/${item.slug}`} className="rounded-md border border-slate-200 bg-white p-5 font-semibold text-charcoal shadow-sm hover:text-primary">
                  {item.name}
                </a>
              ))}
            </div>
          </section>
        </div>
      </section>
    </PublicLayout>
  );
}
