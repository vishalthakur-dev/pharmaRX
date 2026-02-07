import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <ul
      className="grid w-full grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5 xl:gap-4 2xl:grid-cols-5 2xl:gap-4"
      aria-label="Product listing"
    >
      {products.map((product) => (
        <li key={product.id} className="flex min-w-0 w-full">
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
