"use client";

import Image from "next/image";
import { useState } from "react";

export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [selected, setSelected] = useState(images[0]);

  return (
    <div className="rounded-[32px] border border-border bg-white p-4 shadow-[var(--shadow-card)] md:p-5">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,#f9fbfe,#edf4f9)]">
        <Image
          src={selected}
          alt={name}
          fill
          className="object-contain p-6 transition duration-500 hover:scale-[1.02]"
          sizes="(max-width: 1024px) 100vw, 52vw"
        />
      </div>
      {images.length > 1 ? (
        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
          {images.map((image) => (
            <button
              key={image}
              type="button"
              onClick={() => setSelected(image)}
              className={`relative aspect-[4/3] overflow-hidden rounded-2xl border bg-[linear-gradient(180deg,#ffffff,#edf4f9)] transition ${
                image === selected ? "border-sapphire shadow-[0_0_0_1px_rgba(15,82,186,0.15)]" : "border-border"
              }`}
              aria-label={`View ${name} image`}
            >
              <Image
                src={image}
                alt={`${name} thumbnail`}
                fill
                className="object-contain p-3"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
