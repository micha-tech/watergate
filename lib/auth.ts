import "server-only";

import { cookies } from "next/headers";
import { createHmac, timingSafeEqual } from "node:crypto";

const cookieName = "watergate_admin";

function secret() {
  return process.env.AUTH_SECRET || process.env.ADMIN_PASSWORD_HASH || "development-watergate-secret";
}

function sign(value: string) {
  return createHmac("sha256", secret()).update(value).digest("hex");
}

export async function createAdminSession(email: string) {
  const issuedAt = Date.now().toString();
  const payload = Buffer.from(JSON.stringify({ email, issuedAt })).toString("base64url");
  const token = `${payload}.${sign(payload)}`;
  const store = await cookies();
  store.set(cookieName, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8
  });
}

export async function destroyAdminSession() {
  const store = await cookies();
  store.delete(cookieName);
}

export async function getAdminSession() {
  const store = await cookies();
  const token = store.get(cookieName)?.value;
  if (!token) return null;

  const [payload, signature] = token.split(".");
  if (!payload || !signature) return null;

  const expected = sign(payload);
  const valid =
    expected.length === signature.length &&
    timingSafeEqual(Buffer.from(expected), Buffer.from(signature));

  if (!valid) return null;

  try {
    const parsed = JSON.parse(Buffer.from(payload, "base64url").toString()) as { email: string; issuedAt: string };
    if (Date.now() - Number(parsed.issuedAt) > 60 * 60 * 8 * 1000) return null;
    return parsed;
  } catch {
    return null;
  }
}
