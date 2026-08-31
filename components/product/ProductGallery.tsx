"use client";

import Image from "next/image";
import { useState } from "react";

export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [selected, setSelected] = useState(images[0]);

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-border bg-[linear-gradient(180deg,#f9fbfe,#d9e7f1)] shadow-[var(--shadow-card)]">
        <Image src={selected} alt={name} fill className="object-cover" />
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3">
        {images.map((image) => (
          <button
            key={image}
            type="button"
            onClick={() => setSelected(image)}
            className={`relative aspect-[4/3] overflow-hidden rounded-2xl border ${
              image === selected ? "border-sapphire" : "border-border"
            } bg-white`}
            aria-label={`View ${name} image`}
          >
            <Image src={image} alt={`${name} thumbnail`} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
