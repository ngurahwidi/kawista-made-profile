import Image from "next/image";
import Link from "next/link";
import { MapPin, Layout, Wrench, FileText, Sofa } from "lucide-react";

export default function Page() {
  const services = [
    {
      title: "Land Services",
      image: "/images/land.jpg",
      link: "/services/land",
      icon: MapPin,
    },
    {
      title: "Architectural Design",
      image: "/images/what-we-offer.jpg",
      link: "/services/architecture",
      icon: Layout,
    },
    {
      title: "Construction Services",
      image: "/images/contruction.jpg",
      link: "/services/construction",
      icon: Wrench,
    },
    {
      title: "Bespoke Furniture",
      image: "/images/furniture.jpg",
      link: "/services/furniture",
      icon: Sofa,
    },
    {
      title: "Property Management",
      image: "/images/property-management.jpg",
      link: "/services/villa-management",
      icon: FileText,
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
            OUR
          </h2>
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            SERVICES
          </h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-start md:items-center gap-8">
          {/* Left Text */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-light leading-tight">
              COMPLETE PROPERTY <br />
              <span className="font-bold">SERVICES</span>
            </h2>
          </div>

          {/* Right Text */}
          <div className="md:w-1/2 text-gray-700 text-base font-light md:text-lg leading-relaxed">
            <p>
              We provide a comprehensive property development and maintenance
              service throughout Bali. We can deliver whichever services you
              require or provide a complete end-to-end service, depending on
              your budget and requirements.
            </p>
            <p className="mt-4">
              As well as one-off architecturally designed properties, we also
              have a selection of popular villa designs available at a set
              price. These villas can be tailored to your exact specifications.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  href={service.link}
                  className="group block relative overflow-hidden rounded-lg"
                >
                  <div className="relative w-full h-64">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition duration-500"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-4">
                      <Icon size={48} className="text-white" />
                      <h3 className="text-white mt-2 text-center font-medium">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
