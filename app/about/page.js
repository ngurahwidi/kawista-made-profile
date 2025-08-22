import Image from "next/image";
import CountUp from "react-countup";
import StatsSection from "../components/StatsSection";
import Link from "next/link";

export default function About() {
  const skills = [
    "Land Services",
    "Architectural Design",
    "Construction Services",
    "Property Management",
    "Bespoke Furniture",
  ];

  return (
    <main>
      <section className="relative w-full h-screen">
        {/* Background Image */}
        <Image
          src="/images/hero-about.jpg"
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
            OUR STORY
          </h2>
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            BEGINS HERE
          </h1>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Column */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-light mb-2">
              WE ALWAYS MAKE
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">THE BEST</h1>
            <Link
              href="/services"
              className="bg-black text-white px-6 py-3 border border-transparent hover:bg-transparent hover:text-black hover:border-black transition-colors duration-300"
            >
              View Our Services
            </Link>
          </div>

          {/* Right Column */}
          <div className="">
            <p className="mb-4 font-light">
              <strong>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum debitis doloribus in maxime quos unde?
              </strong>{" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex iste quia similique totam! Amet beatae doloribus ex fugit, hic laborum magni necessitatibus officia omnis pariatur quas quod quos soluta vitae!
            </p>

            <p className="mb-4 font-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium amet commodi deleniti dicta dolor eius excepturi expedita explicabo illo illum magnam maxime nihil quaerat quam, quasi ratione totam velit!
            </p>

            <p className="mb-6 font-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis doloribus fuga illum magnam natus quaerat quas quibusdam quod tempora. Aperiam aut cumque ea eius esse eum ipsum omnis possimus ullam?
            </p>

            <Link
              href="/contact"
              className="bg-black text-white px-6 py-3 border border-transparent hover:bg-transparent hover:text-black hover:border-black transition-colors duration-300"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          {/* Left Column */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-light">OUR</h2>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">SKILLS</h1>
            <p className="text-gray-700 leading-relaxed">
              We are skilled and experienced in end-to-end property services.
              Our commitment is to assist our valuable clientele to make the
              most out of their Bali investment.
            </p>
          </div>

          {/* Right Column */}
          <div>
            {skills.map((skill, index) => (
              <div
                key={index}
                className="py-4 border-b border-gray-200 text-lg font-light hover:text-black transition cursor-pointer"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />

      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Judul */}
          <h3 className="text-lg uppercase tracking-widest text-gray-700">
            THE TEAM
          </h3>
          <h2 className="text-xl md:text-4xl font-bold mt-2">
            BEHIND OUR SUCCESS
          </h2>
          <p className="text-gray-500 mt-2">
            RESPONSIBLE FOR MAKING THE MAGIC HAPPEN
          </p>

          {/* Gambar */}
          <div className="mt-8">
            <Image
              src="/images/placeholder-image.png"
              alt="The Team"
              width={1200}
              height={600}
              className="rounded-lg object-cover w-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
