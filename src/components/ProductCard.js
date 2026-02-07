"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product, cartQty = 0, onAdd, onPlus, onMinus }) {
  const {
    id,
    slug,
    name,
    description,
    quantity,
    isBestseller,
    imageUrl,
    rating,
    reviewCount,
    currentPrice,
    originalPrice,
    discountPercentage,
  } = product;

  const productUrl = `/${slug}/${id}`;
  const showAdd = cartQty === 0;

  return (
    <article
      className="flex h-full w-full min-w-0 min-h-0 flex-col rounded-lg border border-zinc-200 bg-white p-2 shadow-sm transition-shadow hover:shadow-md focus-within:ring-2 focus-within:ring-cyan-500 focus-within:ring-offset-2 sm:p-3"
      aria-labelledby={`product-title-${id}`}
    >
      <Link href={productUrl} className="group flex flex-1 flex-col overflow-hidden outline-none">
        <div className="relative mb-1.5 w-full flex-shrink-0 overflow-hidden bg-zinc-100">
          <div className="aspect-[3/2] w-full">
            {isBestseller && (
              <span
                className="absolute left-1 top-1 z-10 rounded bg-cyan-600 px-1.5 py-0.5 text-[10px] font-medium text-white sm:left-1.5 sm:top-1.5 sm:px-2 sm:text-xs"
                aria-hidden
              >
                Bestseller
              </span>
            )}
            <Image
              src={imageUrl}
              alt={`${name} - ${quantity}`}
              width={240}
              height={160}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
              loading="lazy"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
            />
          </div>
        </div>

        <h2
          id={`product-title-${id}`}
          className="mb-0.5 line-clamp-2 text-xs font-bold text-zinc-900 group-hover:text-cyan-600 sm:text-sm"
          title={name}
        >
          {name}
        </h2>
        <p className="mb-0.5 line-clamp-2 text-[11px] text-zinc-600 sm:text-xs">{description}</p>
        <p className="mb-1 line-clamp-1 text-[11px] text-zinc-500 sm:text-xs">{quantity}</p>

        <div className="mb-1 flex items-center gap-1" aria-label={`Rating: ${rating} out of 5 from ${reviewCount} reviews`}>
          <StarRating value={rating} />
          <span className="text-xs font-medium text-zinc-700 sm:text-sm">{rating}</span>
          <span className="text-[11px] text-zinc-500 sm:text-xs">({reviewCount})</span>
        </div>

        <div className="mt-auto">
          <div className="flex flex-wrap items-baseline gap-1.5">
            <span className="text-base font-bold text-zinc-900 sm:text-lg">₹{currentPrice}</span>
            {originalPrice > currentPrice && (
              <>
                <span className="text-xs text-zinc-400 line-through sm:text-sm">₹{originalPrice}</span>
                <span className="text-[10px] font-medium text-green-600 sm:text-xs">{discountPercentage}% off</span>
              </>
            )}
          </div>
        </div>
      </Link>
      {showAdd ? (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            onAdd?.();
          }}
          className="mt-1.5 block w-full rounded-lg border-2 border-cyan-600 bg-white py-1.5 text-center text-xs font-semibold uppercase tracking-wide text-cyan-600 transition-colors hover:bg-cyan-50 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 sm:mt-2 sm:py-1.5 sm:text-sm"
          aria-label={`Add ${name} to cart`}
        >
          ADD
        </button>
      ) : (
        <div className="mt-1.5 flex w-full justify-center rounded-lg border-2 border-cyan-600 bg-white py-1 sm:mt-2">
          <div className="inline-flex items-stretch overflow-hidden rounded border border-zinc-300 bg-zinc-50">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                onMinus?.();
              }}
              className="flex h-7 w-8 shrink-0 items-center justify-center border-r border-zinc-300 bg-white text-sm font-medium text-cyan-600 transition-colors hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-inset"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="flex h-7 min-w-[1.75rem] items-center justify-center border-r border-zinc-300 bg-white px-1.5 text-sm font-semibold text-zinc-900" aria-live="polite">
              {cartQty}
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                onPlus?.();
              }}
              className="flex h-7 w-8 shrink-0 items-center justify-center bg-white text-sm font-medium text-cyan-600 transition-colors hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-inset"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>
      )}
    </article>
  );
}

function StarRating({ value }) {
  const full = Math.floor(value);
  const hasHalf = value % 1 >= 0.5;
  const stars = [];
  for (let i = 0; i < full; i++) stars.push("full");
  if (hasHalf) stars.push("half");
  while (stars.length < 5) stars.push("empty");

  return (
    <span className="inline-flex gap-0.5" aria-hidden>
      {stars.map((type, i) => (
        <span key={i} className="text-cyan-500">
          {type === "full" ? "★" : type === "half" ? "★" : "☆"}
        </span>
      ))}
    </span>
  );
}
