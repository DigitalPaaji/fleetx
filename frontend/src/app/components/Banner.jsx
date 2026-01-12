'use client';
import React, { useState, useEffect } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";

const images = [
  "/banner.webp",
  "/banner5.webp",
  "/7.webp",
  "/banner4.webp",
];

function Banner2() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[80vh] lg:min-h-screen overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
      />

      {/* Dark overlay for readability */}
      {/* <div className="absolute inset-0 bg-black/60"></div> */}

      {/* Content */}
      <div className="relative z-20 max-w-5xl min-h-screen mx-auto h-full flex items-center justify-center px-4 md:px-16 xl:px-28">
        <div
          className="
          bg-black/70 backdrop-blur-sm
          rounded-2xl
          p-6 md:p-10 lg:p-12
          text-center
          border border-white/10
          shadow-2xl
          "
        >
          {/* H1 */}
          <h1 className="clash-600 text-3xl md:text-4xl lg:text-5xl font-bold text-[#FCFAEE] leading-tight">
            Drive with Fleet X Logistics – Amazon Delivery Driver Jobs in Havant
          </h1>

          {/* Sub headline */}
          <p className="mt-4 text-base md:text-lg text-[#d6d6d6] leading-relaxed">
            Free company vans. Clear weekly pay. Consistent work. <br />
            Join a professional Amazon Delivery Service Partner in Hampshire.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

            {/* Primary CTA */}
            <Link href="/contact">
              <div
                className="
                bg-[#FCFAEE] text-black
                font-bold font-sans
                px-6 py-4 rounded-xl
                flex items-center justify-center
                hover:brightness-95 transition
                "
              >
                Apply Now
                <IoIosArrowRoundForward className="w-7 h-7 ml-1" />
              </div>
            </Link>

            {/* Secondary CTA */}
            <a href="#why-fleetx">
              <div
                className="
                border border-[#FCFAEE]
                text-[#FCFAEE]
                font-semibold
                px-6 py-4 rounded-xl
                hover:bg-[#FCFAEE]/10 transition
                "
              >
                Learn More
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner2;
