import { z } from "zod";

const required = "This field is required";

export const loginSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters")
});

export const enquirySchema = z.object({
  fullName: z.string().min(2, required),
  company: z.string().optional(),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(7, "Enter a valid phone number"),
  location: z.string().optional(),
  productId: z.string().optional(),
  productName: z.string().optional(),
  productInterest: z.string().optional(),
  projectType: z.string().optional(),
  message: z.string().min(10, "Tell us a little about the requirement")
});

export const categorySchema = z.object({
  id: z.string().optional(),
  name: z.string().min(2, required),
  slug: z.string().optional(),
  description: z.string().min(10, "Add a useful category description"),
  imageUrl: z.string().url("Use a valid image URL or local path").optional().or(z.literal(""))
});

export const productSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(2, required),
  slug: z.string().optional(),
  shortDescription: z.string().min(10, "Add a concise product summary"),
  description: z.string().min(20, "Add a detailed product description"),
  categoryId: z.string().min(1, "Choose a category"),
  price: z.string().optional(),
  priceLabel: z.string().optional(),
  sku: z.string().optional(),
  imageUrl: z.string().optional(),
  galleryImages: z.string().optional(),
  features: z.string().optional(),
  applications: z.string().optional(),
  specifications: z.string().optional(),
  isFeatured: z.coerce.boolean().optional(),
  isPublished: z.coerce.boolean().optional(),
  metaTitle: z.string().optional(),
  metaDescription: z.string().optional()
});

export type LoginInput = z.infer<typeof loginSchema>;
export type EnquiryInput = z.infer<typeof enquirySchema>;
export type CategoryInput = z.infer<typeof categorySchema>;
export type ProductInput = z.infer<typeof productSchema>;
