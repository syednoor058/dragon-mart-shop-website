import { Accessories, Belt, HandBag, Sneakers, Sunglasses, Watch } from "./ui/icons";

const categories = [
  {
    name: "Bags & Handbags",
    icon: <HandBag />,
    count: "120+ Styles",
    desc: "Totes, crossbodies, clutches & more",
  },
  {
    name: "Sneakers",
    icon: <Sneakers />,
    count: "80+ Styles",
    desc: "Trending kicks for every look",
  },
  {
    name: "Watches",
    icon: <Watch />,
    count: "60+ Models",
    desc: "Classic to contemporary timepieces",
  },
  {
    name: "Sunglasses",
    icon: <Sunglasses />,
    count: "100+ Frames",
    desc: "UV protection meets bold style",
  },
  {
    name: "Belts",
    icon: <Belt />,
    count: "50+ Designs",
    desc: "Leather, chain & statement buckles",
  },
  {
    name: "Accessories",
    icon: <Accessories />,
    count: "200+ Items",
    desc: "Scarves, jewellery & fashion extras",
  },
];

export function CategoriesSection() {
  return (
    <section id="categories" className="section-padding bg-background" aria-label="Product categories">
      <div className="container-luxury">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="text-gold font-body text-sm tracking-[0.3em] uppercase font-medium">Browse By Category</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Find Your Style
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            From everyday essentials to statement pieces, explore our curated selection across all categories.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 stagger">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href={`https://wa.me/971501234567?text=Hi! I'm looking for ${cat.name}. Can you show me your collection?`}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group flex flex-col items-center text-center p-6 md:p-8 rounded-md bg-secondary/60 border border-border hover:border-gold/50 hover:bg-secondary hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              aria-label={`Browse ${cat.name}`}
            >
              <span className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300" role="img" aria-hidden="true">
                {cat.icon}
              </span>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{cat.name}</h3>
              <span className="font-body text-xs font-medium text-gold mb-2">{cat.count}</span>
              <p className="font-body text-sm text-muted-foreground">{cat.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
