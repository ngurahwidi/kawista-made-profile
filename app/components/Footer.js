import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo */}
        <div>
          <Image
            src="/images/LOGO + TEXT KAWISTA.png"
            alt="Kawista Made Logo"
            width={200}
            height={90}
          />
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-4 text-sm col-span-2">
          <div className="flex flex-col gap-2">
            <a href="#">About</a>
            <a href="#">Portfolio</a>
            <a href="#">Villa Tours</a>
            <a href="#">Build Calculator</a>
            <a href="#">Careers</a>
            <a href="#">Balitecture Realty</a>
            <a href="#">Case Study</a>
            <a href="#">Newsletter</a>
          </div>
          <div className="flex flex-col gap-2">
            <a href="#">Blog</a>
            <a href="#">Press Release</a>
            <a href="#">Invest in Bali</a>
            <a href="#">Bali Land Zoning</a>
            <a href="#">Testimonials</a>
            <a href="#">Explore</a>
            <a href="#">FAQ</a>
          </div>
        </div>

        {/* Contact */}
        <div className="text-sm">
          <p className="mb-2">✆ WhatsApp</p>
          <p className="font-semibold">+62 811-3909-045</p>

          <p className="mt-4 mb-2">✆ Front Office</p>
          <p className="font-semibold">+62 813-3978-3231</p>
          <p className="text-xs mt-1">(10am – 6pm Bali)</p>
        </div>
      </div>

      <div className="border-t border-gray-600 my-8 w-full max-w-6xl mx-auto" />

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mb-6">
        <a
          href="#"
          className="p-3 border border-white rounded-full hover:bg-white hover:text-black transition"
        >
          <FaFacebookF size={18} />
        </a>
        <a
          href="#"
          className="p-3 border border-white rounded-full hover:bg-white hover:text-black transition"
        >
          <FaPinterestP size={18} />
        </a>
        <a
          href="#"
          className="p-3 border border-white rounded-full hover:bg-white hover:text-black transition"
        >
          <FaYoutube size={18} />
        </a>
        <a
          href="#"
          className="p-3 border border-white rounded-full hover:bg-white hover:text-black transition"
        >
          <FaInstagram size={18} />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-center text-xs text-gray-400">
        &copy; {currentYear} KawistaMade All Rights Reserved
      </p>
    </footer>
  );
}
