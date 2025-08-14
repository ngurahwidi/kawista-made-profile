"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Virtual } from "swiper/modules";
import "swiper/css";
import "swiper/css/virtual";
import Image from "next/image";

export default function MarqueeLogoVirtual() {
  const logos = [
    { src: "/images/logo-placeholder.svg", alt: "Logo 1" },
    { src: "/images/logo-placeholder-2.svg", alt: "Logo 2" },
    { src: "/images/logo-placeholder-3.svg", alt: "Logo 3" },
    { src: "/images/logo-placeholder-4.svg", alt: "Logo 4" },
    { src: "/images/logo-placeholder-5.svg", alt: "Logo 5" },
  ];

  // Gandakan list supaya loop terlihat mulus
  const virtualSlides = Array.from({ length: 20 }, (_, index) => {
    const logo = logos[index % logos.length];
    return { ...logo, id: index };
  });

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-light">
          AS <span className="font-bold">FEATURED IN</span>
        </h2>
      </div>

      <Swiper
        modules={[Autoplay, Virtual]}
        virtual
        loop
        slidesPerView={2}
        spaceBetween={30}
        autoplay={{
          delay: 0, // tanpa jeda
          disableOnInteraction: false,
        }}
        speed={3000} // makin kecil makin cepat
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      >
        {virtualSlides.map((logo, index) => (
          <SwiperSlide key={logo.id} virtualIndex={index}>
            <div className="relative w-full h-12 md:h-14 flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
