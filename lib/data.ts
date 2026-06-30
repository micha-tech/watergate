import { fallbackProducts, productCategories } from "@/lib/content";

type AnyProduct = (typeof fallbackProducts)[number] & {
  createdAt?: Date;
  updatedAt?: Date;
};

function isProductionBuild() {
  return process.env.NEXT_PHASE === "phase-production-build";
}

async function db() {
  return (await import("@/lib/prisma")).prisma;
}

export async function getCategories() {
  const fallback = productCategories.map((category) => ({ ...category, id: category.slug, _count: { products: 0 } }));
  if (isProductionBuild()) return fallback;

  try {
    const prisma = await db();
    const categories = await prisma.productCategory.findMany({
      orderBy: { name: "asc" },
      include: { _count: { select: { products: true } } }
    });
    return categories.length ? categories : fallback;
  } catch {
    return fallback;
  }
}

export async function getProducts(options: { query?: string; category?: string; featured?: boolean; publishedOnly?: boolean } = {}) {
  if (isProductionBuild()) return filterFallbackProducts(options);

  try {
    const prisma = await db();
    const products = await prisma.product.findMany({
      where: {
        ...(options.publishedOnly === false ? {} : { isPublished: true }),
        ...(options.featured ? { isFeatured: true } : {}),
        ...(options.query
          ? {
              OR: [
                { name: { contains: options.query, mode: "insensitive" } },
                { shortDescription: { contains: options.query, mode: "insensitive" } }
              ]
            }
          : {}),
        ...(options.category ? { category: { slug: options.category } } : {})
      },
      include: { category: true },
      orderBy: [{ isFeatured: "desc" }, { createdAt: "desc" }]
    });
    return products.length ? products : filterFallbackProducts(options);
  } catch {
    return filterFallbackProducts(options);
  }
}

export async function getProduct(slug: string) {
  if (isProductionBuild()) return fallbackProducts.find((item) => item.slug === slug) ?? null;

  try {
    const prisma = await db();
    const product = await prisma.product.findUnique({
      where: { slug },
      include: { category: true }
    });
    return product ?? fallbackProducts.find((item) => item.slug === slug) ?? null;
  } catch {
    return fallbackProducts.find((item) => item.slug === slug) ?? null;
  }
}

export async function getCategory(slug: string) {
  const fallbackCategory = productCategories.find((item) => item.slug === slug);
  const fallback = fallbackCategory
    ? { ...fallbackCategory, products: fallbackProducts.filter((product) => product.category.slug === slug) }
    : null;

  if (isProductionBuild()) return fallback;

  try {
    const prisma = await db();
    const category = await prisma.productCategory.findUnique({
      where: { slug },
      include: { products: { where: { isPublished: true }, include: { category: true } } }
    });
    return category ?? fallback;
  } catch {
    return fallback;
  }
}

export async function getAdminSummary() {
  if (isProductionBuild()) {
    return {
      totalProducts: fallbackProducts.length,
      publishedProducts: fallbackProducts.length,
      featuredProducts: fallbackProducts.filter((item) => item.isFeatured).length,
      productCategoriesCount: productCategories.length,
      totalEnquiries: 0,
      recentEnquiries: [],
      latestProducts: fallbackProducts
    };
  }

  try {
    const prisma = await db();
    const [totalProducts, publishedProducts, featuredProducts, productCategoriesCount, totalEnquiries, recentEnquiries, latestProducts] =
      await Promise.all([
        prisma.product.count(),
        prisma.product.count({ where: { isPublished: true } }),
        prisma.product.count({ where: { isFeatured: true } }),
        prisma.productCategory.count(),
        prisma.productEnquiry.count(),
        prisma.productEnquiry.findMany({ orderBy: { createdAt: "desc" }, take: 6, include: { product: true } }),
        prisma.product.findMany({ orderBy: { createdAt: "desc" }, take: 6, include: { category: true } })
      ]);

    return { totalProducts, publishedProducts, featuredProducts, productCategoriesCount, totalEnquiries, recentEnquiries, latestProducts };
  } catch {
    return {
      totalProducts: fallbackProducts.length,
      publishedProducts: fallbackProducts.length,
      featuredProducts: fallbackProducts.filter((item) => item.isFeatured).length,
      productCategoriesCount: productCategories.length,
      totalEnquiries: 0,
      recentEnquiries: [],
      latestProducts: fallbackProducts
    };
  }
}

export async function getAdminEnquiries(status?: string) {
  if (isProductionBuild()) return [];

  try {
    const prisma = await db();
    return prisma.productEnquiry.findMany({
      where: status ? { status } : {},
      orderBy: { createdAt: "desc" },
      include: { product: true }
    });
  } catch {
    return [];
  }
}

function filterFallbackProducts(options: { query?: string; category?: string; featured?: boolean; publishedOnly?: boolean }) {
  const query = options.query?.toLowerCase();
  return fallbackProducts.filter((product: AnyProduct) => {
    if (options.featured && !product.isFeatured) return false;
    if (options.category && product.category.slug !== options.category) return false;
    if (query && !`${product.name} ${product.shortDescription}`.toLowerCase().includes(query)) return false;
    return options.publishedOnly === false || product.isPublished;
  });
}
