import Image from "next/image";
import { Suspense } from "react";
import { AdminLoginForm } from "@/components/admin/admin-login-form";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Admin Login | Watergate Flow Technologies");

export default function AdminLoginPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-mist px-4 py-10">
      <div className="w-full max-w-md rounded-md border border-slate-200 bg-white p-7 shadow-premium">
        <Image src="/assets/watergate-logo-clean.png" alt="Watergate Flow Technologies" width={260} height={80} className="h-14 w-auto" priority />
        <h1 className="mt-8 text-2xl font-bold text-charcoal">Admin Login</h1>
        <p className="mt-2 text-sm text-mutedText">Access product, category, and enquiry management.</p>
        <div className="mt-7">
          <Suspense>
            <AdminLoginForm />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
