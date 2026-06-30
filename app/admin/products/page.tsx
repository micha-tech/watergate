import Link from "next/link";
import { Plus } from "lucide-react";
import { AdminShell } from "@/components/admin/admin-shell";
import { DeleteButton, ProductFlagToggle } from "@/components/admin/admin-actions";
import { ButtonLink } from "@/components/ui/button";
import { getProducts } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function AdminProductsPage({ searchParams }: { searchParams: Promise<{ q?: string; category?: string }> }) {
  const params = await searchParams;
  const products = await getProducts({ query: params.q, category: params.category, publishedOnly: false });

  return (
    <AdminShell title="Products">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-mutedText">Manage catalogue products, publishing, featured state, images, specifications, features, and applications.</p>
        <ButtonLink href="/admin/products/new"><Plus size={18} /> Add Product</ButtonLink>
      </div>
      <div className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm">
        <table className="w-full min-w-[900px] text-left text-sm">
          <thead className="bg-mist text-xs uppercase tracking-wide text-slate-600">
            <tr>
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {products.map((product) => (
              <tr key={product.id}>
                <td className="px-4 py-4">
                  <p className="font-semibold text-charcoal">{product.name}</p>
                  <p className="text-xs text-mutedText">{product.shortDescription}</p>
                </td>
                <td className="px-4 py-4 text-mutedText">{product.category?.name}</td>
                <td className="px-4 py-4 font-semibold text-primary">{product.priceLabel || "Contact for Pricing"}</td>
                <td className="px-4 py-4">
                  <div className="grid gap-2">
                    <ProductFlagToggle id={product.id} flag="isPublished" value={Boolean(product.isPublished)} label="Published" />
                    <ProductFlagToggle id={product.id} flag="isFeatured" value={Boolean(product.isFeatured)} label="Featured" />
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <Link href={`/admin/products/${product.id}/edit`} className="rounded-md border border-slate-200 px-3 py-2 text-xs font-bold text-primary hover:bg-mist">Edit</Link>
                    <DeleteButton id={product.id} type="product" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
