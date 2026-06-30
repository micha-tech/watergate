import Image from "next/image";
import Link from "next/link";
import { BarChart3, FolderTree, Inbox, LayoutDashboard, LogOut, Package, Settings } from "lucide-react";
import { logoutAdmin } from "@/app/actions/auth";

const adminNav = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Products", href: "/admin/products", icon: Package },
  { label: "Categories", href: "/admin/categories", icon: FolderTree },
  { label: "Enquiries", href: "/admin/enquiries", icon: Inbox },
  { label: "Settings", href: "/admin/settings", icon: Settings }
];

export function AdminShell({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-slate-200 bg-white p-5 lg:block">
        <Link href="/admin/dashboard" className="block">
          <Image src="/assets/watergate-logo-clean.png" alt="Watergate Flow Technologies" width={240} height={80} className="h-12 w-auto" />
        </Link>
        <nav className="mt-10 grid gap-1">
          {adminNav.map((item) => (
            <Link key={item.href} href={item.href} className="flex items-center gap-3 rounded-md px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-mist hover:text-primary">
              <item.icon size={18} />
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <div className="lg:pl-72">
        <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6 lg:px-8">
          <div>
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-aqua"><BarChart3 size={14} /> Admin</p>
            <h1 className="text-lg font-bold text-charcoal">{title}</h1>
          </div>
          <form action={logoutAdmin}>
            <button type="submit" className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-mist">
              <LogOut size={16} /> Logout
            </button>
          </form>
        </header>
        <main className="px-4 py-8 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
