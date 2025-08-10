import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section>
        <div className="relative min-h-screen overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div className="relative w-full h-full">
              <Image
                src="/images/hero-kawista.webp"
                alt="Kawista Hero Background"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 min-h-screen flex items-center">
            <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Content */}
                <div className="lg:col-span-7">
                  <div className="text-white">
                    <p className="text-lg md:text-xl mb-4 font-light tracking-wide">
                      LAUNCHING SOON
                    </p>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-8">
                      <span className="text-white">SUKU</span>
                      <br />
                      <span className="text-gray opacity-60">RESIDENCES</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
