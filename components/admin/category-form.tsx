"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Save } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { saveCategory } from "@/app/actions/admin";
import { Button } from "@/components/ui/button";
import { FieldError, Input, Label, Textarea } from "@/components/ui/field";
import { categorySchema, type CategoryInput } from "@/lib/schemas";

export function CategoryForm({ category }: { category?: CategoryInput }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const { register, handleSubmit, formState: { errors } } = useForm<CategoryInput>({
    resolver: zodResolver(categorySchema),
    defaultValues: category
  });

  function onSubmit(values: CategoryInput) {
    startTransition(async () => {
      const result = await saveCategory(values);
      if (result.ok) {
        toast.success(result.message);
        router.refresh();
      } else {
        toast.error(result.message);
      }
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 rounded-md border border-slate-200 bg-white p-5 shadow-sm">
      <input type="hidden" {...register("id")} />
      <div className="grid gap-2">
        <Label htmlFor="name">Category Name</Label>
        <Input id="name" {...register("name")} />
        <FieldError message={errors.name?.message} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="slug">Slug</Label>
        <Input id="slug" {...register("slug")} placeholder="Auto-generated if empty" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" {...register("description")} />
        <FieldError message={errors.description?.message} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="imageUrl">Image URL</Label>
        <Input id="imageUrl" {...register("imageUrl")} placeholder="/assets/water-flow-1.png" />
        <FieldError message={errors.imageUrl?.message} />
      </div>
      <Button type="submit" disabled={pending} className="w-fit">
        {pending ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
        Save Category
      </Button>
    </form>
  );
}
