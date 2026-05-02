"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { src: "/images/ocean.jpg", alt: "海" },
  { src: "/images/forest.jpg", alt: "森" },
  { src: "/images/earth.jpg", alt: "地球" },
];

export function ImageSlideshow({ children }: { children?: React.ReactNode }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background images */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover scale-105"
            unoptimized
            priority={i === 0}
          />
        </div>
      ))}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content overlay */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
