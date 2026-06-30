import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, Gauge } from "lucide-react";
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
    <article className="group relative flex h-full flex-col overflow-hidden rounded-md border border-slate-200/80 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-ocean/30 hover:shadow-premium">
      <Link
        href={`/products/${product.slug}`}
        className="relative block aspect-[4/3] overflow-hidden border-b border-slate-100 bg-[#f7fbfd]"
        aria-label={`View ${product.name}`}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-ocean/20" />
        <div className="absolute left-4 top-4 z-10 inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/80 bg-white/90 text-primary shadow-sm backdrop-blur">
          <Gauge size={16} aria-hidden="true" />
        </div>
        <Image
          src={product.imageUrl || "/assets/water-flow-1.png"}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-contain p-6 transition duration-500 group-hover:scale-[1.04]"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="min-h-7">
          {product.category ? (
            <Badge className="max-w-full truncate border border-primary/10 bg-primary/[0.04] text-[11px] uppercase tracking-[0.08em]">
              {product.category.name}
            </Badge>
          ) : null}
        </div>
        <h3 className="mt-4 min-h-[3.25rem] text-lg font-bold leading-snug text-charcoal">
          <Link href={`/products/${product.slug}`} className="transition hover:text-primary">
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-6 text-mutedText">{product.shortDescription}</p>
        <div className="mt-5 border-t border-slate-100 pt-4">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-aqua">Pricing</p>
          <p className="mt-1 text-sm font-bold text-primary">{product.priceLabel || "Contact for Pricing"}</p>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-2">
          <ButtonLink href={`/products/${product.slug}`} variant="outline" className="h-10 px-3 text-xs sm:text-sm">
            <ArrowRight size={16} /> Details
          </ButtonLink>
          <ButtonLink href={`/contact?product=${encodeURIComponent(product.name)}`} className="h-10 px-3 text-xs shadow-sm sm:text-sm">
            <FileText size={16} /> Quote
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
