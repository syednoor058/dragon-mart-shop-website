import { getWhatsAppLink } from "@/lib/store-config";
import darkBackground from "@/assets/hero-section-dark-background.webp";

export function CTASection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden py-14 px-6"
      aria-label="Call to action"
    >
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      {/* White wave decoration */}
      <div className="absolute inset-0">
        <img
          src={darkBackground}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-40 z-0"
        />
      </div>
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative z-10 container-luxury text-center max-w-3xl mx-auto">
        <div className="reveal">
          <span className="text-gold font-body text-sm tracking-[0.3em] uppercase font-medium">
            Visit Us Today
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground mt-4 mb-6 leading-tight">
            Your Next Favourite
            <span className="block text-gradient-cream">Piece Awaits.</span>
          </h2>
          <p className="font-body text-gold text-sm font-medium mb-10">
            ⚡ Limited stock on trending styles — enquire now
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppLink("Hi! I'd like to enquire about your latest collection at Dragon Mart.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-gold text-foreground font-body font-bold text-base px-10 py-4 rounded-full shadow-gold hover:shadow-luxury-hover hover:-translate-y-1 transition-all duration-300 min-w-[220px] justify-center"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Message Us Now
            </a>
            <a
              href="https://share.google/qO1IoroeSQFKJSKX3" target="_blank"
              className="font-body font-medium text-primary-foreground/90 hover:text-gold transition-colors duration-200 text-sm underline underline-offset-4"
            >
              Get Directions →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
