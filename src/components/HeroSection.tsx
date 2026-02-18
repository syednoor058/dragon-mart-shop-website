import heroBg from "@/assets/hero-bg.jpg";
import { getWhatsAppLink } from "@/lib/store-config";

const badges = [
  { label: "Premium Quality", delay: "" },
  { label: "Best Prices", delay: "animate-float-delay" },
  { label: "Dragon Mart, Dubai", delay: "animate-float-delay-2" },
];

export function HeroSection() {
  const handleVisitStore = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative lg:min-h-screen flex items-center justify-center overflow-hidden py-20"
      aria-label="Hero section"
    >
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video src="https://res.cloudinary.com/de8g5laai/video/upload/v1771427919/Untitled_design_xjge0h.mp4" className="w-full h-full object-cover" muted autoPlay loop />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/70 to-primary/90" />
        <div className="absolute inset-0 bg-gradient-radial-gold" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury px-6 text-center">
        {/* Eyebrow */}
        <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="inline-flex items-center gap-2 text-gold font-body text-sm tracking-[0.3em] uppercase mb-6">
            <span className="w-8 h-px bg-gradient-gold" />
            Dragon Mart · Dubai
            <span className="w-8 h-px bg-gradient-gold" />
          </span>
        </div>

        {/* Heading */}
        <h1
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Wear the
          <span className="block text-gradient-gold">Extraordinary.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="font-body text-lg md:text-xl text-primary-foreground/75 max-w-4xl mx-auto mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.35s" }}
        >
          Dubai's favourite destination for premium fashion accessories —
          designer bags, sneakers, watches, belts & sunglasses at prices that
          make luxury accessible.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 mb-8 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gradient-gold text-primary font-body font-semibold text-base px-8 py-4 rounded-full shadow-gold hover:shadow-luxury-hover hover:-translate-y-1 transition-all duration-300 min-w-[200px] justify-center"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current flex-shrink-0" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </a>
          <button
            onClick={handleVisitStore}
            className="flex items-center gap-2 border border-primary-foreground/40 text-primary-foreground font-body font-medium text-base px-8 py-4 rounded-full hover:border-gold hover:text-gold hover:-translate-y-1 transition-all duration-300 min-w-[200px] justify-center backdrop-blur-sm"
          >
            Visit Our Store
          </button>
        </div>

        {/* Floating Badges */}
        <div
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {badges.map((badge) => (
            <span
              key={badge.label}
              className={`inline-flex items-center gap-1.5 bg-primary-foreground/10 backdrop-blur-sm border border-gold/30 text-primary-foreground/90 font-body text-xs font-medium tracking-wide px-4 py-2 rounded-full`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
              {badge.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
