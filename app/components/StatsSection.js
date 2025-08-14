// components/StatsSection.jsx
"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 8, label: "Year of Experience" },
  { value: 250, suffix: "+", label: "Projects" },
  { value: 400, suffix: "+", label: "Satisfied Clients" },
  { value: 1.75, suffix: " mil", label: "Followers" },
];

export default function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true, // hanya jalankan sekali
    threshold: 0.3, // mulai animasi jika 30% section terlihat
  });

  return (
    <section ref={ref} className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <h2 className="text-4xl font-bold text-black">
              {inView ? (
                <CountUp
                  end={stat.value}
                  duration={2}
                  decimals={stat.value % 1 !== 0 ? 2 : 0}
                />
              ) : (
                0
              )}
              {stat.suffix || ""}
            </h2>
            <p className="text-gray-700 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
