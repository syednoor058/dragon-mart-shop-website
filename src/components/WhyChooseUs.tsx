import { Chat, Diamond, Fire, HandShake, Location, Star } from "./ui/icons";

const features = [
  {
    icon: <Diamond />,
    title: "Affordable Luxury",
    desc: "Premium quality fashion accessories at prices that make luxury accessible to everyone in Dubai.",
  },
  {
    icon: <Fire />,
    title: "Trending Styles",
    desc: "Our collection is updated regularly to reflect the latest global fashion trends and must-have pieces.",
  },
  {
    icon: <HandShake />,
    title: "Trusted by Thousands",
    desc: "Over 10,000 happy customers have made Elite Avenue their go-to fashion destination in Dubai.",
  },
  {
    icon: <Location />,
    title: "Iconic Location",
    desc: "Find us at Dragon Mart — Dubai's most beloved retail destination, easily accessible to all.",
  },
  {
    icon: <Star />,
    title: "Wide Variety",
    desc: "500+ styles across bags, sneakers, watches, belts, sunglasses, and fashion accessories.",
  },
  {
    icon: <Chat />,
    title: "Personal Shopping",
    desc: "Message us on WhatsApp for personalised style advice and product recommendations.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding bg-primary" aria-label="Why choose Elite Avenue">
      <div className="container-luxury">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="text-gold font-body text-sm tracking-[0.3em] uppercase font-medium">Why Elite Avenue</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-3 mb-4">
            The Elite Avenue Difference
          </h2>
          <p className="font-body text-primary-foreground/60 max-w-xl mx-auto">
            We don't just sell accessories — we help you tell your story through fashion.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="reveal group p-7 rounded-md border border-primary-foreground/10 hover:border-gold/40 hover:bg-primary-foreground/5 transition-all duration-300"
            >
              <span
                className="text-3xl mb-4 block group-hover:scale-110 transition-transform duration-300 text-accent" role="img" aria-hidden="true"
              >
                {feature.icon}
              </span>
              <h3 className="font-heading text-xl font-semibold text-primary-foreground mb-2">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-primary-foreground/60 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
