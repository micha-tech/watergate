import Image from "next/image";

export function ProductGallery({ name, imageUrl, galleryImages }: { name: string; imageUrl?: string | null; galleryImages?: unknown }) {
  const gallery = Array.isArray(galleryImages) ? galleryImages.filter((item): item is string => typeof item === "string") : [];
  const images = [imageUrl || "/assets/water-flow-1.png", ...gallery].filter(Boolean).slice(0, 4);

  return (
    <div className="grid gap-3">
      <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-slate-200 bg-mist">
        <Image src={images[0]} alt={name} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" priority />
      </div>
      {images.length > 1 ? (
        <div className="grid grid-cols-3 gap-3">
          {images.slice(1).map((image) => (
            <div key={image} className="relative aspect-square overflow-hidden rounded-md border border-slate-200 bg-mist">
              <Image src={image} alt={name} fill sizes="150px" className="object-cover" />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
