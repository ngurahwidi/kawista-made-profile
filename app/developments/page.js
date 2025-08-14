import Image from "next/image";
import Link from "next/link";
import ProjectCard from "../components/ProjectCard";

export default function Developments() {
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
    </main>
  );
}
