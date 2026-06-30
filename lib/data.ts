import { fallbackProducts, productCategories } from "@/lib/content";
import { prisma } from "@/lib/prisma";

type AnyProduct = (typeof fallbackProducts)[number] & {
  createdAt?: Date;
  updatedAt?: Date;
};

export async function getCategories() {
  try {
    const categories = await prisma.productCategory.findMany({
      orderBy: { name: "asc" },
      include: { _count: { select: { products: true } } }
    });
    return categories.length ? categories : productCategories.map((category) => ({ ...category, id: category.slug, _count: { products: 0 } }));
  } catch {
    return productCategories.map((category) => ({ ...category, id: category.slug, _count: { products: 0 } }));
  }
}

export async function getProducts(options: { query?: string; category?: string; featured?: boolean; publishedOnly?: boolean } = {}) {
  try {
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
  try {
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
  try {
    const category = await prisma.productCategory.findUnique({
      where: { slug },
      include: { products: { where: { isPublished: true }, include: { category: true } } }
    });
    return category ?? productCategories.find((item) => item.slug === slug) ?? null;
  } catch {
    const category = productCategories.find((item) => item.slug === slug);
    if (!category) return null;
    return { ...category, products: fallbackProducts.filter((product) => product.category.slug === slug) };
  }
}

export async function getAdminSummary() {
  try {
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
  try {
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
