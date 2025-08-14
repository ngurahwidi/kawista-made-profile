"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

export default function NewDevelopments() {
  const images = [
    "/images/carrousel-1.jpg",
    "/images/carrousel-2.jpg",
    "/images/carrousel-3.jpg",
    "/images/carrousel-4.jpg",
    "/images/carrousel-5.jpg",
    "/images/carrousel-6.jpg",
    "/images/carrousel-7.jpg",
    "/images/carrousel-8.jpg",
    "/images/carrousel-9.jpg",
    "/images/carrousel-10.jpg",
    "/images/carrousel-11.jpg",
  ];

  return (
    <section className="bg-gray-50 py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 items-center">
        {/* Left Text - Mobile optimized */}
        <div className="w-full md:w-auto order-2 md:order-1">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light leading-tight sm:leading-snug">
            INVEST IN OUR <br />
            <span className="font-bold block mt-1">NEW DEVELOPMENTS</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
            Bali property development is a perfect choice for investment. Design
            and build your dream villa in the tropical paradise of Bali. Begin
            with us now.
          </p>

          <button className="mt-4 sm:mt-6 w-full sm:w-auto bg-black text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base hover:bg-transparent hover:text-black border border-black transition duration-300">
            Explore Bali Developments
          </button>
        </div>

        {/* Right Carousel - Mobile optimized */}
        <div className="w-full order-1 md:order-2">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={800}
            loop={true}
            slidesPerView={1}
            spaceBetween={10}
            className="w-full overflow-hidden"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full aspect-[4/3] h-[250px] sm:h-[300px] md:h-[350px]">
                  <Image
                    src={src}
                    alt={`Development ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
