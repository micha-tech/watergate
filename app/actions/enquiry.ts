"use server";

import { enquirySchema } from "@/lib/schemas";

const recentSubmissions = new Map<string, number>();

async function db() {
  return (await import("@/lib/prisma")).prisma;
}

export async function submitEnquiry(input: unknown) {
  const parsed = enquirySchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, message: parsed.error.issues[0]?.message || "Something went wrong. Please try again." };
  }

  const key = `${parsed.data.email}:${parsed.data.phone}`;
  const lastSubmission = recentSubmissions.get(key) ?? 0;
  if (Date.now() - lastSubmission < 30_000) {
    return { ok: false, message: "Please wait a moment before submitting again." };
  }

  try {
    const prisma = await db();
    await prisma.productEnquiry.create({
      data: {
        fullName: parsed.data.fullName,
        company: parsed.data.company,
        email: parsed.data.email,
        phone: parsed.data.phone,
        location: parsed.data.location,
        productId: parsed.data.productId || undefined,
        productName: parsed.data.productName || parsed.data.productInterest,
        projectType: parsed.data.projectType,
        message: parsed.data.message
      }
    });
    recentSubmissions.set(key, Date.now());
    return { ok: true, message: "Enquiry submitted successfully" };
  } catch {
    return { ok: false, message: "Something went wrong. Please try again." };
  }
}
