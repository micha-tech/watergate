import { Search } from "lucide-react";
import Link from "next/link";
import { PublicLayout } from "@/components/public/public-layout";
import { ProductGrid } from "@/components/public/product-grid";
import { Input } from "@/components/ui/field";
import { productCategories } from "@/lib/content";
import { getProducts } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Water Utility Products Store | Watergate Flow Technologies",
  "Explore dosing pumps, prepaid water meters, reverse osmosis systems, and water treatment plant accessories from Watergate Flow Technologies.",
  "/products"
);

export default async function ProductsPage({ searchParams }: { searchParams: Promise<{ q?: string; category?: string }> }) {
  const params = await searchParams;
  const products = await getProducts({ query: params.q, category: params.category });

  return (
    <PublicLayout>
      <section className="bg-marine px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="container-tight">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-aqua">Product Store</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">Water Utility Products Store</h1>
          <p className="mt-5 max-w-3xl leading-8 text-slate-100">
            Browse dosing pumps, prepaid water meters, reverse osmosis systems, and water treatment plant accessories for quotation-driven procurement.
          </p>
        </div>
      </section>
      <section className="section-pad bg-mist">
        <div className="container-tight">
          <form className="grid gap-3 rounded-md border border-slate-200 bg-white p-4 shadow-sm lg:grid-cols-[1fr_auto]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <Input name="q" defaultValue={params.q} placeholder="Search products" className="pl-10" />
            </div>
            <button className="rounded-md bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-marine">Search</button>
          </form>
          <div className="mt-6 flex flex-wrap gap-2">
            <Link href="/products" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm">All Products</Link>
            {productCategories.map((category) => (
              <Link key={category.slug} href={`/products?category=${category.slug}`} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:text-primary">
                {category.name}
              </Link>
            ))}
          </div>
          <div className="mt-10"><ProductGrid products={products} /></div>
        </div>
      </section>
    </PublicLayout>
  );
}
