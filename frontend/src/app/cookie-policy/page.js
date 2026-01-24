"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CookiePolicyPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white px-6 md:px-12 lg:px-12 xl:px-32 2xl:px-48">
        
        {/* Hero Section */}
        <section className="border-b border-gray-200/10 py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
            <div className="w-24 h-0.5 mb-6 bg-[#ff0000]"></div>
            <p className="text-white/80 text-lg">
              This Cookie Policy explains how Fleet X Logistics Ltd uses cookies and similar technologies on our website.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            
            <div className="space-y-12">
              
              {/* Our Use of Cookies */}
              <div>
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-white/10">Our Use of Cookies</h2>
                <div className="bg-white/5 p-8 rounded-lg">
                  <p className="text-white/80 text-lg">
                    We use cookies to ensure our website works properly and to understand how visitors use it.
                  </p>
                </div>
              </div>

              {/* Types of Cookies */}
              <div>
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-white/10">Types of Cookies</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/5 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                      <h3 className="text-xl font-semibold">Essential Cookies</h3>
                    </div>
                    <p className="text-white/70">
                      Required for site functionality. These cookies cannot be disabled as they are necessary for the website to operate properly.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                      <h3 className="text-xl font-semibold">Analytics Cookies</h3>
                    </div>
                    <p className="text-white/70">
                      Used only with your consent. These cookies help us understand how visitors interact with our website.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cookie Consent */}
              <div>
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-white/10">Cookie Consent</h2>
                <div className="bg-white/5 p-8 rounded-lg">
                  <p className="text-white/80 text-lg mb-6">
                    You can accept or reject non-essential cookies using the cookie banner shown when you first visit the site.
                  </p>
                  <div className="p-4 bg-black/30 border border-white/10 rounded">
                    <p className="text-white/80">
                      Essential cookies are always enabled as they are required for basic website functionality.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Important Notice */}
            <div className="mt-16">
              <div className="p-8 bg-white/5 border-l-4 border-[#ff0000] rounded-r-lg">
                <h3 className="text-2xl font-bold mb-4">Important Notice for Applicants</h3>
                <p className="text-white/80 mb-6">
                  By submitting an application through our website or WhatsApp, you agree to our Privacy Policy and consent to the processing of your personal data as described.
                </p>
                <div className="p-4 bg-black/30 border border-white/10 rounded">
                  <p className="text-white font-medium">
                    Required text for application forms: <span className="text-[#ff0000]">"By applying, you agree to our Privacy Policy."</span>
                  </p>
                  <a 
                    href="/privacy-policy" 
                    className="inline-block mt-3 text-[#ff0000] hover:underline"
                  >
                    View Privacy Policy →
                  </a>
                </div>
              </div>
            </div>

            {/* Cookie Management */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8 text-center">Manage Your Cookie Preferences</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center p-8 bg-white/5 rounded-lg">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Accept All Cookies</h3>
                  <p className="text-white/70 mb-6">
                    Accept both essential and analytics cookies for full website functionality and analytics.
                  </p>
                  <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-medium transition rounded">
                    Accept All
                  </button>
                </div>
                
                <div className="text-center p-8 bg-white/5 rounded-lg">
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">✗</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Essential Cookies Only</h3>
                  <p className="text-white/70 mb-6">
                    Reject non-essential cookies. Website will function but analytics will be disabled.
                  </p>
                  <button className="px-8 py-3 bg-black border border-white/20 hover:bg-white/10 text-white font-medium transition rounded">
                    Essential Only
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-16 p-8 bg-white/5 border border-white/10 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Questions About Cookies?</h3>
              <p className="text-white/80 mb-6">
                If you have any questions about our Cookie Policy or how we use cookies, please contact us.
              </p>
              <div className="flex items-center justify-between">
                <a 
                  href="mailto:contact@fleetxlogistics.co.uk" 
                  className="text-white hover:text-[#ff0000] transition font-medium"
                >
                  contact@fleetxlogistics.co.uk
                </a>
                <a 
                  href="/privacy-policy"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium transition rounded"
                >
                  View Privacy Policy
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Footer Links */}
        <section className="py-8 border-t border-white/10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-6">
              <a href="/" className="text-white/70 hover:text-white transition">Home</a>
              <a href="/careers" className="text-white/70 hover:text-white transition">Careers</a>
              <a href="/privacy-policy" className="text-white/70 hover:text-white transition">Privacy Policy</a>
              <a href="/faq" className="text-white/70 hover:text-white transition">FAQ</a>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default CookiePolicyPage;