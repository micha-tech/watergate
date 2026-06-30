import { AdminShell } from "@/components/admin/admin-shell";

export default function AdminSettingsPage() {
  return (
    <AdminShell title="Settings">
      <div className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-charcoal">Environment Settings</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-mutedText">
          Configure database access, WhatsApp number, site URL, admin email, password hash, and auth secret using environment variables. Keep credentials out of source control and rotate the Aiven password if it has been shared publicly.
        </p>
        <div className="mt-6 grid gap-3 text-sm">
          {["DATABASE_URL", "NEXT_PUBLIC_SITE_URL", "NEXT_PUBLIC_WHATSAPP_NUMBER", "ADMIN_EMAIL", "ADMIN_PASSWORD_HASH", "AUTH_SECRET"].map((item) => (
            <code key={item} className="rounded-md bg-mist px-3 py-2 font-semibold text-primary">{item}</code>
          ))}
        </div>
      </div>
    </AdminShell>
  );
}
