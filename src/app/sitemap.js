import { products, getTotalPages } from "@/data/products";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pharma-rx.vercel.app";
const CATEGORY_PATH = "/category/vitamins-and-supplements";

export default function sitemap() {
  const totalPages = getTotalPages();
  const now = new Date();

  const urls = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}${CATEGORY_PATH}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/cart`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  for (let page = 2; page <= totalPages; page++) {
    urls.push({
      url: `${BASE_URL}${CATEGORY_PATH}/?page=${page}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  products.forEach((p) => {
    urls.push({
      url: `${BASE_URL}/${p.slug}/${p.id}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    });
  });

  return urls;
}
