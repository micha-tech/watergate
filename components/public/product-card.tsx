import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";

type ProductCardProps = {
  product: {
    name: string;
    slug: string;
    shortDescription: string;
    priceLabel?: string | null;
    imageUrl?: string | null;
    category?: { name: string; slug?: string };
  };
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
      <Link href={`/products/${product.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-mist">
        <Image
          src={product.imageUrl || "/assets/water-flow-1.png"}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        {product.category ? <Badge>{product.category.name}</Badge> : null}
        <h3 className="mt-4 text-lg font-bold text-charcoal">
          <Link href={`/products/${product.slug}`} className="hover:text-primary">
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-mutedText">{product.shortDescription}</p>
        <p className="mt-4 text-sm font-bold text-primary">{product.priceLabel || "Contact for Pricing"}</p>
        <div className="mt-5 grid grid-cols-2 gap-2">
          <ButtonLink href={`/products/${product.slug}`} variant="outline" className="px-3">
            <ArrowRight size={16} /> Details
          </ButtonLink>
          <ButtonLink href={`/contact?product=${encodeURIComponent(product.name)}`} className="px-3">
            <FileText size={16} /> Quote
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
