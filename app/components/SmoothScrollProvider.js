"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScrollLayout({ children }) {
  useEffect(() => {
    // Inisialisasi Lenis
    const lenis = new Lenis({
      duration: 1.2, // durasi animasi scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing bawaan
      smoothWheel: true,
      smoothTouch: false, // kalau di mobile tidak perlu terlalu berat
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // cleanup
    };
  }, []);

  return <>{children}</>;
}
