import aboutImg from "@/assets/about-store.jpg";

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background" aria-label="About our store">
      <div className="container-luxury">
        <div className="flex flex-col-reverse md:flex-row gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="w-full md:w-1/2 reveal relative group">
            <div className="absolute -inset-3 bg-gradient-gold opacity-10 rounded-3xl blur-xl group-hover:opacity-20 transition-opacity duration-500" />
            <div className="relative overflow-hidden rounded-sm shadow-luxury">
              <img
                src={aboutImg}
                alt="LUXEMART boutique interior at Dragon Mart Dubai – premium fashion accessories display"
                className="w-full h-[420px] md:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 bg-primary/90 backdrop-blur-sm text-primary-foreground px-5 py-3 rounded-xl shadow-luxury">
                <p className="font-heading text-2xl font-bold text-gold">5+</p>
                <p className="font-body text-xs text-primary-foreground/70 tracking-wider uppercase mt-0.5">Years in Dubai</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 reveal stagger flex flex-col gap-6">
            <div className="flex flex-col">
              <span className="text-gold font-body text-sm tracking-[0.3em] uppercase font-medium">Our Story</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 leading-tight gold-underline">
                Luxury Fashion,<br />Dubai Prices.
              </h2>
            </div>

            <p className="font-body text-muted-foreground text-base leading-relaxed">
              Nestled in the heart of Dragon Mart — Dubai's iconic retail destination — LUXEMART was born from a simple belief: <strong className="text-foreground font-medium">everyone deserves to look extraordinary</strong>. We curate the finest fashion accessories from around the world and bring them to you at prices that redefine luxury.
            </p>

            <p className="font-body text-muted-foreground text-base leading-relaxed">
              From statement bags and head-turning sneakers to precision timepieces and eye-catching sunglasses, every piece in our collection is hand-selected to meet the style expectations of Dubai's most discerning shoppers.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { value: "10,000+", label: "Happy Customers" },
                { value: "500+", label: "Styles Available" },
                { value: "Dragon Mart", label: "Dubai's Best" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-sm bg-secondary border border-border">
                  <p className="font-heading text-xl font-bold text-foreground">{stat.value}</p>
                  <p className="font-body text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
