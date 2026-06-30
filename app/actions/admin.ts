"use server";

import { revalidatePath } from "next/cache";
import { categorySchema, productSchema } from "@/lib/schemas";
import { jsonRecordFromText, listFromText, slugify } from "@/lib/utils";

async function db() {
  return (await import("@/lib/prisma")).prisma;
}

export async function saveCategory(input: unknown) {
  const parsed = categorySchema.safeParse(input);
  if (!parsed.success) return { ok: false, message: parsed.error.issues[0]?.message || "Something went wrong. Please try again." };

  const data = {
    name: parsed.data.name,
    slug: slugify(parsed.data.slug || parsed.data.name),
    description: parsed.data.description,
    imageUrl: parsed.data.imageUrl || null
  };

  try {
    const prisma = await db();
    if (parsed.data.id) {
      await prisma.productCategory.update({ where: { id: parsed.data.id }, data });
      revalidatePath("/");
      return { ok: true, message: "Category updated successfully" };
    }
    await prisma.productCategory.create({ data });
    revalidatePath("/");
    return { ok: true, message: "Category created successfully" };
  } catch {
    return { ok: false, message: "Something went wrong. Please try again." };
  }
}

export async function deleteCategory(id: string) {
  try {
    const prisma = await db();
    await prisma.productCategory.delete({ where: { id } });
    revalidatePath("/");
    return { ok: true, message: "Category deleted successfully" };
  } catch {
    return { ok: false, message: "Something went wrong. Please try again." };
  }
}

export async function saveProduct(input: unknown) {
  const parsed = productSchema.safeParse(input);
  if (!parsed.success) return { ok: false, message: parsed.error.issues[0]?.message || "Something went wrong. Please try again." };

  const data = {
    name: parsed.data.name,
    slug: slugify(parsed.data.slug || parsed.data.name),
    shortDescription: parsed.data.shortDescription,
    description: parsed.data.description,
    categoryId: parsed.data.categoryId,
    price: parsed.data.price ? Number(parsed.data.price) : null,
    priceLabel: parsed.data.priceLabel || "Contact for Pricing",
    sku: parsed.data.sku || null,
    imageUrl: parsed.data.imageUrl || "/assets/water-flow-1.png",
    galleryImages: listFromText(parsed.data.galleryImages),
    features: listFromText(parsed.data.features),
    applications: listFromText(parsed.data.applications),
    specifications: jsonRecordFromText(parsed.data.specifications),
    isFeatured: Boolean(parsed.data.isFeatured),
    isPublished: parsed.data.isPublished !== false,
    metaTitle: parsed.data.metaTitle || null,
    metaDescription: parsed.data.metaDescription || null
  };

  try {
    const prisma = await db();
    if (parsed.data.id) {
      await prisma.product.update({ where: { id: parsed.data.id }, data });
      revalidatePath("/");
      return { ok: true, message: "Product updated successfully" };
    }
    await prisma.product.create({ data });
    revalidatePath("/");
    return { ok: true, message: "Product created successfully" };
  } catch {
    return { ok: false, message: "Something went wrong. Please try again." };
  }
}

export async function deleteProduct(id: string) {
  try {
    const prisma = await db();
    await prisma.product.delete({ where: { id } });
    revalidatePath("/");
    return { ok: true, message: "Product deleted successfully" };
  } catch {
    return { ok: false, message: "Something went wrong. Please try again." };
  }
}

export async function setProductFlag(id: string, flag: "isPublished" | "isFeatured", value: boolean) {
  try {
    const prisma = await db();
    await prisma.product.update({ where: { id }, data: { [flag]: value } });
    revalidatePath("/");
    return {
      ok: true,
      message: flag === "isPublished" ? (value ? "Product published" : "Product unpublished") : "Product updated successfully"
    };
  } catch {
    return { ok: false, message: "Something went wrong. Please try again." };
  }
}

export async function updateEnquiryStatus(id: string, status: string) {
  try {
    const prisma = await db();
    await prisma.productEnquiry.update({ where: { id }, data: { status } });
    revalidatePath("/admin/enquiries");
    return { ok: true, message: "Enquiry status updated" };
  } catch {
    return { ok: false, message: "Something went wrong. Please try again." };
  }
}
