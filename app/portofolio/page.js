import Image from "next/image";
import PortfolioCard from "../components/PortfolioCard";
import villas from "../data/villas";

export default function Portfolio() {
  return (
    <main>
      <section className="relative w-full h-screen">
        {/* Background Image */}
        <Image
          src="/images/hero-portfolio.jpg"
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
            OUR PORTFOLIO OF
          </h2>
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            AMAZING DESIGNS
          </h1>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Title */}
          <div>
            <h2 className="text-3xl md:text-4xl font-light leading-snug">
              OUR BEST{" "}
              <span className="font-bold block md:inline">PROJECTS</span>
            </h2>
          </div>

          {/* Right: Description */}
          <div className="text-gray-700 space-y-4 text-base md:text-lg leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos et laudantium odit quas qui sunt.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum expedita fuga incidunt nam quibusdam quos veritatis. Ab amet aperiam, corporis dolorum ducimus facere soluta voluptatibus. Debitis dignissimos ea nisi sunt.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem iste nostrum optio velit vero voluptatibus.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Our Villas
          </h2>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {villas.map((villa, index) => (
              <PortfolioCard
                key={index}
                title={villa.title}
                location={villa.location}
                image={villa.image}
                url={villa.url}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
