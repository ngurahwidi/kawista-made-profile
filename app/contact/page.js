import ComingSoon from "../components/ComingSoon";
import Image from "next/image";

export default function Contact() {
  return (
      <main>
          <section className="relative w-full h-screen">
              {/* Background Image */}
              <Image
                  src="/images/hero-contact.jpg"
                  alt="About Hero"
                  fill
                  className="object-cover"
                  priority
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"/>

              {/* Text Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                  <h2 className="text-white text-2xl font-extralight md:text-4xl tracking-widest mb-2">
                      LET'S
                  </h2>
                  <h1 className="text-white text-4xl md:text-6xl font-bold">
                      GET IN TOUCH
                  </h1>
              </div>
          </section>
      </main>
  );
}
