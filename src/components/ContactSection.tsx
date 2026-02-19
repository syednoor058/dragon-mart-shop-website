import { MapPin, Phone, Clock, MessageSquareText } from "lucide-react";

const storeInfo = [
  {
    icon: MapPin,
    title: "Location",
    lines: ["Dragon Mart, International City", "Dubai, United Arab Emirates"],
  },
  {
    icon: Phone,
    title: "Phone / WhatsApp",
    lines: ["+971 50 123 4567"],
    link: "https://wa.me/971501234567",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    lines: [
      "Mon – Thu: 10:00 AM – 10:00 PM",
      "Fri – Sat: 10:00 AM – 11:00 PM",
      "Sunday: 11:00 AM – 10:00 PM",
    ],
  },
  {
    icon: MessageSquareText,
    title: "WhatsApp Orders",
    lines: [
      "Message us anytime for availability,",
      "photos, and WhatsApp orders.",
    ],
    link: "https://wa.me/971501234567?text=Hi! I want to place a WhatsApp order.",
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="section-padding bg-[#F8F7F5]"
      aria-label="Contact and location"
    >
      <div className="container-luxury">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="text-gold font-body text-sm tracking-[0.3em] uppercase font-medium">
            Find Us
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Visit LUXEMART
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Located in the heart of Dragon Mart — Dubai's iconic shopping
            destination. We're easy to find and always happy to welcome you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 stagger">
            {storeInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.title}
                  className="reveal bg-card border border-border rounded-md p-6 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-sm bg-gradient-dark flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="font-body font-semibold text-foreground text-sm mb-2">
                    {info.title}
                  </h3>
                  {info.lines.map((line, i) => (
                    <p
                      key={i}
                      className="font-body text-sm text-muted-foreground leading-relaxed"
                    >
                      {line}
                    </p>
                  ))}
                  {info.link && (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-gold text-xs font-medium hover:underline"
                    >
                      Open →
                    </a>
                  )}
                </div>
              );
            })}
          </div>

          {/* Map embed */}
          <div className="reveal rounded-md overflow-hidden shadow-luxury border border-border aspect-[4/3]">
            <iframe
              title="Dragon Mart Dubai location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.5!2d55.4136!3d25.1873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f65b8cbf3d3fd%3A0x3e1b1b2b2b3b4b5b!2sDragon%20Mart%2C%20Dubai!5e0!3m2!1sen!2sae!4v1617000000000!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Google Maps showing Dragon Mart Dubai location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
