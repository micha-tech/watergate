"use client";

import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";
import { deleteCategory, deleteProduct, setProductFlag, updateEnquiryStatus } from "@/app/actions/admin";

export function DeleteButton({ id, type }: { id: string; type: "product" | "category" }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => {
        if (!window.confirm(`Delete this ${type}?`)) return;
        startTransition(async () => {
          const result = type === "product" ? await deleteProduct(id) : await deleteCategory(id);
          if (result.ok) {
            toast.success(result.message);
          } else {
            toast.error(result.message);
          }
          router.refresh();
        });
      }}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-red-200 text-red-600 hover:bg-red-50"
      aria-label={`Delete ${type}`}
    >
      <Trash2 size={16} />
    </button>
  );
}

export function ProductFlagToggle({ id, flag, value, label }: { id: string; flag: "isPublished" | "isFeatured"; value: boolean; label: string }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  return (
    <label className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700">
      <input
        type="checkbox"
        checked={value}
        disabled={pending}
        onChange={(event) => {
          startTransition(async () => {
            const result = await setProductFlag(id, flag, event.target.checked);
            if (result.ok) {
              toast.success(result.message);
            } else {
              toast.error(result.message);
            }
            router.refresh();
          });
        }}
        className="h-4 w-4 rounded border-slate-300 text-primary"
      />
      {label}
    </label>
  );
}

export function EnquiryStatusSelect({ id, status }: { id: string; status: string }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  return (
    <select
      defaultValue={status}
      disabled={pending}
      onChange={(event) => {
        startTransition(async () => {
          const result = await updateEnquiryStatus(id, event.target.value);
          if (result.ok) {
            toast.success(result.message);
          } else {
            toast.error(result.message);
          }
          router.refresh();
        });
      }}
      className="h-9 rounded-md border border-slate-200 bg-white px-2 text-xs font-semibold"
    >
      <option value="NEW">New</option>
      <option value="CONTACTED">Contacted</option>
      <option value="RESOLVED">Resolved</option>
    </select>
  );
}
