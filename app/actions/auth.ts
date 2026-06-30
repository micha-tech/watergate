"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { createAdminSession, destroyAdminSession } from "@/lib/auth";
import { loginSchema } from "@/lib/schemas";

async function db() {
  return (await import("@/lib/prisma")).prisma;
}

export async function loginAdmin(input: unknown) {
  const parsed = loginSchema.safeParse(input);
  if (!parsed.success) return { ok: false, message: "Invalid email or password" };

  const configuredEmail = process.env.ADMIN_EMAIL;
  const configuredHash = process.env.ADMIN_PASSWORD_HASH;
  let passwordHash = configuredHash;

  try {
    const prisma = await db();
    const admin = await prisma.adminUser.findUnique({ where: { email: parsed.data.email } });
    if (admin) passwordHash = admin.passwordHash;
  } catch {
    // Environment credentials still allow login before the database is seeded.
  }

  if (configuredEmail && parsed.data.email !== configuredEmail && !passwordHash) {
    return { ok: false, message: "Invalid email or password" };
  }

  const valid = passwordHash ? await bcrypt.compare(parsed.data.password, passwordHash) : false;
  if (!valid) return { ok: false, message: "Invalid email or password" };

  await createAdminSession(parsed.data.email);
  return { ok: true, message: "Login successful" };
}

export async function logoutAdmin() {
  await destroyAdminSession();
  redirect("/admin/login");
}
