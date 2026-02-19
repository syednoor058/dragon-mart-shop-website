const testimonials = [
  {
    name: "Fatima Al Mansoori",
    location: "Dubai, UAE",
    avatar: "FA",
    rating: 5,
    review:
      "I discovered Elite Avenue while shopping at Dragon Mart and I'm obsessed! The bag collection is incredible — designer quality at a fraction of the price. My friends always ask where I shop.",
  },
  {
    name: "Omar Khalid",
    location: "Sharjah, UAE",
    avatar: "OK",
    rating: 5,
    review:
      "Best sneaker selection in Dragon Mart, hands down. The staff are knowledgeable and really helped me find the perfect pair. WhatsApp service is super quick too!",
  },
  {
    name: "Priya Sharma",
    location: "Dubai, UAE",
    avatar: "PS",
    rating: 5,
    review:
      "Bought a stunning watch for my husband from Elite Avenue. The quality is exceptional and the price was very reasonable. Will definitely be coming back for more gifts.",
  },
  {
    name: "Ahmed Hassan",
    location: "Abu Dhabi, UAE",
    avatar: "AH",
    rating: 5,
    review:
      "Visited Dragon Mart specifically for Elite Avenue after seeing them on Instagram. Did not disappoint — amazing sunglasses collection and the staff gave great style advice.",
  },
  {
    name: "Layla Benali",
    location: "Dubai, UAE",
    avatar: "LB",
    rating: 5,
    review:
      "I've been shopping here for 3 years. They always have the latest trends and the belts and accessories are top quality. Best value in Dubai!",
  },
  {
    name: "Rajan Patel",
    location: "Dubai, UAE",
    avatar: "RP",
    rating: 5,
    review:
      "Messaged them on WhatsApp and got a personalised recommendation within minutes. The bag arrived exactly as described. Absolutely recommend Elite Avenue!",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: rating }).map((_, i) => (
        <span key={i} className="text-gold text-sm" aria-hidden="true">★</span>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="reviews" className="section-padding bg-[#F8F7F5]" aria-label="Customer reviews">
      <div className="container-luxury">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="text-gold font-body text-sm tracking-[0.3em] uppercase font-medium">Customer Love</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            What Dubai Says
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Thousands of satisfied customers across Dubai and the UAE trust Elite Avenue for their fashion needs.
          </p>
          {/* Aggregate rating */}
          <div className="flex items-center justify-center gap-2 mt-5">
            <div className="flex gap-0.5" aria-label="5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-gold text-xl" aria-hidden="true">★</span>
              ))}
            </div>
            <span className="font-heading text-xl font-bold text-foreground">5.0</span>
            <span className="font-body text-sm text-muted-foreground">· 10,000+ happy shoppers</span>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="reveal bg-card rounded-md p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 border border-border/50 flex flex-col gap-4"
            >
              <StarRating rating={t.rating} />
              <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">
                "{t.review}"
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0">
                  <span className="font-body text-xs font-bold text-primary">{t.avatar}</span>
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
