"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductImageSlider({ images, name, isBestseller = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSrc = images[currentIndex] ?? images[0];
  const hasMultiple = images.length > 1;

  const goPrev = () => {
    setCurrentIndex((i) => (i <= 0 ? images.length - 1 : i - 1));
  };

  const goNext = () => {
    setCurrentIndex((i) => (i >= images.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <div className="relative aspect-square w-full min-w-0 overflow-hidden">
        {isBestseller && (
          <span className="absolute left-3 top-3 z-10 rounded bg-cyan-600 px-2 py-1 text-sm font-medium text-white">
            Bestseller
          </span>
        )}

        <Image
          src={currentSrc}
          alt={name}
          width={400}
          height={400}
          className="h-full w-full object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 400px"
        />

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-md transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label="Previous image"
            >
              <span className="text-xl font-medium text-zinc-700" aria-hidden>
                ‹
              </span>
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-md transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              aria-label="Next image"
            >
              <span className="text-xl font-medium text-zinc-700" aria-hidden>
                ›
              </span>
            </button>
          </>
        )}
      </div>

      {hasMultiple && (
        <div className="flex flex-wrap justify-center gap-2">
          {images.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              className={`relative h-14 w-14 shrink-0 overflow-hidden transition focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                i === currentIndex ? "ring-2 ring-cyan-500" : "ring-1 ring-zinc-200 hover:ring-zinc-300"
              }`}
              aria-label={`View image ${i + 1}`}
              aria-current={i === currentIndex ? "true" : undefined}
            >
              <Image
                src={src}
                alt=""
                width={56}
                height={56}
                className="h-full w-full object-cover"
                sizes="56px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
