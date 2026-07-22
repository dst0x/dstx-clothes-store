export const CATEGORIES = [
  { id: "01", name: "Shirt",  count: 174 },
  { id: "02", name: "Jacket", count: 361, active: true },
  { id: "03", name: "Jeans",  count: 368 },
  { id: "04", name: "Outer",  count: 117 },
  { id: "05", name: "Shoes",  count: 78  },
];

// Category products data
export const CATEGORY_PRODUCTS = {
  "BOMBER": [
    {
      id: "bomber-1",
      name: "Classic Black Bomber",
      price: "Rp 450.000",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=75",
      category: "BOMBER",
      description: "Bomber jacket klasik dengan warna hitam solid. Material premium dengan lining polyester yang nyaman."
    },
    {
      id: "bomber-2",
      name: "Navy Blue Bomber",
      price: "Rp 425.000",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=75",
      category: "BOMBER",
      description: "Bomber jacket navy dengan detail zipper YKK dan pocket samping yang fungsional."
    },
    {
      id: "bomber-3",
      name: "Olive Green Bomber",
      price: "Rp 475.000",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=75",
      category: "BOMBER",
      description: "Military-inspired bomber dengan warna olive green dan ribbed collar premium."
    },
    {
      id: "bomber-4",
      name: "Leather Bomber Premium",
      price: "Rp 850.000",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=75",
      category: "BOMBER",
      description: "Premium leather bomber dengan genuine leather dan detail stitching yang elegan."
    },
    {
      id: "bomber-5",
      name: "Reversible Bomber",
      price: "Rp 525.000",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=75",
      category: "BOMBER",
      description: "Bomber reversible dengan dua pilihan warna dalam satu jacket. Double styling option."
    },
    {
      id: "bomber-6",
      name: "Printed Bomber",
      price: "Rp 495.000",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=75",
      category: "BOMBER",
      description: "Bomber dengan exclusive print design. Limited edition collection 2026."
    }
  ],
  "VARSITY": [
    {
      id: "varsity-1",
      name: "Classic Varsity Red/White",
      price: "Rp 550.000",
      image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=500&q=75",
      category: "VARSITY",
      description: "Varsity jacket klasik dengan kombinasi merah putih. Wool body dan leather sleeves."
    },
    {
      id: "varsity-2",
      name: "Blue Heritage Varsity",
      price: "Rp 575.000",
      image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=500&q=75",
      category: "VARSITY",
      description: "Varsity dengan colorway biru navy dan putih. Chenille patches dan snap button."
    },
    {
      id: "varsity-3",
      name: "Black Gold Varsity",
      price: "Rp 595.000",
      image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=500&q=75",
      category: "VARSITY",
      description: "Premium varsity hitam dengan accent gold. Embroidered details dan satin lining."
    },
    {
      id: "varsity-4",
      name: "Green Varsity Limited",
      price: "Rp 625.000",
      image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=500&q=75",
      category: "VARSITY",
      description: "Limited edition varsity dengan warna forest green dan cream."
    },
    {
      id: "varsity-5",
      name: "Vintage Varsity",
      price: "Rp 650.000",
      image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=500&q=75",
      category: "VARSITY",
      description: "Varsity style vintage dengan washed effect. Retro vibes dengan modern fit."
    },
    {
      id: "varsity-6",
      name: "Oversized Varsity",
      price: "Rp 595.000",
      image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=500&q=75",
      category: "VARSITY",
      description: "Varsity dengan oversized fit untuk streetwear look yang lebih modern."
    }
  ],
  "PREMIUM": [
    {
      id: "premium-1",
      name: "Luxury Wool Coat",
      price: "Rp 1.250.000",
      image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=500&q=75",
      category: "PREMIUM",
      description: "Premium wool coat dengan 80% wool blend. Italian fabric dengan tailored fit."
    },
    {
      id: "premium-2",
      name: "Cashmere Overcoat",
      price: "Rp 1.850.000",
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&q=75",
      category: "PREMIUM",
      description: "Luxury cashmere overcoat untuk winter styling. Super soft dan warm."
    },
    {
      id: "premium-3",
      name: "Suede Jacket Premium",
      price: "Rp 1.450.000",
      image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=500&q=75",
      category: "PREMIUM",
      description: "Premium suede jacket dengan genuine suede leather. Handcrafted details."
    },
    {
      id: "premium-4",
      name: "Leather Trench Coat",
      price: "Rp 1.950.000",
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&q=75",
      category: "PREMIUM",
      description: "Full grain leather trench coat. Statement piece untuk sophisticated look."
    },
    {
      id: "premium-5",
      name: "Designer Parka",
      price: "Rp 1.550.000",
      image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=500&q=75",
      category: "PREMIUM",
      description: "Premium designer parka dengan fur hood detail. Limited production."
    },
    {
      id: "premium-6",
      name: "Exclusive Blazer",
      price: "Rp 1.350.000",
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&q=75",
      category: "PREMIUM",
      description: "Tailored blazer dari premium fabric. Perfect untuk formal occasions."
    }
  ],
  "WOMEN": [
    {
      id: "women-1",
      name: "Double Breasted Coat Black",
      price: "Rp 750.000",
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&q=75",
      category: "WOMEN",
      description: "Elegant double breasted coat dengan premium buttons. Sophisticated silhouette."
    },
    {
      id: "women-2",
      name: "Emerald Trench Coat",
      price: "Rp 825.000",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&q=75",
      category: "WOMEN",
      description: "Bold emerald green oversized trench dengan belt detail yang flattering."
    },
    {
      id: "women-3",
      name: "Cable Knit Cardigan",
      price: "Rp 425.000",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&q=75",
      category: "WOMEN",
      description: "Cozy oversized cardigan dengan cable knit texture. Perfect for layering."
    },
    {
      id: "women-4",
      name: "Camel Wool Coat",
      price: "Rp 895.000",
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&q=75",
      category: "WOMEN",
      description: "Timeless camel coat dari wool blend. Classic piece untuk winter wardrobe."
    },
    {
      id: "women-5",
      name: "Belted Trench Beige",
      price: "Rp 775.000",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&q=75",
      category: "WOMEN",
      description: "Classic beige trench coat dengan adjustable belt. Versatile styling option."
    },
    {
      id: "women-6",
      name: "Oversized Blazer",
      price: "Rp 595.000",
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&q=75",
      category: "WOMEN",
      description: "Modern oversized blazer untuk power dressing. Sharp cut dengan soft drape."
    },
    {
      id: "women-7",
      name: "Wool Blend Peacoat",
      price: "Rp 850.000",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&q=75",
      category: "WOMEN",
      description: "Navy peacoat dengan double breasted button. Nautical inspired design."
    },
    {
      id: "women-8",
      name: "Quilted Puffer Jacket",
      price: "Rp 695.000",
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&q=75",
      category: "WOMEN",
      description: "Lightweight quilted puffer dengan slim fit. Warm dan stylish untuk daily wear."
    }
  ]
};

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Emma Williams",
    title: "Fashion Stylist",
    quote: "Everything is absolutely perfect! From the fabric quality to the flawless fit every piece feels premium. This brand has completely transformed my wardrobe.",
    rating: 5,
    reviews: 49,
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=90",
  },
  {
    id: 2,
    name: "Marcus Chen",
    title: "Creative Director",
    quote: "TiiClothes has redefined what urban fashion means to me. The cuts are precise, the materials last, and every drop feels intentional. Genuinely impressive.",
    rating: 5,
    reviews: 37,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=90",
  },
  {
    id: 3,
    name: "Sofia Reyes",
    title: "Content Creator",
    quote: "I've been wearing TiiClothes exclusively for six months. The quality speaks for itself — these pieces hold up and still look brand new every season.",
    rating: 5,
    reviews: 62,
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&q=90",
  },
];

export const FEATURED_PRODUCTS = [
  {
    id: 1,
    title: "Signature Outerwear",
    caption: "©TiiClothes — going distance 2026",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=700&q=78",
  },
  {
    id: 2,
    title: "Urban Streetwear",
    caption: "©TiiClothes — just do it 2026",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=700&q=78",
  },
  {
    id: 3,
    title: "Statement Jacket",
    caption: "©TiiClothes — wear the moment 2026",
    image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=700&q=78",
  },
  {
    id: 4,
    title: "Essential Layers",
    caption: "©TiiClothes — everyday essentials 2026",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=700&q=78",
  },
  {
    id: 5,
    title: "Premium Collection",
    caption: "©TiiClothes — premium cut 2026",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700&q=78",
  },
  {
    id: 6,
    title: "Signature Drop",
    caption: "©TiiClothes — new arrivals 2026",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&q=78",
  },
];

export const GALLERY_ITEMS = [
  { id: 1, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=75", label: "Bomber Classic" },
  { id: 2, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=75", label: "Leather Bomber" },
  { id: 3, image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=500&q=75", label: "Varsity Heritage" },
  { id: 4, image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=75", label: "Urban Bomber" },
  { id: 5, image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=75", label: "Denim Jacket" },
  { id: 6, image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=500&q=75", label: "Suede Bomber" },
  { id: 7, image: "https://images.unsplash.com/photo-1554412930-c71286901968?w=500&q=75", label: "Windbreaker" },
  { id: 8, image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&q=75", label: "Coach Jacket" },
  { id: 9, image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=500&q=75", label: "Puffer Jacket" },
  { id: 10, image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=500&q=75", label: "Track Jacket" },
  { id: 11, image: "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?w=500&q=75", label: "Harrington" },
  { id: 12, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&q=75", label: "Flight Jacket" },
];

export const COLLECTIONS = [
  {
    id: 1,
    name: "Statement Pieces 2025",
    desc: "Your go-to wardrobe staples, crafted for comfort and effortless style.",
    active: true,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=90",
  },
  { id: 2, name: "Everyday Essentials 2026", desc: "Simple, clean, and built to last every day of the week." },
  { id: 3, name: "Timeless Classics 2026",   desc: "Iconic silhouettes that never go out of style."      },
  { id: 4, name: "Seasonal Collections 2025", desc: "Limited drops curated for the season ahead."         },
];

export const TICKER_ITEMS = [
  "STYLING", "CRAFTED STORIES", "PREMIUM MATERIALS", "PREMIUM FABRICS",
  "TIMELESS CUTS", "URBAN INFLUENCE", "SMART STYLING", "MADE IN JOGJA",
];

export const ECOMMERCE_PLATFORMS = [
  { name: "Shopee",     url: "https://shopee.co.id/tiiclothes",             color: "#EE4D2D", icon: "🛍️", desc: "Gratis ongkir & cashback"    },
  { name: "Tokopedia",  url: "https://tokopedia.com/tiiclothes",            color: "#00AA5B", icon: "🟢", desc: "Official store tersedia"       },
  { name: "Lazada",     url: "https://lazada.co.id/shop/tiiclothes",        color: "#0F146D", icon: "🔵", desc: "Flash sale setiap hari"        },
  { name: "TikTok Shop",url: "https://tiktok.com/@tiiclothes",              color: "#111111", icon: "♪",  desc: "Live shopping setiap malam"    },
];
