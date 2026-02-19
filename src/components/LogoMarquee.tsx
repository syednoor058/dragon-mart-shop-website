import {
  Marquee,
  MarqueeContent,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";

import dell from "@/assets/dell.png";
import armani from "@/assets/armani.png";
import invictus from "@/assets/invictus.png";
import dior from "@/assets/dior.png";
import samsung from "@/assets/samsung.png";
import mi from "@/assets/mi.png";
import cocacola from "@/assets/cocacola.png";
import msi from "@/assets/msi.png";
import nike from "@/assets/nike.png";
import raymond from "@/assets/raymond.png";

export const LogoMarquee = () => {
  const logoStack1 = [
    { id: 1, img: dell },
    { id: 2, img: armani },
    { id: 3, img: invictus },
    { id: 4, img: dior },
    { id: 5, img: samsung },
    { id: 6, img: mi },
    { id: 7, img: cocacola },
    { id: 8, img: msi },
    { id: 9, img: nike },
    { id: 10, img: raymond },
  ];

  const logoStack2 = [
    { id: 1, img: dell },
    { id: 2, img: armani },
    { id: 3, img: invictus },
    { id: 4, img: dior },
    { id: 5, img: samsung },
    { id: 6, img: mi },
    { id: 7, img: cocacola },
    { id: 8, img: msi },
    { id: 9, img: nike },
    { id: 10, img: raymond },
  ];
  return (
    <div className="size-full bg-white">
      <div className="py-6 lg:py-10 bg-gold mb-4">
        <Marquee>
          <MarqueeContent>
            {logoStack1.map((logo, index) => (
              <MarqueeItem key={index}>
                <img
                  alt={`logo ${index}`}
                  className="h-7 lg:h-8 w-auto px-3 lg:px-6 object-cover overflow-hidden"
                  src={logo.img}
                />
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>
      <div className="py-6 lg:py-10 bg-black">
        <Marquee>
          <MarqueeContent direction="right">
            {logoStack2.map((logo, index) => (
              <MarqueeItem key={index}>
                <img
                  alt={`Logo ${index}`}
                  className="h-7 lg:h-8 w-auto object-cover overflow-hidden px-3 lg:px-6 invert"
                  src={logo.img}
                />
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>
    </div>
  );
};
