import Image from "next/image";
import Link from "next/link";

export default function ConsultationSection() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh]">
      {/* Background Image */}
      <Image
        src="/images/office.jpg" // ganti dengan gambar background kamu
        alt="Office"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-end px-6 md:px-12 lg:px-20">
        <div className="text-right max-w-lg">
          <h3 className="text-lg md:text-xl text-white tracking-widest font-light">
            SCHEDULE
          </h3>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mt-1">
            A FREE CONSULTATION
          </h2>
          <Link
            href="/contact"
            className="inline-block mt-6 bg-white text-black px-6 py-3 text-sm md:text-base font-medium shadow border border-transparent hover:bg-transparent hover:text-white hover:border-white transition-colors duration-300"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </section>
  );
}
