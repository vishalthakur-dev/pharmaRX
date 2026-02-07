"use client";

import { useState } from "react";
import Link from "next/link";

export default function PdpPricingCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  const {
    name,
    quantity: quantityLabel,
    currentPrice,
    originalPrice,
    discountPercentage,
  } = product;

  return (
    <div className="rounded-xl border border-zinc-200 bg-zinc-50/80 p-6 shadow-sm">
      <div className="space-y-4">
        {originalPrice > currentPrice && (
          <div className="flex flex-wrap items-baseline gap-2">
            <span className="text-sm text-zinc-500 line-through">MRP ₹{originalPrice}</span>
            <span className="text-sm font-medium text-green-600">{discountPercentage}% off</span>
          </div>
        )}
        <p className="text-3xl font-bold text-zinc-900">₹{currentPrice}</p>
        <p className="text-xs text-zinc-500">Inclusive of all taxes</p>

        <div className="flex flex-wrap items-center gap-2">
          <label htmlFor="pdp-qty" className="sr-only">
            Quantity
          </label>
          <select
            id="pdp-qty"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
            aria-label="Select quantity"
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "Unit" : "Units"}
              </option>
            ))}
          </select>
          <span className="text-sm text-zinc-600">of {quantityLabel}</span>
        </div>

        <Link
          href="/category/vitamins-and-supplements/"
          className="block w-full rounded-lg bg-cyan-600 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
          aria-label={`Add ${quantity} ${name} to cart`}
        >
          Add to cart
        </Link>

        <p className="text-xs text-zinc-500">
          The price displayed is the MRP (inclusive of applicable taxes). Any additional fee (such as
          shipping fee, handling and/or platform fee etc.) will be clearly disclosed before you
          complete your purchase.
        </p>
      </div>

      <div className="mt-6 border-t border-zinc-200 pt-4">
        <p className="text-sm font-semibold text-green-600">Get by 2pm, Today</p>
        <p className="mt-1 text-sm text-zinc-600">
          Delivering to: <button type="button" className="underline focus:outline-none focus:ring-2 focus:ring-cyan-500">560001, Bengaluru</button>
        </p>
      </div>
    </div>
  );
}
