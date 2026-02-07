import { getPaginatedProducts, getTotalPages } from "@/data/products";
import ProductGrid from "@/components/ProductGrid";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import Logo from "@/components/Logo";
import Pagination from "@/components/Pagination";

const BASE_PATH = "/category/vitamins-and-supplements";

export async function generateMetadata({ searchParams }) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params?.page || "1", 10) || 1);
  const totalPages = getTotalPages();
  const canonical = page === 1 ? BASE_PATH : `${BASE_PATH}?page=${page}`;
  const prev = page > 1 ? (page === 2 ? BASE_PATH : `${BASE_PATH}?page=${page - 1}`) : null;
  const next = page < totalPages ? `${BASE_PATH}?page=${page + 1}` : null;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pharma-rx.vercel.app";

  return {
    title: page === 1 ? "Vitamins & Supplements | Pharma RX" : `Vitamins & Supplements - Page ${page} | Pharma RX`,
    description: "Shop vitamins and supplements at Pharma RX. Omega 3, Vitamin D3, calcium, and more. Best prices and fast delivery.",
    alternates: {
      canonical: `${baseUrl}${canonical}`,
      ...(prev && { prev: `${baseUrl}${prev}` }),
      ...(next && { next: `${baseUrl}${next}` }),
    },
  };
}

export default async function VitaminsAndSupplementsPage({ searchParams }) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params?.page || "1", 10) || 1);
  const totalPages = getTotalPages();
  const pageProducts = getPaginatedProducts(page);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pharma-rx.vercel.app";
  const pageUrl = page === 1 ? `${baseUrl}${BASE_PATH}` : `${baseUrl}${BASE_PATH}?page=${page}`;
  const pageTitle = page === 1 ? "Vitamins & Supplements | Pharma RX" : `Vitamins & Supplements - Page ${page} | Pharma RX`;
  const pageDescription = "Shop vitamins and supplements at Pharma RX. Omega 3, Vitamin D3, calcium, and more. Best prices and fast delivery.";

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": ["CollectionPage", "WebPage"],
    name: pageTitle,
    description: pageDescription,
    url: pageUrl,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <JsonLd products={pageProducts} listName="Vitamins & Supplements" />
      <div className="min-h-screen bg-zinc-50">
        <header className="border-b border-zinc-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <h1 className="flex items-center">
              <Logo />
            </h1>
          </div>
        </header>
        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Category", href: "/category/" },
              { label: "Vitamins & Supplements" },
            ]}
          />
          <section aria-label="Product listing">
            <h2 className="sr-only">Vitamins & Supplements</h2>
            <ProductGrid products={pageProducts} />
            <Pagination currentPage={page} totalPages={totalPages} />
          </section>
        </main>
      </div>
    </>
  );
}
