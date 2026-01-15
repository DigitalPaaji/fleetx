"use client";

export default function HeroSection() {
  const scrollToWhy = () => {
    const el = document.getElementById("why-fleet");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-start py-24 justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/9.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center  px-6 py-24">
        <h1 className=" text-3xl md:text-5xl font-bold leading-tight">
          Drive with Fleet X Logistics – Amazon Delivery Driver Jobs in Havant
        </h1>

        <p className="mt-4 text-gray-200 text-md md:text-xl">
          Free company vans. Clear weekly pay. Consistent work.
          <br />
          Join a professional Amazon Delivery Service Partner in Hampshire.
        </p>

        {/* Buttons */}
        <div className="mt-2 md:mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/apply"
            className="bg-[#551f1f] hover:bg-[#530505] text-white font-semibold px-8 py-3 rounded-lg transition"
          >
            Apply Now
          </a>

          <button
            onClick={scrollToWhy}
            className="border border-black text-black hover:bg-black hover:text-white font-semibold px-8 py-3 rounded-lg transition"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
