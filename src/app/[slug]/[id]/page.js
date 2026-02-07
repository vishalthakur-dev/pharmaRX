import Link from "next/link";
import { getProductBySlugAndId, getProductSliderImages } from "@/data/products";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Logo from "@/components/Logo";
import PdpPricingCard from "@/components/PdpPricingCard";
import ProductImageSlider from "@/components/ProductImageSlider";

export const dynamicParams = true;

export async function generateStaticParams({ params }) {
  const { slug } = await params;
  const { products } = await import("@/data/products");
  const product = products.find((p) => p.slug === slug);
  if (!product) return [];
  return [{ id: product.id }];
}

export async function generateMetadata({ params }) {
  const { slug, id } = await params;
  const product = getProductBySlugAndId(slug, id);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} | Pharma RX`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.imageUrl],
    },
  };
}

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pharma-rx.vercel.app";

export default async function ProductPage({ params }) {
  const { slug, id } = await params;
  const product = getProductBySlugAndId(slug, id);
  if (!product) notFound();

  const {
    name,
    description,
    quantity,
    isBestseller,
    imageUrl,
    rating,
    reviewCount,
    brand,
    currentPrice,
    highlights = [],
  } = product;

  const productIndex = parseInt(id, 10) - 1;
  const images = getProductSliderImages(productIndex);

  const productUrl = `${BASE_URL}/${slug}/${id}`;
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": productUrl,
    name,
    description,
    image: imageUrl.startsWith("/") ? `${BASE_URL}${imageUrl}` : imageUrl,
    ...(brand && { brand: { "@type": "Brand", name: brand } }),
    offers: {
      "@type": "Offer",
      url: productUrl,
      price: currentPrice,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating,
      reviewCount,
      bestRating: 5,
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${name} | Pharma RX`,
    description,
    url: productUrl,
    mainEntity: { "@id": productUrl },
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Logo />
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Category", href: "/category/" },
            { label: "Vitamins & Supplements", href: "/category/vitamins-and-supplements/" },
            { label: name },
          ]}
        />

        <article className="mt-6 grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-x-12">
          <section
            className="flex flex-col items-center lg:col-span-4 lg:items-start"
            aria-label="Product images"
          >
            <ProductImageSlider
              images={images}
              name={name}
              isBestseller={isBestseller}
            />
          </section>

          <section className="min-w-0 lg:col-span-5">
            <h1 className="text-xl font-bold text-zinc-900 sm:text-2xl">
              {name}
            </h1>
            {brand && (
              <p className="mt-1 text-sm text-zinc-600">
                By {brand}
              </p>
            )}
            <div
              className="mt-3 flex flex-wrap items-center gap-2"
              aria-label={`Rating: ${rating} out of 5 from ${reviewCount} reviews`}
            >
              <span className="text-cyan-500">{"★".repeat(Math.floor(rating))}</span>
              <span className="font-medium text-zinc-900">{rating}</span>
              <span className="text-sm text-zinc-500">
                {reviewCount} Ratings &amp; {Math.min(reviewCount, 99)} Reviews
              </span>
            </div>
            <p className="mt-3 text-zinc-600">{description}</p>
            <p className="mt-1 text-sm text-zinc-500">{quantity}</p>
            {highlights.length > 0 && (
              <ul className="mt-4 space-y-2" aria-label="Product highlights">
                {highlights.map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-zinc-700">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </section>

          <aside className="min-w-0 lg:col-span-3 lg:col-start-10">
            <div className="lg:sticky lg:top-6">
              <PdpPricingCard product={product} />
            </div>
          </aside>
        </article>

        <section className="mt-10 border-t border-zinc-200 bg-white px-4 py-8 sm:px-6 lg:px-8" aria-labelledby="product-info-heading">
          <div className="mx-auto max-w-3xl">
            <h2 id="product-info-heading" className="text-lg font-semibold text-zinc-900">
              About {name}
            </h2>
            <p className="mt-3 text-sm text-zinc-600">
              {name} is a vitamins and supplements product{brand ? ` from ${brand}` : ""}. This pack contains {quantity}. {description}
            </p>
            {highlights.length > 0 && (
              <>
                <h3 className="mt-5 text-base font-medium text-zinc-900">Key benefits</h3>
                <ul className="mt-2 space-y-1.5 text-sm text-zinc-600">
                  {highlights.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}
            <h3 className="mt-5 text-base font-medium text-zinc-900">Storage &amp; usage</h3>
            <p className="mt-2 text-sm text-zinc-600">
              Store {name} in a cool, dry place away from direct sunlight. Keep the container tightly closed and out of reach of children. Use as directed by your healthcare provider or as per the label. Do not exceed the recommended dose.
            </p>
            <h3 className="mt-5 text-base font-medium text-zinc-900">Disclaimer</h3>
            <p className="mt-2 text-sm text-zinc-600">
              This product is not intended to diagnose, treat, cure, or prevent any disease. Consult your doctor or pharmacist before use if you are pregnant, nursing, taking other medicines, or have a medical condition. Read the label and leaflet before use.
            </p>
            <p className="mt-6 text-xs text-zinc-500">
              Pharma RX offers {name} and other vitamins and supplements with genuine products and reliable delivery. For more options, browse our{" "}
              <Link href="/category/vitamins-and-supplements/" className="text-cyan-600 underline hover:text-cyan-700">
                Vitamins &amp; Supplements
              </Link>{" "}
              category.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
