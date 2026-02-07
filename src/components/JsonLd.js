export default function JsonLd({ products, listName = "Vitamins & Supplements" }) {
  const itemListElement = products.map((p, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Product",
      "@id": `https://pharmac.example/${p.slug}/${p.id}`,
      name: p.name,
      description: p.description,
      image: p.imageUrl,
      offers: {
        "@type": "Offer",
        price: p.currentPrice,
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: p.rating,
        reviewCount: p.reviewCount,
        bestRating: 5,
      },
    },
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: listName,
    numberOfItems: products.length,
    itemListElement,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
