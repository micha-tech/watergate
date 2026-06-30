import { AdminShell } from "@/components/admin/admin-shell";
import { DeleteButton } from "@/components/admin/admin-actions";
import { CategoryForm } from "@/components/admin/category-form";
import { getCategories } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function AdminCategoriesPage() {
  const categories = await getCategories();

  return (
    <AdminShell title="Categories">
      <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <CategoryForm />
        <div className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-mist text-xs uppercase tracking-wide text-slate-600">
              <tr>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Slug</th>
                <th className="px-4 py-3">Products</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {categories.map((category) => (
                <tr key={category.id}>
                  <td className="px-4 py-4">
                    <p className="font-semibold text-charcoal">{category.name}</p>
                    <p className="line-clamp-2 text-xs text-mutedText">{category.description}</p>
                  </td>
                  <td className="px-4 py-4 text-mutedText">{category.slug}</td>
                  <td className="px-4 py-4 text-mutedText">{"_count" in category ? category._count.products : 0}</td>
                  <td className="px-4 py-4"><DeleteButton id={category.id} type="category" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminShell>
  );
}
