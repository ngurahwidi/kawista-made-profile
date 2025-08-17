"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();
  const menuItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    {
      label: "SERVICES",
      href: "/services",
      submenu: [
        { label: "LAND", href: "/services/land" },
        { label: "ARCHITECTURE", href: "/services/architecture" },
        { label: "CONSTRUCTION", href: "/services/construction" },
        { label: "FURNITURE", href: "/services/furniture" },
        { label: "VILLA MANAGEMENT", href: "/services/villa-management" },
      ],
    },
    {
      label: "DEVELOPMENTS",
      href: "/developments",
      submenu: [
        { label: "ULO VILLAS", href: "/developments/ulo-villas" },
        { label: "SERENO VILLA", href: "/developments/sereno-villa" },
        { label: "KAWISTA VILLA", href: "/developments/kawista-villa" },
      ],
    },
    {
      label: "PORTOFOLIO",
      href: "/portofolio",
    },
    { label: "CASE STUDY", href: "/case-study" },
    { label: "CONTACT", href: "/contact" },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const isActive = (item) => {
    if (pathName === item.href) {
      return true;
    }
    if (item.submenu) {
      return item.submenu.some((sub) => pathName.startsWith(sub.href));
    }
    return false;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full px-3 top-0 left-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-around mx-2 py-3">
        {/* Logo */}
        <div className="p-3 w-full max-w-[200px]">
          <Image
            src="/images/LOGO + TEXT KAWISTA.png"
            alt="Kawista Made Logo"
            width={200}
            height={90}
            className="w-full h-auto"
          />
        </div>

        {/* Desktop Menu */}
        <div className="p-3">
          <ul className="hidden xl:flex cursor-pointer items-center">
            {menuItems.map((item) => (
              <li key={item.label} className="relative group">
                {item.submenu ? (
                  <div className="flex items-center gap-1">
                    <Link
                      href={item.href}
                      className="text-sm px-6 py-4 text-white border-b border-transparent hover:border-white transition duration-500 ease-in-out"
                    >
                      {item.label}
                    </Link>
                    <button className="text-white">
                      <FiChevronDown />
                    </button>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm px-6 py-4 text-white border-b border-transparent hover:border-white transition duration-500 ease-in-out"
                  >
                    {item.label}
                  </Link>
                )}

                {item.submenu && (
                  <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-black text-white rounded shadow-lg w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                    {item.submenu.map((sub) => (
                      <li key={sub.label}>
                        <Link
                          href={sub.href}
                          className="block px-4 py-2 hover:bg-gray-200 hover:text-black transition"
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-white text-2xl xl:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FiMenu />
        </button>

        {/* Mobile Fullscreen Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen z-50 transform transition-transform duration-1000 xl:hidden ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex flex-col h-full bg-black gap-10">
            {/* Logo */}
            <div className="p-6 w-full max-w-[200px] mt-2">
              <Image
                src="/images/LOGO + TEXT KAWISTA.png"
                alt="Kawista Logo"
                width={200}
                height={90}
                className="w-full h-auto"
              />
            </div>

            {/* Menu Items */}
            <ul className="text-white space-y-4 px-4">
              {menuItems.map((item, index) => (
                <div className="" key={item.label}>
                  <div className="flex items-center justify-between w-full">
                    <Link
                      href={item.href}
                      className={`text-xl font-light flex-1 ${
                        isActive(item)
                          ? "underline underline-offset-8"
                          : "hover:underline hover:underline-offset-8"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>

                    {item.submenu && (
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.label ? null : item.label
                          )
                        }
                      >
                        {openDropdown === item.label ? (
                          <FiChevronUp size={20} />
                        ) : (
                          <FiChevronDown size={20} />
                        )}
                      </button>
                    )}
                  </div>

                  {/* Dropdown mobile */}
                  {item.submenu && (
                    <ul
                      className={`pl-6 mt-2 space-y-2 overflow-hidden transition-all duration-700 ease-in-out overflow-y-auto ${
                        openDropdown === item.label
                          ? "max-h-40 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {item.submenu.map((sub) => (
                        <li key={sub.label}>
                          <Link
                            href={sub.href}
                            className="text-lg font-light"
                            onClick={() => setMenuOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </ul>

            {/* Close Button */}
            <button
              className="absolute right-8 top-8 text-white text-3xl"
              onClick={() => setMenuOpen(false)}
            >
              <FiX />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
