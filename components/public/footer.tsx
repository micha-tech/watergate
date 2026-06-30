import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { navItems, productCategories } from "@/lib/content";

export function Footer() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  return (
    <footer className="bg-marine text-white">
      <div className="container-tight grid gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <Image src="/assets/watergate-logo-clean.png" alt="Watergate Flow Technologies" width={320} height={120} className="h-16 w-auto brightness-0 invert" />
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-200">
            Essential water utility products for treatment, metering, purification, chemical dosing, and treatment plant operations.
          </p>
          <div className="mt-6 space-y-3 text-sm text-slate-200">
            <p className="flex items-center gap-2"><MapPin size={16} /> Nigeria</p>
            <Link href="/contact" className="flex items-center gap-2 hover:text-white"><Mail size={16} /> Request a quotation</Link>
            {whatsapp ? (
              <a href={`https://wa.me/${whatsapp}`} className="flex items-center gap-2 hover:text-white"><MessageCircle size={16} /> WhatsApp enquiry</a>
            ) : null}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white">Company</h2>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-slate-200 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white">Products</h2>
          <div className="mt-5 grid gap-3">
            {productCategories.map((item) => (
              <Link key={item.slug} href={`/categories/${item.slug}`} className="text-sm text-slate-200 hover:text-white">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-slate-300">
        © {new Date().getFullYear()} Watergate Flow Technologies. All rights reserved.
      </div>
    </footer>
  );
}
