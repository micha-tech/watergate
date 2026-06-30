import { AdminShell } from "@/components/admin/admin-shell";
import { EnquiryStatusSelect } from "@/components/admin/admin-actions";
import { getAdminEnquiries } from "@/lib/data";
import { formatDate } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function AdminEnquiriesPage({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
  const params = await searchParams;
  const enquiries = await getAdminEnquiries(params.status);

  return (
    <AdminShell title="Enquiries">
      <div className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm">
        <table className="w-full min-w-[1000px] text-left text-sm">
          <thead className="bg-mist text-xs uppercase tracking-wide text-slate-600">
            <tr>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">Message</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {enquiries.length ? enquiries.map((enquiry) => (
              <tr key={enquiry.id}>
                <td className="px-4 py-4">
                  <p className="font-semibold text-charcoal">{enquiry.fullName}</p>
                  <p className="text-xs text-mutedText">{enquiry.company}</p>
                  <p className="text-xs text-mutedText">{enquiry.email} · {enquiry.phone}</p>
                  <p className="text-xs text-mutedText">{enquiry.location}</p>
                </td>
                <td className="px-4 py-4 text-mutedText">{enquiry.productName || enquiry.product?.name || "General enquiry"}<br />{enquiry.projectType}</td>
                <td className="max-w-md px-4 py-4 text-mutedText">{enquiry.message}</td>
                <td className="px-4 py-4 text-mutedText">{formatDate(enquiry.createdAt)}</td>
                <td className="px-4 py-4"><EnquiryStatusSelect id={enquiry.id} status={enquiry.status} /></td>
              </tr>
            )) : (
              <tr><td colSpan={5} className="px-4 py-10 text-center text-mutedText">No enquiries yet.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
