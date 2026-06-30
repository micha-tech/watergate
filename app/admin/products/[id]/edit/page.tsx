import { notFound } from "next/navigation";
import { AdminShell } from "@/components/admin/admin-shell";
import { ProductForm } from "@/components/admin/product-form";
import { getCategories } from "@/lib/data";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

type EditProductPageProps = { params: Promise<{ id: string }> };

function listToText(value: unknown) {
  return Array.isArray(value) ? value.map(String).join("\n") : "";
}

function specsToText(value: unknown) {
  return value && typeof value === "object" && !Array.isArray(value)
    ? Object.entries(value as Record<string, string>).map(([key, item]) => `${key}: ${item}`).join("\n")
    : "";
}

export default async function EditProductPage({ params }: EditProductPageProps) {
  const { id } = await params;
  const [categories, product] = await Promise.all([
    getCategories(),
    prisma.product.findUnique({ where: { id } }).catch(() => null)
  ]);

  if (!product) notFound();

  return (
    <AdminShell title="Edit Product">
      <ProductForm
        categories={categories.map((category) => ({ id: category.id, name: category.name }))}
        product={{
          id: product.id,
          name: product.name,
          slug: product.slug,
          shortDescription: product.shortDescription,
          description: product.description,
          categoryId: product.categoryId,
          price: product.price ? String(product.price) : "",
          priceLabel: product.priceLabel,
          sku: product.sku || "",
          imageUrl: product.imageUrl || "",
          galleryImages: listToText(product.galleryImages),
          features: listToText(product.features),
          applications: listToText(product.applications),
          specifications: specsToText(product.specifications),
          isFeatured: product.isFeatured,
          isPublished: product.isPublished,
          metaTitle: product.metaTitle || "",
          metaDescription: product.metaDescription || ""
        }}
      />
    </AdminShell>
  );
}
