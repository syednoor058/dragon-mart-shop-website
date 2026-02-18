import productBag from "@/assets/product-bag.webp";
import productSneakers from "@/assets/product-sneakers.webp";
import productWatch from "@/assets/product-watch.webp";
import productBelt from "@/assets/product-belt.webp";
import productSunglasses from "@/assets/product-sunglasses.webp";
import productWallet from "@/assets/product-wallet.webp";
import { Star } from "lucide-react";

const products = [
  {
    image: productBag,
    title: "Designer Tote Bag",
    category: "Bags & Handbags",
    desc: "Premium saffiano leather with gold-tone hardware. A statement of effortless elegance.",
    alt: "Premium designer tote bag in tan leather with gold accents",
    rating: 4.8,
  },
  {
    image: productSneakers,
    title: "Limited Edition Sneakers",
    category: "Footwear",
    desc: "Street-ready silhouettes with gold detailing. Turn heads wherever you go.",
    alt: "White and gold premium fashion sneakers",
    rating: 4.3,
  },
  {
    image: productWatch,
    title: "Gold Dial Timepiece",
    category: "Watches",
    desc: "Precision craftsmanship meets bold design. Tell time in pure luxury.",
    alt: "Gold case dress watch with black leather strap",
    rating: 4.4,
  },
  {
    image: productBelt,
    title: "Classic Leather Belt",
    category: "Belts",
    desc: "Supple full-grain leather with polished gold buckles. The finishing touch.",
    alt: "Premium black and brown leather belts with gold buckles",
    rating: 5.0,
  },
  {
    image: productWallet,
    title: "Signature Leather Wallet",
    category: "Wallets",
    desc: "Handcrafted from premium Italian leather with gold accents. The perfect complement to any look.",
    alt: "Premium black leather wallet with gold hardware",
    rating: 4.5,
  },
  {
    image: productSunglasses,
    title: "Statement Eyewear",
    category: "Sunglasses",
    desc: "Vintage-inspired frames with UV400 protection. Iconic from every angle.",
    alt: "Premium black frame sunglasses on marble surface",
    rating: 4.9,
  },
];

export function FeaturedProducts() {
  return (
    <section
      id="products"
      className="section-padding bg-secondary/40"
      aria-label="Featured products"
    >
      <div className="container-luxury">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="text-gold font-body text-sm tracking-[0.3em] uppercase font-medium">
            Our Collection
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Curated for You
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Each piece is hand-selected for quality, style, and value. Luxury
            fashion that fits your lifestyle and your budget.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 reveal">
          <p className="font-body text-muted-foreground mb-4">
            Want to see more? We have 500+ styles in store.
          </p>
          <a
            href="https://wa.me/971501234567?text=Hi! I'd love to know more about your collection."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold px-8 py-3.5 rounded-full hover:bg-charcoal hover:-translate-y-0.5 transition-all duration-200 shadow-card hover:shadow-card-hover"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  image,
  title,
  category,
  desc,
  alt,
  rating,
}: {
  image: string;
  title: string;
  category: string;
  desc: string;
  alt: string;
  rating: number;
}) {
  return (
    <article className="reveal bg-card rounded-md overflow-hidden shadow-card hover:shadow-card-hover hover-lift product-zoom group border border-border/50">
      <div className="relative overflow-hidden aspect-[12/9]">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-card opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="absolute top-4 left-4 bg-gold/90 text-primary font-body text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
          {category}
        </span>
      </div>
      <div className="px-6 mt-6 mb-2">
        <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
          {title}
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          {desc}
        </p>
      </div>
      <div className="px-6 pb-6 text-sm flex flex-row gap-2 items-center">
        <span>({rating.toFixed(1)})</span>
        {rating > 4.5 && (
          <span className="flex flex-row items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-gold text-gold" />
            ))}
          </span>
        )}
        {rating <= 4.5 && (
          <span className="flex flex-row items-center">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-gold text-gold" />
            ))}
            <Star className="w-4 h-4 fill-gray-300 text-gray-300" />
          </span>
        )}
      </div>
    </article>
  );
}
