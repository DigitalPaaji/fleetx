"use client";

export default function HeroSection() {


  return (
    <section
      className=" relative h-150 lg:h-175 flex items-center px-6 md:px-12 lg:px-12 xl:px-32 2xl:px-48 justify-start bg-cover bg-center"
      style={{ backgroundImage: "url('/0.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-br lg:bg-linear-to-r from-black/10 via-black/60 lg:via-black/20  to-black/10"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl lg:max-w-4xl py-24">
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
           Drive with fleet X logistics amazon Delivery Driver Jobs Portsmouth
        </h1>

        <p className="mt-4  text-md lg:text-lg">
          Free company vans. Clear weekly pay. Consistent work.
   
          Join a professional Amazon Delivery Service Partner in Hampshire.
        </p>


      </div>
    </section>
  );
}
