"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Save } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { saveProduct } from "@/app/actions/admin";
import { Button } from "@/components/ui/button";
import { FieldError, Input, Label, Select, Textarea } from "@/components/ui/field";
import { productSchema, type ProductInput } from "@/lib/schemas";

export function ProductForm({ product, categories }: { product?: Partial<ProductInput>; categories: Array<{ id: string; name: string }> }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const { register, handleSubmit, formState: { errors } } = useForm<ProductInput>({
    resolver: zodResolver(productSchema),
    defaultValues: { priceLabel: "Contact for Pricing", imageUrl: "/assets/water-flow-1.png", isPublished: true, ...product }
  });

  function onSubmit(values: ProductInput) {
    startTransition(async () => {
      const result = await saveProduct(values);
      if (result.ok) {
        toast.success(result.message);
        router.push("/admin/products");
        router.refresh();
      } else {
        toast.error(result.message);
      }
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
      <input type="hidden" {...register("id")} />
      <section className="grid gap-4 rounded-md border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-base font-bold text-charcoal">Product Details</h2>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="name">Product Name</Label>
            <Input id="name" {...register("name")} />
            <FieldError message={errors.name?.message} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="slug">Slug</Label>
            <Input id="slug" {...register("slug")} />
          </div>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="categoryId">Category</Label>
            <Select id="categoryId" {...register("categoryId")}>
              <option value="">Choose category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </Select>
            <FieldError message={errors.categoryId?.message} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="sku">SKU</Label>
            <Input id="sku" {...register("sku")} />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="shortDescription">Short Description</Label>
          <Textarea id="shortDescription" {...register("shortDescription")} className="min-h-24" />
          <FieldError message={errors.shortDescription?.message} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="description">Detailed Description</Label>
          <Textarea id="description" {...register("description")} />
          <FieldError message={errors.description?.message} />
        </div>
      </section>

      <section className="grid gap-4 rounded-md border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-base font-bold text-charcoal">Catalogue Settings</h2>
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="grid gap-2">
            <Label htmlFor="price">Price</Label>
            <Input id="price" type="number" step="0.01" {...register("price")} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="priceLabel">Price Label</Label>
            <Input id="priceLabel" {...register("priceLabel")} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="imageUrl">Image URL</Label>
            <Input id="imageUrl" {...register("imageUrl")} />
          </div>
        </div>
        <label className="flex items-center gap-3 text-sm font-semibold text-charcoal">
          <input type="checkbox" {...register("isPublished")} className="h-4 w-4 rounded border-slate-300 text-primary" />
          Published
        </label>
        <label className="flex items-center gap-3 text-sm font-semibold text-charcoal">
          <input type="checkbox" {...register("isFeatured")} className="h-4 w-4 rounded border-slate-300 text-primary" />
          Featured
        </label>
      </section>

      <section className="grid gap-4 rounded-md border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-base font-bold text-charcoal">Technical Content</h2>
        <div className="grid gap-2">
          <Label htmlFor="features">Features</Label>
          <Textarea id="features" {...register("features")} placeholder="One feature per line" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="applications">Applications</Label>
          <Textarea id="applications" {...register("applications")} placeholder="One application per line" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="specifications">Specifications</Label>
          <Textarea id="specifications" {...register("specifications")} placeholder="Capacity: Replace with exact value" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="galleryImages">Gallery Image URLs</Label>
          <Textarea id="galleryImages" {...register("galleryImages")} placeholder="One URL per line" />
        </div>
      </section>

      <section className="grid gap-4 rounded-md border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-base font-bold text-charcoal">SEO</h2>
        <Input {...register("metaTitle")} placeholder="Meta title" />
        <Textarea {...register("metaDescription")} placeholder="Meta description" className="min-h-24" />
      </section>

      <Button type="submit" disabled={pending} className="w-fit">
        {pending ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
        Save Product
      </Button>
    </form>
  );
}
