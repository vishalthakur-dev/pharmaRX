"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  const [cartQuantities, setCartQuantities] = useState({});

  const setQuantity = (productId, qty) => {
    setCartQuantities((prev) => {
      const next = { ...prev };
      if (qty <= 0) {
        delete next[productId];
      } else {
        next[productId] = qty;
      }
      return next;
    });
  };

  return (
    <ul
      className="grid w-full grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5 xl:gap-4 2xl:grid-cols-5 2xl:gap-4"
      aria-label="Product listing"
    >
      {products.map((product) => (
        <li key={product.id} className="flex min-w-0 w-full">
          <ProductCard
            product={product}
            cartQty={cartQuantities[product.id] ?? 0}
            onAdd={() => setQuantity(product.id, 1)}
            onPlus={() => setQuantity(product.id, (cartQuantities[product.id] ?? 0) + 1)}
            onMinus={() => {
              const current = cartQuantities[product.id] ?? 1;
              setQuantity(product.id, current <= 1 ? 0 : current - 1);
            }}
          />
        </li>
      ))}
    </ul>
  );
}
