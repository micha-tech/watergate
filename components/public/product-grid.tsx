import { ProductCard } from "@/components/public/product-card";

export function ProductGrid({ products }: { products: Array<React.ComponentProps<typeof ProductCard>["product"]> }) {
  if (!products.length) {
    return (
      <div className="rounded-md border border-dashed border-slate-300 bg-white p-10 text-center">
        <h3 className="text-lg font-bold text-charcoal">No products found</h3>
        <p className="mt-2 text-sm text-mutedText">Try another search term or request a quote for the product you need.</p>
      </div>
    );
  }

  return (
    <div className="grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
