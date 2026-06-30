import type { LucideIcon } from "lucide-react";

export function DashboardCard({ label, value, icon: Icon }: { label: string; value: number | string; icon: LucideIcon }) {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-mutedText">{label}</p>
        <span className="flex h-10 w-10 items-center justify-center rounded-md bg-mist text-primary"><Icon size={20} /></span>
      </div>
      <p className="mt-4 text-3xl font-bold text-charcoal">{value}</p>
    </div>
  );
}
