import Link from "next/link";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pharmac.example";

export default function Breadcrumbs({ items }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href && { item: `${BASE_URL}${item.href}` }),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-zinc-600">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-1">
              {index > 0 && (
                <span className="text-zinc-400" aria-hidden>
                  /
                </span>
              )}
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-cyan-600 focus:underline focus:outline-none"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-zinc-900" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
