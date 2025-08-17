import React from "react";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";

export default function PortfolioCard({ title, location, image, url }) {
  return (
    <Link href={url}>
      <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg cursor-pointer group">
        {/* Gambar */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

        {/* Text */}
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-sm">{location}</p>
        </div>
      </div>
    </Link>
  );
}

PortfolioCard.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
