"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const heroImgages = [
  { src: "/images/hero-1.svg", alt: "Smart Watch" },
  { src: "/images/hero-2.svg", alt: "Bag" },
  { src: "/images/hero-3.svg", alt: "Lamp" },
  { src: "/images/hero-4.svg", alt: "Air Fryer" },
  { src: "/images/hero-5.svg", alt: "Chair" },
];

const HeroCarousel = () => {
  return (
    <div className="hero-carousel">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={false}
        showStatus={false}
      >
        {heroImgages.map((img) => {
          return (
            <Image
              src={img.src}
              alt={img.alt}
              width={484}
              height={484}
              className="object-contain"
              key={img.alt}
            />
          );
        })}
      </Carousel>
      <Image
        src="/assets/icons/hand-drawn-arrow.svg"
        alt="arrow pointing towards the Search bar"
        width={175}
        height={175}
        className="max-xl:hidden absolute -left-[15%] bottom-[5%] z-0"
      />
    </div>
  );
};

export default HeroCarousel;
