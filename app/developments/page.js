import Image from "next/image";
import Link from "next/link";
import ProjectCard from "../components/ProjectCard";

export default function Developments() {
  const items = [
    {
      title: "POPULAR INVESTMENT CLIMATE",
      text: "Indonesia is the second most popular country to invest in, according to U.S. News.",
    },
    {
      title: "HIGHLY AWARDED",
      text: "Bali is regularly awarded the best destination in the TripAdvisor Travelers’ Choice Awards, including in 2021.",
    },
    {
      title: "INVESTMENT FRIENDLY",
      text: "Indonesia welcomes foreign investment, buying property in Bali is safe, legal, and in your name.",
    },
  ];
  return (
    <main>
      <section className="relative w-full h-screen">
        {/* Background Image */}
        <Image
          src="/images/hero-kawista.webp"
          alt="About Hero"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h2 className="text-white text-2xl font-extralight md:text-4xl tracking-widest mb-2">
            KAWISTA
          </h2>
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            DEVELOPMENTS
          </h1>
        </div>
      </section>

      <ProjectCard
        title="ULO VILLAS"
        price="329,000"
        priceCurrency="$"
        location="ULUWATU"
        beds={3}
        buildSize="169M²"
        landSize="169M²"
        description="Solas Uluwatu is designed to ensure each villa is a private oasis..."
        images={[
          "/images/carrousel-1.jpg",
          "/images/carrousel-2.jpg",
          "/images/carrousel-3.jpg",
        ]}
        link="/projects/solas-uluwatu"
        imagePosition="left"
      />
      <ProjectCard
        title="SERENO VILLAS"
        price="329,000"
        priceCurrency="$"
        location="ULUWATU"
        beds={3}
        buildSize="169M²"
        landSize="169M²"
        description="Solas Uluwatu is designed to ensure each villa is a private oasis..."
        images={[
          "/images/carrousel-4.jpg",
          "/images/carrousel-5.jpg",
          "/images/carrousel-6.jpg",
          "/images/carrousel-7.jpg",
        ]}
        link="/projects/solas-uluwatu"
        imagePosition="right"
      />
      <ProjectCard
        title="KAWISTA VILLAS"
        price="329,000"
        priceCurrency="$"
        location="ULUWATU"
        beds={3}
        buildSize="169M²"
        landSize="169M²"
        description="Solas Uluwatu is designed to ensure each villa is a private oasis..."
        images={[
          "/images/carrousel-8.jpg",
          "/images/carrousel-9.jpg",
          "/images/carrousel-10.jpg",
          "/images/carrousel-11.jpg",
        ]}
        link="/projects/solas-uluwatu"
        imagePosition="left"
      />

      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          {/* Heading */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <h2 className="text-2xl md:text-4xl font-light leading-snug">
              WHY BALI IS A{" "}
              <span className="font-bold block md:inline">
                GOOD INVESTMENT?
              </span>
            </h2>
            <p className="text-gray-700 text-base md:text-lg max-w-xl">
              Bali is one of the World’s most popular tourist destinations,
              attracting visitors from all around the globe
            </p>
          </div>

          {/* Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="bg-black text-white rounded-xl p-12 md:p-14 flex flex-col"
              >
                <h3 className="font-bold text-lg md:text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
