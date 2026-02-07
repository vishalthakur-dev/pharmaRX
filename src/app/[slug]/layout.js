export async function generateStaticParams() {
  const { products } = await import("@/data/products");
  return products.map((p) => ({ slug: p.slug }));
}

export default function SlugLayout({ children }) {
  return children;
}
