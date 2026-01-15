import { TrendingUp, Users, Star, BarChart3, CreditCard, Send, Download, Zap, Shield, PieChart, Clock, CheckCircle } from 'lucide-react';

const MonetaLandingPage = () => {
  const stats = [
    { icon: <Users className="w-5 h-5" />, value: "2500+", label: "Partners & Customers", color: "text-purple-600" },
    { icon: <TrendingUp className="w-5 h-5" />, value: "$2.5M", label: "Invested in 2024", color: "text-emerald-600" },
    { icon: <Star className="w-5 h-5" />, value: "5.0", label: "Customer Rating", color: "text-amber-600" },
    { icon: <BarChart3 className="w-5 h-5" />, value: "205+", label: "Products", color: "text-blue-600" }
  ];

  const features = [
    { icon: <Shield className="w-6 h-6" />, title: "Bank-Level Security", desc: "Enterprise-grade encryption for all transactions" },
    { icon: <PieChart className="w-6 h-6" />, title: "Real-Time Analytics", desc: "Live financial insights and forecasting" },
    { icon: <Clock className="w-6 h-6" />, title: "24/7 Support", desc: "Round-the-clock customer assistance" },
    { icon: <CheckCircle className="w-6 h-6" />, title: "Automated Workflows", desc: "Streamline repetitive financial tasks" }
  ];

  const steps = [
    { number: "1", title: "Sign Up & Customize", desc: "Create account in minutes, tailored to your business needs" },
    { number: "2", title: "Integrate Your Data", desc: "Seamlessly connect with existing financial tools" },
    { number: "3", title: "Manage Efficiently", desc: "Use intuitive dashboard for daily operations" }
  ];

  return (
    <div className="min-h-screen">
      
      {/* Hero Section */}
<section className="container mx-auto px-6 py-16 md:py-24">
  <div className="grid lg:grid-cols-2 gap-16 items-center">
    {/* Dashboard Preview - Enhanced */}
    <div className="">
        <img 
          src="/9.png" 
          alt="Fleet X Logistics Dashboard Interface" 
          className="w-full h-auto object-cover"
        />

     
    </div>
    
    {/* Content */}
    <div>
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 mb-8">
        <div className="w-2 h-2 rounded-full bg-[#530505] animate-pulse"></div>
        <span className="text-sm font-medium text-gray-700">Amazon Delivery Service Partner</span>
      </div>
      
      <h1 className="text-gray-900 text-4xl md:text-4xl font-bold leading-tight mb-8">
        Logistics Done Right.
        <br />
        <span className="relative inline-block">
          <span className="relative z-10 text-[#530505] ">Drivers Treated Better.</span>
          <span className="absolute bottom-2 left-0 w-full h-3 bg-gray-100/80 -z-0"></span>
        </span>
      </h1>
      
      <div className="space-y-6 mb-10">
        <div className="flex items-start gap-4">
          <div className="w-6 h-6 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center flex-shrink-0 mt-1">
            <div className="w-2 h-2 rounded-full bg-[#530505]/20"></div>
          </div>
          <p className="text-lg text-gray-600">
            Welcome to Fleet X Logistics, an Amazon Delivery Service Partner based in Havant, Hampshire. We specialise in reliable last-mile parcel delivery while creating a professional, supportive working environment.
          </p>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="w-6 h-6 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center flex-shrink-0 mt-1">
            <div className="w-2 h-2 rounded-full bg-[#530505]/20"></div>
          </div>
          <p className="text-lg text-gray-600">
            We believe fair treatment, clear communication, and proper support lead to better results for everyone. That's why we provide company-maintained electric vans, structured routes, and transparent onboarding.
          </p>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="w-6 h-6 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center flex-shrink-0 mt-1">
            <div className="w-2 h-2 rounded-full bg-[#530505]/20"></div>
          </div>
          <p className="text-lg text-gray-600">
            Whether you're an experienced delivery driver or looking for a new opportunity, Fleet X Logistics offers stability with flexibility.
          </p>
        </div>
      </div>
      
    </div>
  </div>
</section>
      {/* Stats Section */}
      {/* <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-violet-300 transition-colors">
              <div className={`${stat.color} mb-4`}>{stat.icon}</div>
              <p className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</p>
              <p className="text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section> */}

{/* Features Section */}
<section className="container mx-auto px-6 py-16 md:py-24">
  <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 mb-6">
      <span className="text-sm font-medium text-gray-700">Why Choose Us</span>
    </div>
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
      Why Drive for <span className="text-[#530505]">Fleet X Logistics</span>?
    </h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      We provide the tools and support you need to succeed — without hidden costs or complications.
    </p>
  </div>
  
<div className="mb-20">
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      {
        icon: "🚐",
        title: "Free Company Vans",
        desc: "Modern automatic electric Mercedes Sprinter vans, fully maintained. No lease or rental charges.",
        accent: "bg-blue-50 border-blue-100"
      },
      {
        icon: "💷",
        title: "Clear Weekly Pay",
        desc: "Competitive daily rates paid weekly. VAT-registered drivers can earn more, with guidance provided.",
        accent: "bg-green-50 border-green-100"
      },
      {
        icon: "⏰",
        title: "Flexible Working Days",
        desc: "Work up to 6 days per week. Delivery routes typically start around midday and finish in the evening.",
        accent: "bg-amber-50 border-amber-100"
      },
      {
        icon: "📍",
        title: "Consistent Routes",
        desc: "Year-round work with Amazon. Most drivers remain within the same delivery areas.",
        accent: "bg-purple-50 border-purple-100"
      },
      {
        icon: "🤝",
        title: "Full Support",
        desc: "Help with self-employment setup, VAT registration, and invoicing so drivers can focus on delivering.",
        accent: "bg-cyan-50 border-cyan-100"
      },
      {
        icon: "📱",
        title: "Modern Technology",
        desc: "Easy-to-use apps and tools for route planning, tracking, and communication.",
        accent: "bg-violet-50 border-violet-100"
      }
    ].map((feature, idx) => (
      <div 
        key={idx} 
        className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        {/* Corner accent */}
        <div className={`absolute top-0 right-0 w-16 h-16 rounded-bl-full ${feature.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
        
        {/* Icon container */}
        <div className="relative mb-6">
          <div className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
            {feature.icon}
          </div>
        </div>
        
        {/* Content */}
        <h4 className="text-xl font-bold text-gray-900 mb-4 relative">
          {feature.title}
          <span className="absolute -left-3 top-1/2 w-1 h-6 bg-gray-300 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </h4>
        
        <p className="text-gray-600 leading-relaxed mb-6">
          {feature.desc}
        </p>
        
        {/* Bottom indicator line */}
        <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        
        {/* Hover indicator */}
        <div className={`absolute bottom-0 left-1/2 w-0 h-0.5 ${feature.accent.split(' ')[0]} group-hover:w-full group-hover:left-0 transition-all duration-300`}></div>
      </div>
    ))}
  </div>
</div>



{/* Driver Requirements & CTA - Minimal Version */}
<div className="mb-20">
  {/* Driver Requirements */}
<div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 mb-12">
  <div className="grid lg:grid-cols-2 gap-12">
    {/* Left Side - Requirements */}
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-6 border-b border-gray-200">
        Who We Are Looking For
      </h2>
      
      <p className="text-gray-600 mb-10">
        To meet safety and insurance requirements, applicants must meet the following criteria:
        <br /><br />
        <span className='text-red-700 font-medium'>No previous delivery experience required. Full training is provided.</span>
      </p>
      
      <div className="grid sm:grid-cols-2 gap-6">
        {[
          "Minimum age: 21 years or older",
          "Full UK or EU driving licence (held at least 1 year)",
          "No more than 6 penalty points",
          "Legal right to live and work in the UK",
          "Comfortable working as self-employed"
        ].map((req, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-1">
              <svg className="w-5 h-5 text-[#530505]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-gray-700">{req}</p>
          </div>
        ))}
      </div>
    </div>
    
    {/* Right Side - CTA with Image Placeholder */}
    <div className="relative overflow-hidden rounded-xl border border-gray-100">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-800/90"></div>
      
{/* Background Image Wrapper */}
<div className="absolute inset-0 overflow-hidden">
  <img
    src="/banner4.webp"
    alt="Fleet X Logistics delivery driver at work"
    className="w-full h-full object-cover"
  
  />

  {/* Dark overlay for better text visibility */}
  <div className="absolute inset-0 bg-black/40" />
</div>

      
      <div className="relative z-10 p-8 h-full flex flex-col justify-end min-h-[400px]">
        <div className=" rounded-lg p-2">
        
          
        
          

        </div>
      </div>
    </div>
  </div>
</div>



</div>
  

</section>

  

    {/* Footer Component - Minimal */}
{/* <footer className="bg-gray-50 border-t border-gray-200">
  <div className="container mx-auto px-6 py-12">
    <div className="grid lg:grid-cols-3 gap-8 mb-12">
      <div>
        <h4 className="text-lg font-bold text-gray-900 mb-6">Contact Details</h4>
        <div className="space-y-3">
          <p className="text-gray-600">
            <span className="font-medium">Email:</span> contact@fleetxlogistics.co.uk
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Phone:</span> 07763 618300
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Location:</span> Havant, Hampshire
          </p>
        </div>
      </div>

      <div>
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h4 className="text-lg font-bold text-gray-900 mb-4">
            Start Your Career With Us
          </h4>
          <p className="text-gray-600 text-sm mb-6">
            Currently recruiting for Havant depot. Immediate start available.
          </p>
          <button className="w-full py-3 bg-[#530505] text-white rounded-lg hover:bg-[#3a0303] transition-colors">
            Apply Now
          </button>
        </div>
      </div>

      <div>
        <h4 className="text-lg font-bold text-gray-900 mb-6">Legal</h4>
        <div className="space-y-4">
          <p className="text-gray-600 text-sm">
            © 2026 Fleet X Logistics Ltd. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">
            Fleet X Logistics is a trading name of Fleet X Logistics Ltd, registered in England & Wales.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="/privacy-policy" className="text-gray-600 hover:text-[#530505] transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="/cookie-policy" className="text-gray-600 hover:text-[#530505] transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="pt-8 border-t border-gray-300 text-center">
      <p className="text-gray-500 text-sm">
        Professional Amazon Delivery Service Partner • Reliable Last-Mile Logistics
      </p>
    </div>
  </div>
</footer> */}

    </div>
  );
};

export default MonetaLandingPage;