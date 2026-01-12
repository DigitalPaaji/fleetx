import { Check, Car, PoundSterling, Calendar, MapPin, Users, Shield, FileText } from 'lucide-react';
import Image from 'next/image';

const CareerPage = () => {
  const coreValues = [
    {
      icon: <Car className="w-6 h-6" />,
      title: "Free Company Vans",
      description: "Modern automatic electric Mercedes Sprinter vans, fully maintained.",
      highlight: "No lease or rental charges."
    },
    {
      icon: <PoundSterling className="w-6 h-6" />,
      title: "Clear Weekly Pay",
      description: "Competitive daily rates paid weekly.",
      highlight: "VAT-registered drivers can earn more, with guidance provided."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Flexible Working Days",
      description: "Work up to 6 days per week.",
      highlight: "Delivery routes typically start around midday and finish in the evening."
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Consistent Routes",
      description: "Year-round work with Amazon.",
      highlight: "Most drivers remain within the same delivery areas."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Full Support",
      description: "Help with self-employment setup, VAT registration, and invoicing.",
      highlight: "So drivers can focus on delivering."
    }
  ];

  const requirements = [
    "Minimum age: 21 years or older",
    "Full UK or EU driving licence (held at least 1 year)",
    "No more than 6 penalty points",
    "Legal right to live and work in the UK",
    "Comfortable working as self-employed"
  ];

  return (
    <div className="">
      
      {/* 3. INTRODUCTION SECTION */}
      <section className="w-full py-16 md:py-24  px-4 md:px-12 lg:px-24 xl:px-40 2xl:px-48 bg-linear-to-b from-white to-gray-50">
       
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Text */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Logistics Done Right.
                <br />
                <span className="text-[#db2828]">Drivers Treated Better.</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  Welcome to <span className="font-semibold text-gray-900">Fleet X Logistics</span>, 
                  an Amazon Delivery Service Partner based in Havant, Hampshire.
                </p>
                <p>
                  We specialise in reliable last-mile parcel delivery while creating a professional, 
                  supportive working environment for our drivers.
                </p>
                <p className="text-gray-600">
                  We believe fair treatment, clear communication, and proper support lead to better results for everyone. 
                  That's why we provide company-maintained electric vans, structured routes, and transparent onboarding from day one.
                </p>
                <p>
                  Whether you're an experienced delivery driver or looking for a new opportunity, 
                  <span className="font-semibold text-gray-900"> Fleet X Logistics</span> offers stability with flexibility.
                </p>
              </div>
            </div>

      {/* Right Column - Images */}
<div className="relative">
  {/* Main Image */}
  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
    <div className="absolute inset-0">
      {/* Banner Image with overlay */}
      <Image
        src="/banner.webp"
        alt="Fleet X Logistics delivery team with electric vans"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-white/20 to-transparent" />
    </div>
    
    {/* Text Overlay */}
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-2">Modern Electric Fleet</h3>
        <p className="text-white/90">Environmentally friendly delivery solutions</p>
      </div>
    </div>
  </div>
  
  {/* Floating Stats Card */}
  <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl border border-gray-200 w-64 z-10">
    <div className="flex items-center gap-4">
      <div className="bg-green-100 p-3 rounded-lg">
        <Check className="w-6 h-6 text-green-600" />
      </div>
      <div>
        <div className="text-2xl font-bold text-gray-900">40+</div>
        <div className="text-gray-600 text-sm">Happy Drivers</div>
      </div>
    </div>
  </div>

  {/* Small Image Grid */}
  <div className="flex gap-4 mt-8">
    <div className="flex-1 h-32 rounded-xl overflow-hidden shadow-lg group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#db2828]/20 to-transparent" />
      <div className="relative w-full h-full bg-gray-100 flex items-center justify-center">
        <Users className="w-8 h-8 text-[#db2828]" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-3 text-center">
        <p className="text-white text-xs font-medium">Team Support</p>
      </div>
    </div>
    <div className="flex-1 h-32 rounded-xl overflow-hidden shadow-lg group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#db2828]/20 to-transparent" />
      <div className="relative w-full h-full bg-blue-50 flex items-center justify-center">
        <MapPin className="w-8 h-8 text-[#db2828]" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-3 text-center">
        <p className="text-white text-xs font-medium">Local Routes</p>
      </div>
    </div>
    <div className="flex-1 h-32 rounded-xl overflow-hidden shadow-lg group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-[#db2828]/20 to-transparent" />
      <div className="relative w-full h-full bg-gray-100 flex items-center justify-center">
        <Shield className="w-8 h-8 text-[#db2828]" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-3 text-center">
        <p className="text-white text-xs font-medium">Safety First</p>
      </div>
    </div>
  </div>
</div>
          </div>
      
      </section>

      {/* 4. WHY JOIN US (CORE VALUE SECTION) */}
      <section className="w-full py-16 md:py-24  px-4 md:px-12 lg:px-24 xl:px-40 2xl:px-48 bg-white">
       
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Drive for Fleet X Logistics?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide the tools you need to succeed — without hidden costs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 text-[#db2828] mb-6 group-hover:bg-blue-100 transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700 mb-3">
                  {value.description}
                </p>
                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg">
                  <Check className="w-4 h-4" />
                  <span className="font-medium">{value.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        
      </section>

      {/* 5. DRIVER REQUIREMENTS (FILTER SECTION) */}
      <section className="w-full py-16 md:py-24  px-4 md:px-12 lg:px-24 xl:px-40 2xl:px-48 bg-gray-50">
     
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who We Are Looking For
              </h2>
              
              <p className="text-lg text-gray-700 mb-8">
                To meet safety and insurance requirements, applicants must meet the following criteria:
              </p>

              <div className="space-y-4 mb-8">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-[#db2828]" />
                    </div>
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-start gap-4">
                  <FileText className="w-6 h-6 text-[#db2828] mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">No Experience Needed</h4>
                    <p className="text-gray-700">
                      No previous delivery experience required. Full training is provided.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-white">
                  {/* Replace with actual image */}
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <div className="text-center p-8">
                      <Users className="w-24 h-24 text-[#db2828] mx-auto mb-6" />
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Join Our Team</h3>
                      <p className="text-gray-600">Professional drivers delivering excellence</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute top-6 right-6 bg-white rounded-full px-6 py-3 shadow-lg">
                  <span className="font-bold text-gray-900">Now Hiring</span>
                </div>
              </div>
            </div>
          </div>
      
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="w-full py-16 md:py-24  px-4 md:px-12 lg:px-24 xl:px-40 2xl:px-48 bg-gradient-to-r from-[#db2828] to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 md:p-16 border border-white/20">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Delivering?
            </h3>
            
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              We are currently recruiting for our Havant depot. Positions are filled on a rolling basis.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="px-12 py-4 bg-white text-[#db2828] font-bold text-lg rounded-xl hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl">
                Start Your Application
              </button>
              
              <div className="flex items-center gap-4 text-white">
                <div className="h-px w-8 bg-white/50"></div>
                <span className="text-blue-100">Or call us at</span>
                <a href="tel:+441234567890" className="font-bold hover:text-blue-100">
                  01234 567 890
                </a>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="flex flex-wrap justify-center gap-8 text-blue-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">£400+</div>
                  <div className="text-sm">Average Weekly Earnings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-sm">Driver Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-sm">Equipment Provided</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;

// import Image from "next/image";

// export default function IntroSection() {
//   return (
//     <section id="why-fleetx" className="bg-[#FCFAEE] py-16 md:py-24  px-4 md:px-12 lg:px-24 xl:px-40 2xl:px-48">
//       <div className="grid lg:grid-cols-2 gap-12 items-center">

//         {/* LEFT – TEXT */}
//         <div>
//           <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6">
//             Logistics Done Right. Drivers Treated Better.
//           </h2>

//           <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-5">
//             Welcome to <span className="font-semibold">Fleet X Logistics</span>, an Amazon Delivery Service Partner based in Havant, Hampshire.
//             We specialise in reliable last-mile parcel delivery while creating a professional, supportive working environment for our drivers.
//           </p>

//           <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-5">
//             We believe fair treatment, clear communication, and proper support lead to better results for everyone.
//             That’s why we provide company-maintained electric vans, structured routes, and transparent onboarding from day one.
//           </p>

//           <p className="text-gray-700 text-base md:text-lg leading-relaxed">
//             Whether you’re an experienced delivery driver or looking for a new opportunity,  
//             <span className="font-semibold"> Fleet X Logistics</span> offers stability with flexibility.
//           </p>
//         </div>

//         {/* RIGHT – IMAGES */}
//         <div className="grid grid-cols-2 gap-4">
          
//           {/* Image 1 */}
//           <div className="relative group overflow-hidden rounded-2xl shadow-lg">
//             <Image
//               src="/banner.webp"
//               alt="Fleet X driver delivering parcel"
//               width={500}
//               height={500}
//               className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
//             />
//             <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>
//           </div>

//           {/* Image 2 */}
//           <div className="relative group overflow-hidden rounded-2xl shadow-lg">
//             <Image
//               src="/6.webp"
//               alt="Fleet X delivery van"
//               width={500}
//               height={500}
//               className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
//             />
//             <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>
//           </div>

//           {/* Image 3 – full width */}
//           <div className="relative group overflow-hidden rounded-2xl shadow-lg col-span-2">
//             <Image
//               src="/7.webp"
//               alt="Fleet X Logistics delivery team"
//               width={1000}
//               height={500}
//               className="object-cover w-full h-56 md:h-64 group-hover:scale-105 transition duration-500"
//             />
//             <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }
