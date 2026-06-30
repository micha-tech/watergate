import Link from "next/link";
import { FolderTree, Inbox, Package, Star, ToggleRight } from "lucide-react";
import { AdminShell } from "@/components/admin/admin-shell";
import { DashboardCard } from "@/components/admin/dashboard-card";
import { getAdminSummary } from "@/lib/data";
import { formatDate } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const summary = await getAdminSummary();

  return (
    <AdminShell title="Dashboard">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        <DashboardCard label="Total Products" value={summary.totalProducts} icon={Package} />
        <DashboardCard label="Published" value={summary.publishedProducts} icon={ToggleRight} />
        <DashboardCard label="Featured" value={summary.featuredProducts} icon={Star} />
        <DashboardCard label="Categories" value={summary.productCategoriesCount} icon={FolderTree} />
        <DashboardCard label="Enquiries" value={summary.totalEnquiries} icon={Inbox} />
      </div>
      <div className="mt-8 grid gap-6 xl:grid-cols-2">
        <section className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-charcoal">Recent Enquiries</h2>
            <Link href="/admin/enquiries" className="text-sm font-bold text-primary">View all</Link>
          </div>
          <div className="mt-4 divide-y divide-slate-200">
            {summary.recentEnquiries.length ? summary.recentEnquiries.map((enquiry) => (
              <div key={enquiry.id} className="py-4">
                <p className="font-semibold text-charcoal">{enquiry.fullName}</p>
                <p className="text-sm text-mutedText">{enquiry.productName || enquiry.product?.name || "General enquiry"} · {formatDate(enquiry.createdAt)}</p>
              </div>
            )) : <p className="py-6 text-sm text-mutedText">No enquiries yet.</p>}
          </div>
        </section>
        <section className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-charcoal">Latest Products</h2>
            <Link href="/admin/products/new" className="text-sm font-bold text-primary">Add product</Link>
          </div>
          <div className="mt-4 divide-y divide-slate-200">
            {summary.latestProducts.map((product) => (
              <div key={product.id} className="py-4">
                <p className="font-semibold text-charcoal">{product.name}</p>
                <p className="text-sm text-mutedText">{product.category?.name}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </AdminShell>
  );
}
