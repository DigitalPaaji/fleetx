"use client";

export default function HeroSection() {


  return (
    <section
      className=" relative h-[600px] lg:h-[700px] flex items-center px-4 md:px-12 lg:px-24 xl:px-40 2xl:px-48 justify-start bg-cover bg-center"
      style={{ backgroundImage: "url('/0.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-br lg:bg-linear-to-r from-black/0 via-black/20  to-black/10"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl lg:max-w-4xl px-6 py-24">
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
          drive with fleet X logistics – amazon delivery driver jobs in havant
        </h1>

        <p className="mt-4  text-md lg:text-lg">
          Free company vans. Clear weekly pay. Consistent work.
   
          Join a professional Amazon Delivery Service Partner in Hampshire.
        </p>

        {/* Buttons */}
          <div className="flex w-fit flex-col sm:flex-row gap-4 mt-3 xl:mt-6">
                  <a
                    href="/apply"
                    className="bg-[#e20d0d] hover:bg-[#d12020] text-white font-semibold px-6 py-2 xl:py-4 transition"
                  >
                    Apply Now
                  </a>
              </div>
      </div>
    </section>
  );
}
