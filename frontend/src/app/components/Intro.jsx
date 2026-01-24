"use client";
import {
  Users,
  TrendingUp,
  Star,
  BarChart3,
  Shield,
  PieChart,
  Clock,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";

const MonetaLandingPage = () => {
  const scrollToWhy = () => {
    const el = document.getElementById("why-fleet");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-12 lg:px-12 xl:px-32 2xl:px-48 ">
      {/* Hero Banner */}

      <section className="border-b border-gray-200/10 relative flex items-center justify-center bg-cover bg-center py-24">

        <div className="relative z-10  w-full py-12 ">    
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
            <div className="text-left">
         
              <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight mb-6">
                logistics done right.
                <br />
                drivers treated better.
              </h2>
                        
          {/* SEPARATOR */}
          <div className="w-24 h-0.5 mb-4 bg-[#ff0000] "></div>
          
              <p className="text-white/90 text-md xl:text-lg mb-8 max-w-2xl">
                Welcome to Fleet X Logistics, an Amazon Delivery Service Partner
                in Havant, Hampshire. We specialise in reliable last-mile
                delivery within a professional, supportive environment.
              </p>
              <div className="flex w-fit flex-col sm:flex-row gap-4">
                  <a
                    href="/contact"
                    className="bg-[#e20d0d] hover:bg-[#d12020] text-white font-semibold px-6 py-2 xl:py-4 transition"
                  >
                    Apply Now
                  </a>
              </div>
            </div>
            <div className=" ">
              <div className="relative overflow-hidden ">
                <Image
                width={440}
                height={440}
                  src="/banner5.webp"
                  alt="Fleet X Logistics Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-fleet" className="container mx-auto py-16 md:py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2  bg-white/10 border border-white/20 mb-6">
            <span className="text-sm font-medium">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Drive for{" "}
            <span className="text-[#ff0000]">Fleet X Logistics</span>?
          </h2>
          <p className=" text-lg max-w-2xl mx-auto">
            We provide the tools and support you need to succeed.
          </p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {[
            {
              icon: "🚐",
              title: "Free Company Vans",
              desc: "Modern automatic electric Mercedes Sprinter vans, fully maintained.",
            },
            {
              icon: "💷",
              title: "Clear Weekly Pay",
              desc: "Competitive daily rates paid weekly. Guidance for VAT-registered drivers.",
            },
            {
              icon: "⏰",
              title: "Flexible Working Days",
              desc: "Work up to 6 days per week. Midday start, evening finish routes.",
            },
            {
              icon: "📍",
              title: "Consistent Routes",
              desc: "Year-round work with Amazon in familiar delivery areas.",
            },
            {
              icon: "🤝",
              title: "Full Support",
              desc: "Help with self-employment setup, VAT, and invoicing.",
            },
            {
              icon: "📱",
              title: "Modern Technology",
              desc: "Easy-to-use apps for route planning and communication.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="group relative bg-black border border-white/10 p-8 hover:border-[#ff0000]/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14  bg-white/5 border border-white/10 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 text-white">
                {feature.title}
              </h4>
              <p className="text-white/70 leading-relaxed">{feature.desc}</p>
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#ff0000] group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Driver Requirements & CTA */}
      <section className="py-16">
        <div className="bg-black border-y border-white/10 py-8 md:py-12">
          <div className="grid xl:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 pb-6 border-b border-white/10">
                Who We Are Looking For
              </h2>
              <p className=" text-md xl:text-lg mb-10">
                To meet safety requirements, applicants must meet these
                criteria:
                <br />
                <br />
                <span className="text-[#ff0000] font-bold">
                  No previous delivery experience required. Full training
                  provided.
                </span>
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Minimum age: 21 years or older",
                  "Full UK/EU driving licence (held 1+ year)",
                  "No more than 6 penalty points",
                  "Legal right to live and work in the UK",
                  "Comfortable working as self-employed",
                ].map((req, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[#ff0000] flex-shrink-0 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-white/90">{req}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 ">
                <a
                  href="/contact"
                  className="bg-[#e20d0d] hover:bg-[#d12020] text-white font-semibold px-6 py-2 xl:py-4 transition"
                >
                  Apply Now
                </a>
              </div>
            </div>
            <div className="">
              <img
                src="/banner4.webp"
                alt="Driver at work"
                className="w-full h-full object-cover"
              />
             
            
            </div>
          </div>
        </div>
      </section>

   
    </div>
  );
};

export default MonetaLandingPage;
