import Image from "next/image";
import LogoMarquee from "./components/MarqueeLogoVirtual";
import NewDevelopments from "./components/NewDevelopments";

export default function Home() {
  const services = [
    {
      title: "Off-plan Developments",
      description:
        "Discover our thoughtfully designed off-plan projects, crafted to deliver exceptional investment returns and modern living in Bali’s prime locations.",
      image: "/images/what-we-offer.jpg",
      buttonText: "Explore Developments",
    },
    {
      title: "Architectural Design",
      description:
        "Bring your dream property to life with our bespoke architectural services, blending cutting-edge design with Bali’s unique charm.",
      image: "/images/what-we-offer-1.jpg",
      buttonText: "Explore Architectural Design",
    },
    {
      title: "Land & Villa Sales",
      description:
        "Browse our premium selection of land and villas, offering the perfect balance of luxury, location, and investment potential.",
      image: "/images/what-we-offer-2.webp",
      buttonText: "Explore Land & Villa Sales",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section>
        <div className="relative min-h-screen overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div className="relative w-full h-full">
              <Image
                src="/images/hero-home.jpg"
                alt="Kawista Hero Background"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 min-h-screen flex items-center">
            <div className="w-full max-w-7xl mx-auto px4 sm:px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Content */}
                <div className="lg:col-span-7">
                  <div className="text-white">
                    <p className="text-sm sm:text-base md:text-xl mb-3 md:mb-4 font-light tracking-wide">
                      LAUNCHING SOON
                    </p>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight md:leading-none mb-6 md:mb-8">
                      <span className="text-white">KAWISTA</span>
                      <br />
                      <span className="text-gray-300 opacity-60">
                        VILLA
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left - Image */}
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden">
              <Image
                src="/images/about-image.jpg"
                alt="Balitecture Villa"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Right - Content */}
            <div>
              <h2 className="text-lg tracking-wide text-gray-700 uppercase">
                About
              </h2>
              <h1 className="text-3xl sm:text-4xl font-bold mb-6">
                KAWISTA MADE
              </h1>
              <p className="text-gray-700 mb-6 font-light">
                <strong className="font-bold">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dignissimos earum eveniet excepturi facilis id nulla quis, rem velit veritatis.
                </strong>{" "}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur corporis dignissimos eaque explicabo, illo in itaque iusto libero minus mollitia, nesciunt odit praesentium quam recusandae reiciendis repellendus sed, sint! Qui!
              </p>
              <button className="bg-black text-white font-light px-6 py-3 border border-transparent hover:bg-transparent hover:text-black hover:border-black transition-colors duration-300">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide">
            WHAT WE <span className="font-bold">OFFER</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Image */}
              <div className="w-full aspect-[4/3] relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="mt-4 border-t border-gray-200 pt-4">
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-6">
                  {service.description}
                </p>
                <button className="bg-black text-white px-6 py-3 border border-transparent hover:bg-transparent hover:text-black hover:border-black transition-colors duration-300">
                  {service.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <LogoMarquee />
      <NewDevelopments />
    </main>
  );
}
