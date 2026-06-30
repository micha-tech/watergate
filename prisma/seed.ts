import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { fallbackProducts, productCategories } from "../lib/content";

const prisma = new PrismaClient();

async function main() {
  for (const category of productCategories) {
    await prisma.productCategory.upsert({
      where: { slug: category.slug },
      update: {
        name: category.name,
        description: category.description,
        imageUrl: category.imageUrl
      },
      create: {
        name: category.name,
        slug: category.slug,
        description: category.description,
        imageUrl: category.imageUrl
      }
    });
  }

  for (const product of fallbackProducts) {
    const category = await prisma.productCategory.findUniqueOrThrow({ where: { slug: product.category.slug } });
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {
        name: product.name,
        shortDescription: product.shortDescription,
        description: product.description,
        categoryId: category.id,
        price: null,
        priceLabel: product.priceLabel,
        sku: product.sku,
        imageUrl: product.imageUrl,
        galleryImages: product.galleryImages,
        features: product.features,
        applications: product.applications,
        specifications: product.specifications,
        isFeatured: product.isFeatured,
        isPublished: product.isPublished,
        metaTitle: product.metaTitle,
        metaDescription: product.metaDescription
      },
      create: {
        name: product.name,
        slug: product.slug,
        shortDescription: product.shortDescription,
        description: product.description,
        categoryId: category.id,
        price: null,
        priceLabel: product.priceLabel,
        sku: product.sku,
        imageUrl: product.imageUrl,
        galleryImages: product.galleryImages,
        features: product.features,
        applications: product.applications,
        specifications: product.specifications,
        isFeatured: product.isFeatured,
        isPublished: product.isPublished,
        metaTitle: product.metaTitle,
        metaDescription: product.metaDescription
      }
    });
  }

  const email = process.env.ADMIN_EMAIL || "admin@watergateflowtechnologies.com";
  const passwordHash = process.env.ADMIN_PASSWORD_HASH || (await bcrypt.hash("WatergateAdmin2026!", 12));

  await prisma.adminUser.upsert({
    where: { email },
    update: { name: "Watergate Admin", passwordHash, role: "ADMIN" },
    create: { name: "Watergate Admin", email, passwordHash, role: "ADMIN" }
  });

  console.log("Seeded Watergate categories, catalogue products, and admin account.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
