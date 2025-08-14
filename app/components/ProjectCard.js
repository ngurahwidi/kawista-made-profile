// components/ProjectCard.js
"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

// Import icon lucide jika ingin gunakan
import { MapPin, BedDouble, Ruler } from "lucide-react";

export default function ProjectCard({
  title,
  price,
  priceCurrency,
  location,
  beds,
  buildSize,
  landSize,
  description,
  images = [],
  link,
  imagePosition = "left", // "left" | "right"
}) {
  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Slider Gambar */}
        <div
          className={`relative h-[300px] md:h-[500px] w-full overflow-hidden rounded-lg 
            ${imagePosition === "right" ? "md:order-2" : "md:order-1"}`}
        >
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative w-full h-[300px] md:h-[500px] zoom-image">
                  <Image
                    src={img}
                    alt={`${title} ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Konten */}
        <div
          className={`bg-white shadow-lg rounded-lg p-6 md:p-10 
            ${imagePosition === "right" ? "md:order-1" : "md:order-2"}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          <p className="text-lg md:text-xl mt-2">
            FROM{" "}
            <span className="font-bold">
              {priceCurrency}
              {price}
            </span>
          </p>

          {/* Info */}
          <div className="flex flex-wrap gap-4 mt-4 text-gray-600 text-sm md:text-base">
            {location && (
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-black" />
                <span className="font-semibold">{location}</span>
              </div>
            )}
            {beds && (
              <div className="flex items-center gap-2">
                <BedDouble size={18} className="text-black" />
                <span className="font-semibold">{beds} BEDS</span>
              </div>
            )}
            {buildSize && (
              <div className="flex items-center gap-2">
                <Ruler size={18} className="text-black" />
                <span className="font-semibold">{buildSize} BUILD SIZE</span>
              </div>
            )}
            {landSize && (
              <div className="flex items-center gap-2">
                <Ruler size={18} className="text-black" />
                <span className="font-semibold">{landSize} LAND SIZE</span>
              </div>
            )}
          </div>

          {/* Deskripsi */}
          {description && <p className="mt-4 text-gray-700">{description}</p>}

          {/* Tombol */}
          {link && (
            <Link
              href={link}
              className="inline-block mt-6 bg-black text-white px-6 py-3 border border-transparent hover:bg-transparent hover:text-black hover:border-black transition-colors duration-300"
            >
              Find out more
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
