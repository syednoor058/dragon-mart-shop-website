import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you sell original and authentic products?",
    answer:
      "Yes, absolutely. At Elite Avenue, we are committed to quality and authenticity. Every product in our collection is carefully sourced and quality-checked to ensure you receive exactly what you see — no compromises.",
  },
  {
    question: "Where exactly are you located?",
    answer:
      "We are located inside Dragon Mart, Dubai — one of the UAE's largest retail destinations. Dragon Mart is easily accessible from all parts of Dubai and is open 7 days a week. Message us on WhatsApp for our exact shop number.",
  },
  {
    question: "Do you take online orders?",
    answer:
      "While we don't have an online shop, we do take orders via WhatsApp! Simply message us with what you're looking for, and we'll check availability, send photos, and arrange collection or delivery within Dubai.",
  },
  {
    question: "Do you ship outside of Dubai or the UAE?",
    answer:
      "Currently, we primarily serve customers within Dubai and the UAE. However, for international inquiries, please message us on WhatsApp and we'll explore the best options available for you.",
  },
  {
    question: "Can I visit the store to browse before buying?",
    answer:
      "Of course! We love welcoming customers in-store. Visit us at Dragon Mart, Dubai during our opening hours and our friendly team will be happy to assist you in finding the perfect piece.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash (AED), credit/debit cards, and mobile payments. For WhatsApp orders, bank transfer details will be provided upon confirmation.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border rounded-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-card hover:bg-secondary/50 transition-colors duration-200 group"
        aria-expanded={open}
      >
        <span className="font-body font-medium text-foreground text-sm md:text-base pr-4 group-hover:text-gold transition-colors">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-180 text-gold" : ""
          }`}
          aria-hidden="true"
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-6 py-5 font-body text-sm text-muted-foreground leading-relaxed border-t border-border bg-secondary/20">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FAQSection() {
  return (
    <section id="faq" className="section-padding bg-background" aria-label="Frequently asked questions">
      <div className="container-luxury max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <span className="text-gold font-body text-sm tracking-[0.3em] uppercase font-medium">FAQ</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Got Questions?
          </h2>
          <p className="font-body text-muted-foreground">
            Everything you need to know about Elite Avenue and how we work.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 stagger">
          {faqs.map((faq) => (
            <div key={faq.question} className="reveal">
              <FAQItem {...faq} />
            </div>
          ))}
        </div>

        <div className="text-center mt-10 reveal">
          <p className="font-body text-muted-foreground text-sm">
            Still have questions?{" "}
            <a
              href="https://wa.me/971501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold font-medium hover:underline"
            >
              Ask us on WhatsApp →
            </a>
          </p>
        </div>
      </div>

      {/* JSON-LD FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
