const PRODUCT_IMAGES = [
  "0024_1627c0d3-a6ed-470a-8b18-94baa9fdbcfc.png",
  "0066_kx6hpfvc2ju5lfgwazce.jpg",
  "0045_a1af8b43-2836-483d-8709-99eff1cc6f70.png",
  "0046_a56b26a0-30f1-4977-96f8-7acf1b3e0e02.png",
  "0060_b00b863a1b824040ad8e145adca74c61.jpg",
  "0065_hmc2z5wvf9hb72avvmue.jpg",
  "0034_33d8bac6-26c1-4828-8b39-4f6183430833.png",
  "0036_573d8a1a-edd0-46a5-a0fe-01a1c2bcc8f2.png",
  "0042_8051e79c-6152-440e-b402-8d1ba8d7c82e.png",
  "0047_032991f5ad4c4689aa2738c3e9b95be4.jpg",
  "0049_05919e3e9fcd45208bc422c6f022ca05.jpg",
  "0056_6d38f2f58c774aa3bb7afa3ff36c8865.jpg",
  "0048_037ce7d986d94696be8e9cac216c1368.jpg",
  "0050_0f85782e3cc145e8b0be483104e75fb0.jpg",
  "0051_21e177529079430cab79f5055e8587a5.jpg",
  "0052_2267489995104a1ea4eae73adca885a3.jpg",
  "0053_26e4049b9cd84d3682e0d309efd07922.jpg",
  "0054_2b2ddc54b8e04acf8638b43c53b512b6.jpg",
  "0055_37ef73857d2144dd98a55c222215b282.jpg",
  "0057_6fd319cc0a024cc59d18e00465205cfd.jpg",
  "0058_76a2f0bbb05045f099c0f900a88acc90.jpg",
  "0059_89529cf9a1714c9a95c679c18186af59.jpg",
  "0067_ml1fcz1vaopvqhnz7fby.jpg",
  "0035_4e4b7cd8-0885-42c2-8915-65b7355fc1d8.png",
  "0037_59e2ffed-ab85-496d-9423-d97cd0305b52.png",
  "0038_624f6cd2-f857-4f8c-a689-75c849516ea8.png",
  "0039_629aaf65-515f-4069-b730-28618f78597b.png",
  "0040_67be6470-4f74-4a2e-a37a-ececb775afeb.png",
  "0041_730dbe50-4bdc-4fa8-9a09-93bc5d6c6f38.png",
  "0043_859adc35-4c39-4094-a74d-281ffff9a3e6.png",
  "0044_96f9ed8a-ba62-426c-bd66-6762f40f3370.png",
];

export function getProductImageUrl(index) {
  const filename = PRODUCT_IMAGES[index % PRODUCT_IMAGES.length];
  return `/assets/images/${encodeURIComponent(filename)}`;
}

export function getProductSliderImages(productIndex) {
  const n = PRODUCT_IMAGES.length;
  return [
    getProductImageUrl(productIndex),
    getProductImageUrl(productIndex + 11),
    getProductImageUrl(productIndex + 23),
  ];
}

export const products = [
  {
    id: "1",
    slug: "salmon-omega-3-fish-oil-1000mg-capsule",
    name: "Salmon Omega 3 Fish Oil 1000mg Capsule",
    description: "High absorption | Helps support heart & brain health",
    quantity: "60 capsules",
    isBestseller: true,
    imageUrl: getProductImageUrl(0),
    rating: 4.4,
    reviewCount: 4105,
    currentPrice: 599,
    originalPrice: 749,
    discountPercentage: 20,
    brand: "PharmaRx Healthcare",
    highlights: [
      "100% RDA of Omega 3 for heart & brain support",
      "High absorption formula for better bioavailability",
      "Supports healthy cholesterol levels",
      "Promotes cognitive function",
    ],
  },
  {
    id: "2",
    slug: "cipcal-500-tablet-from-cipla",
    name: "Cipcal 500 Tablet from Cipla",
    description: "Source of Calcium & Vitamin D | For Bone, Joint care",
    quantity: "15 tablets",
    isBestseller: true,
    imageUrl: getProductImageUrl(1),
    rating: 4.6,
    reviewCount: 2890,
    currentPrice: 155,
    originalPrice: 225,
    discountPercentage: 31,
    brand: "Cipla Ltd.",
    highlights: [
      "Source of Calcium & Vitamin D for bone health",
      "Supports joint care and muscle function",
      "Helps maintain strong bones",
    ],
  },
  {
    id: "3",
    slug: "vicks-non-medicated-portable-nasal-inhaler",
    name: "Vicks Non-Medicated Portable Nasal Inhaler",
    description: "Relieves Blocked Nose",
    quantity: "1 Inhaler",
    isBestseller: false,
    imageUrl: getProductImageUrl(2),
    rating: 4.2,
    reviewCount: 1523,
    currentPrice: 95,
    originalPrice: 100,
    discountPercentage: 5,
    brand: "Procter & Gamble",
    highlights: ["Relieves blocked nose", "Portable and easy to use", "Non-medicated formula"],
  },
  {
    id: "4",
    slug: "dr-morepen-bg-03-gluco-one-glucose-monitoring-system-glucometer",
    name: "Dr Morepen BG 03 Gluco One Glucose Monitoring System Glucometer",
    description: "Accurate readings | 1 Kit",
    quantity: "1 Kit",
    isBestseller: false,
    imageUrl: getProductImageUrl(3),
    rating: 4.3,
    reviewCount: 892,
    currentPrice: 429,
    originalPrice: 999,
    discountPercentage: 57,
    brand: "Dr. Morepen",
    highlights: ["Accurate glucose readings", "1 complete kit", "Easy to use"],
  },
  {
    id: "5",
    slug: "triple-strength-omega-3-fish-oil-1250mg",
    name: "Triple Strength Omega 3 Fish Oil 1250mg",
    description: "560mg EPA & 400mg DHA | Heart & brain support",
    quantity: "90 capsules",
    isBestseller: true,
    imageUrl: getProductImageUrl(4),
    rating: 4.5,
    reviewCount: 3201,
    currentPrice: 659,
    originalPrice: 999,
    discountPercentage: 34,
    brand: "PharmaRx Healthcare",
    highlights: [
      "560mg EPA & 400mg DHA per serving",
      "Supports heart & brain health",
      "Triple strength formula",
    ],
  },
  {
    id: "6",
    slug: "depura-60000-iu-vitamin-d3-oral-solution",
    name: "Depura 60000 IU Vitamin D3 Oral Solution",
    description: "Sugar Free | For Nutritional deficiency",
    quantity: "5 ml Oral Solution",
    isBestseller: false,
    imageUrl: getProductImageUrl(5),
    rating: 4.4,
    reviewCount: 1876,
    currentPrice: 291,
    originalPrice: 300,
    discountPercentage: 3,
    brand: "Meyer Organics",
    highlights: ["Sugar free", "For nutritional deficiency", "60,000 IU Vitamin D3"],
  },
  {
    id: "7",
    slug: "arachitol-nano-bottle-60k-iu-vitamin-d3-oral-solution",
    name: "Arachitol Nano Bottle 60K IU Vitamin D3 Oral Solution",
    description: "Bone health support",
    quantity: "4 bottles",
    isBestseller: true,
    imageUrl: getProductImageUrl(6),
    rating: 4.5,
    reviewCount: 2103,
    currentPrice: 485,
    originalPrice: 520,
    discountPercentage: 7,
    brand: "Cipla Ltd.",
    highlights: ["Bone health support", "60K IU Vitamin D3", "Nano formulation"],
  },
  {
    id: "8",
    slug: "shelcal-hd-tablet-with-calcium-vitamin-d3",
    name: "Shelcal - HD Tablet with Calcium & Vitamin D3",
    description: "Bone, Joint & Muscle Care",
    quantity: "30 tablets",
    isBestseller: false,
    imageUrl: getProductImageUrl(7),
    rating: 4.6,
    reviewCount: 4521,
    currentPrice: 245,
    originalPrice: 280,
    discountPercentage: 13,
    brand: "Eris Lifesciences",
    highlights: [
      "Bone, joint & muscle care",
      "Calcium & Vitamin D3",
      "Supports bone density",
    ],
  },
  { id: "9", slug: "zincovit-tablet-15s", name: "Zincovit Tablet 15s", description: "Zinc & multivitamins | Immunity support", quantity: "15 tablets", isBestseller: true, imageUrl: getProductImageUrl(8), rating: 4.5, reviewCount: 3200, currentPrice: 89, originalPrice: 120, discountPercentage: 26, brand: "Divi's Laboratories", highlights: ["Zinc with multivitamins", "Immunity support"] },
  { id: "10", slug: "becosules-capsule-20s", name: "Becosules Capsule 20s", description: "B complex vitamins | Energy & metabolism", quantity: "20 capsules", isBestseller: false, imageUrl: getProductImageUrl(9), rating: 4.3, reviewCount: 2100, currentPrice: 45, originalPrice: 55, discountPercentage: 18, brand: "Pfizer", highlights: ["B complex", "Energy support"] },
  { id: "11", slug: "neurobion-forte-tablet-30s", name: "Neurobion Forte Tablet 30s", description: "B1, B6, B12 | Nerve health", quantity: "30 tablets", isBestseller: true, imageUrl: getProductImageUrl(10), rating: 4.6, reviewCount: 4500, currentPrice: 125, originalPrice: 150, discountPercentage: 17, brand: "Merck", highlights: ["Nerve health", "B vitamins"] },
  { id: "12", slug: "revital-h-women-30-capsules", name: "Revital H Women 30 Capsules", description: "Multivitamin for women | Daily nutrition", quantity: "30 capsules", isBestseller: false, imageUrl: getProductImageUrl(11), rating: 4.2, reviewCount: 1800, currentPrice: 299, originalPrice: 350, discountPercentage: 15, brand: "Dabur", highlights: ["For women", "Multivitamin"] },
  { id: "13", slug: "supradyn-daily-tablet-15s", name: "Supradyn Daily Tablet 15s", description: "Multivitamin & minerals | Daily energy", quantity: "15 tablets", isBestseller: true, imageUrl: getProductImageUrl(12), rating: 4.4, reviewCount: 2900, currentPrice: 199, originalPrice: 249, discountPercentage: 20, brand: "Bayer", highlights: ["Daily multivitamin", "Energy"] },
  { id: "14", slug: "benadryl-expectorant-100ml", name: "Benadryl Expectorant 100ml", description: "Cough relief | Expectorant", quantity: "100 ml", isBestseller: false, imageUrl: getProductImageUrl(13), rating: 4.1, reviewCount: 1200, currentPrice: 115, originalPrice: 135, discountPercentage: 15, brand: "Johnson & Johnson", highlights: ["Cough relief", "Expectorant"] },
  { id: "15", slug: "crocin-advance-tablet-15s", name: "Crocin Advance Tablet 15s", description: "Paracetamol 500mg | Fever & pain", quantity: "15 tablets", isBestseller: true, imageUrl: getProductImageUrl(14), rating: 4.5, reviewCount: 5600, currentPrice: 25, originalPrice: 30, discountPercentage: 17, brand: "GSK", highlights: ["Fever & pain", "Paracetamol"] },
  { id: "16", slug: "dolo-650-tablet-15s", name: "Dolo 650 Tablet 15s", description: "Paracetamol 650mg | Pain relief", quantity: "15 tablets", isBestseller: true, imageUrl: getProductImageUrl(15), rating: 4.6, reviewCount: 8900, currentPrice: 22, originalPrice: 28, discountPercentage: 21, brand: "Micro Labs", highlights: ["Pain relief", "Fever"] },
  { id: "17", slug: "volini-spray-60g", name: "Volini Spray 60g", description: "Pain relief spray | Muscle & joint", quantity: "60 g", isBestseller: false, imageUrl: getProductImageUrl(16), rating: 4.2, reviewCount: 3400, currentPrice: 185, originalPrice: 220, discountPercentage: 16, brand: "Sanofi", highlights: ["Pain relief", "Spray"] },
  { id: "18", slug: "digene-tablet-mint-15s", name: "Digene Tablet Mint 15s", description: "Antacid | Acidity & gas relief", quantity: "15 tablets", isBestseller: true, imageUrl: getProductImageUrl(17), rating: 4.4, reviewCount: 6700, currentPrice: 35, originalPrice: 42, discountPercentage: 17, brand: "Abbott", highlights: ["Acidity relief", "Antacid"] },
  { id: "19", slug: "gelusil-mint-tablet-15s", name: "Gelusil Mint Tablet 15s", description: "Antacid | Fast relief", quantity: "15 tablets", isBestseller: false, imageUrl: getProductImageUrl(18), rating: 4.3, reviewCount: 2300, currentPrice: 42, originalPrice: 50, discountPercentage: 16, brand: "Pfizer", highlights: ["Antacid", "Mint"] },
  { id: "20", slug: "liv-52-ds-syrup-200ml", name: "Liv 52 DS Syrup 200ml", description: "Liver support | Ayurvedic", quantity: "200 ml", isBestseller: true, imageUrl: getProductImageUrl(19), rating: 4.5, reviewCount: 4100, currentPrice: 165, originalPrice: 195, discountPercentage: 15, brand: "Himalaya", highlights: ["Liver support", "Ayurvedic"] },
  { id: "21", slug: "bonex-tablet-60s", name: "Bonex Tablet 60s", description: "Calcium & Vitamin D3 | Bone health", quantity: "60 tablets", isBestseller: false, imageUrl: getProductImageUrl(20), rating: 4.4, reviewCount: 1500, currentPrice: 275, originalPrice: 320, discountPercentage: 14, brand: "Eris Lifesciences", highlights: ["Bone health", "Calcium"] },
  { id: "22", slug: "feronia-xt-tablet-30s", name: "Feronia XT Tablet 30s", description: "Iron & folic acid | Anaemia", quantity: "30 tablets", isBestseller: true, imageUrl: getProductImageUrl(21), rating: 4.3, reviewCount: 2200, currentPrice: 95, originalPrice: 115, discountPercentage: 17, brand: "Eris Lifesciences", highlights: ["Iron supplement", "Folic acid"] },
  { id: "23", slug: "folvite-5mg-tablet-10s", name: "Folvite 5mg Tablet 10s", description: "Folic acid | Pregnancy & anaemia", quantity: "10 tablets", isBestseller: false, imageUrl: getProductImageUrl(22), rating: 4.5, reviewCount: 1800, currentPrice: 28, originalPrice: 35, discountPercentage: 20, brand: "Cipla Ltd.", highlights: ["Folic acid", "Pregnancy"] },
  { id: "24", slug: "shelcal-500-tablet-30s", name: "Shelcal 500 Tablet 30s", description: "Calcium carbonate | Bone strength", quantity: "30 tablets", isBestseller: true, imageUrl: getProductImageUrl(23), rating: 4.6, reviewCount: 3800, currentPrice: 185, originalPrice: 220, discountPercentage: 16, brand: "Eris Lifesciences", highlights: ["Calcium", "Bone strength"] },
  { id: "25", slug: "vitamin-e-cap-400iu-10s", name: "Vitamin E Cap 400IU 10s", description: "Antioxidant | Skin & immunity", quantity: "10 softgels", isBestseller: false, imageUrl: getProductImageUrl(24), rating: 4.4, reviewCount: 2100, currentPrice: 145, originalPrice: 175, discountPercentage: 17, brand: "PharmaRx Healthcare", highlights: ["Vitamin E", "Antioxidant"] },
  { id: "26", slug: "vitamin-c-1000mg-tablet-30s", name: "Vitamin C 1000mg Tablet 30s", description: "Immunity & antioxidant", quantity: "30 tablets", isBestseller: true, imageUrl: getProductImageUrl(25), rating: 4.5, reviewCount: 2900, currentPrice: 199, originalPrice: 249, discountPercentage: 20, brand: "PharmaRx Healthcare", highlights: ["Vitamin C", "Immunity"] },
  { id: "27", slug: "melatonin-3mg-tablet-30s", name: "Melatonin 3mg Tablet 30s", description: "Sleep support | Natural", quantity: "30 tablets", isBestseller: false, imageUrl: getProductImageUrl(26), rating: 4.2, reviewCount: 900, currentPrice: 349, originalPrice: 399, discountPercentage: 13, brand: "PharmaRx Healthcare", highlights: ["Sleep support", "Melatonin"] },
  { id: "28", slug: "biotin-10000mcg-tablet-60s", name: "Biotin 10000mcg Tablet 60s", description: "Hair, skin & nails", quantity: "60 tablets", isBestseller: true, imageUrl: getProductImageUrl(27), rating: 4.5, reviewCount: 4200, currentPrice: 299, originalPrice: 359, discountPercentage: 17, brand: "PharmaRx Healthcare", highlights: ["Biotin", "Hair & nails"] },
  { id: "29", slug: "ashwagandha-500mg-capsule-60s", name: "Ashwagandha 500mg Capsule 60s", description: "Stress & energy | Ayurvedic", quantity: "60 capsules", isBestseller: true, imageUrl: getProductImageUrl(28), rating: 4.4, reviewCount: 3100, currentPrice: 249, originalPrice: 299, discountPercentage: 17, brand: "PharmaRx Healthcare", highlights: ["Ashwagandha", "Stress support"] },
  { id: "30", slug: "turmeric-curcumin-capsule-60s", name: "Turmeric Curcumin Capsule 60s", description: "Anti-inflammatory | Joint health", quantity: "60 capsules", isBestseller: false, imageUrl: getProductImageUrl(29), rating: 4.3, reviewCount: 1900, currentPrice: 399, originalPrice: 469, discountPercentage: 15, brand: "PharmaRx Healthcare", highlights: ["Curcumin", "Joint health"] },
  { id: "31", slug: "multivitamin-daily-capsule-30s", name: "Multivitamin Daily Capsule 30s", description: "Complete daily nutrition", quantity: "30 capsules", isBestseller: true, imageUrl: getProductImageUrl(30), rating: 4.5, reviewCount: 2500, currentPrice: 279, originalPrice: 329, discountPercentage: 15, brand: "PharmaRx Healthcare", highlights: ["Multivitamin", "Daily nutrition"] },
  { id: "32", slug: "magnesium-glycinate-tablet-60s", name: "Magnesium Glycinate Tablet 60s", description: "Muscle & sleep support", quantity: "60 tablets", isBestseller: false, imageUrl: getProductImageUrl(31), rating: 4.4, reviewCount: 1100, currentPrice: 449, originalPrice: 519, discountPercentage: 13, brand: "PharmaRx Healthcare", highlights: ["Magnesium", "Sleep & muscles"] },
];

export const PRODUCTS_PER_PAGE = 20;

export function getProductById(id) {
  return products.find((p) => p.id === id) ?? null;
}

export function getProductBySlugAndId(slug, id) {
  const product = getProductById(id);
  if (!product || product.slug !== slug) return null;
  return product;
}

export function getProductUrl(product) {
  return `/${product.slug}/${product.id}`;
}

export function getPaginatedProducts(page = 1) {
  const start = (page - 1) * PRODUCTS_PER_PAGE;
  return products.slice(start, start + PRODUCTS_PER_PAGE);
}

export function getTotalPages() {
  return Math.ceil(products.length / PRODUCTS_PER_PAGE);
}
