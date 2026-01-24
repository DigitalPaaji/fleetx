"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white px-6 md:px-12 lg:px-12 xl:px-32 2xl:px-48">
        
        {/* Hero Section */}
        <section className="border-b border-gray-200/10 py-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <div className="w-24 h-0.5 mb-6 bg-[#ff0000]"></div>
            <p className="text-white/80 text-lg">
              Fleet X Logistics Ltd ("we", "us", "our") respects your privacy and is committed to protecting your personal data.
              This policy explains how we collect and use your information when you visit our website or apply for work with us.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            
            <div className="space-y-12">
              
              {/* Information We Collect */}
              <div>
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-white/10">Information We Collect</h2>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-white/5 rounded-lg">
                      <h3 className="font-semibold mb-2">Personal Information</h3>
                      <ul className="text-white/70 space-y-1">
                        <li>• Name</li>
                        <li>• Phone number</li>
                        <li>• Email address</li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-white/5 rounded-lg">
                      <h3 className="font-semibold mb-2">Other Data</h3>
                      <ul className="text-white/70 space-y-1">
                        <li>• Application details</li>
                        <li>• IP address</li>
                        <li>• Basic device data</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-white/10">How We Use Your Information</h2>
                <div className="bg-white/5 p-6 rounded-lg">
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-start">
                      <span className="text-[#ff0000] mr-3">•</span>
                      Driver recruitment and applications
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff0000] mr-3">•</span>
                      Contacting you by phone, email, or WhatsApp
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff0000] mr-3">•</span>
                      Onboarding and compliance checks
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff0000] mr-3">•</span>
                      Legal and operational purposes
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-black/30 border border-white/10 rounded">
                    <p className="text-white/80">We do not sell your personal data.</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Applications */}
              <div>
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-white/10">WhatsApp Applications</h2>
                <div className="bg-white/5 p-6 rounded-lg">
                  <p className="text-white/80">
                    If you apply via WhatsApp, your information is processed through WhatsApp's platform in line with their privacy policy. We only use this data for recruitment purposes.
                  </p>
                </div>
              </div>

              {/* Sharing Your Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-white/10">Sharing Your Information</h2>
                <div className="bg-white/5 p-6 rounded-lg">
                  <p className="text-white/80 mb-4">Your data may be shared only when necessary with:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-black/30 rounded">
                      <p className="text-white/80">• Amazon systems (for onboarding and compliance)</p>
                    </div>
                    <div className="p-4 bg-black/30 rounded">
                      <p className="text-white/80">• Recruitment, compliance, or onboarding service providers</p>
                    </div>
                    <div className="p-4 bg-black/30 rounded md:col-span-2">
                      <p className="text-white/80">• Professional advisers if legally required</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Storage & Security */}
              <div>
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-white/10">Data Storage & Security</h2>
                <div className="bg-white/5 p-6 rounded-lg">
                  <p className="text-white/80">
                    We store your data securely and take reasonable steps to protect it from unauthorised access or misuse.
                  </p>
                </div>
              </div>

              {/* Data Retention */}
              <div>
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-white/10">Data Retention</h2>
                <div className="bg-white/5 p-6 rounded-lg">
                  <p className="text-white/80">
                    We keep your data only for as long as needed for recruitment, compliance, or legal reasons.
                  </p>
                </div>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-white/10">Your Rights</h2>
                <div className="bg-white/5 p-6 rounded-lg">
                  <p className="text-white/80 mb-4">You have the right to:</p>
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="p-4 bg-black/30 rounded text-center">
                      <p className="text-white font-medium">Access your data</p>
                    </div>
                    <div className="p-4 bg-black/30 rounded text-center">
                      <p className="text-white font-medium">Correct inaccurate information</p>
                    </div>
                    <div className="p-4 bg-black/30 rounded text-center">
                      <p className="text-white font-medium">Request deletion of your data</p>
                    </div>
                  </div>
                  <div className="p-4 bg-black/30 border border-white/10 rounded">
                    <p className="text-white/80">To make a request, contact:</p>
                    <a 
                      href="mailto:contact@fleetxlogistics.co.uk" 
                      className="text-[#ff0000] hover:underline font-medium text-lg"
                    >
                      contact@fleetxlogistics.co.uk
                    </a>
                  </div>
                </div>
              </div>

              {/* Updates */}
              <div>
                <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-white/10">Updates</h2>
                <div className="bg-white/5 p-6 rounded-lg">
                  <p className="text-white/80">
                    This policy may be updated occasionally. The latest version will always be available on our website.
                  </p>
                </div>
              </div>

            </div>

            {/* Contact Card */}
            <div className="mt-16 p-8 bg-white/5 border border-white/10 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-white/80 mb-6">
                For any questions regarding this Privacy Policy or to exercise your data rights:
              </p>
              <div className="flex items-center justify-between">
                <a 
                  href="mailto:contact@fleetxlogistics.co.uk" 
                  className="text-white hover:text-[#ff0000] transition font-medium"
                >
                  contact@fleetxlogistics.co.uk
                </a>
                <a 
                  href="/"
                  className="px-6 py-3 bg-[#ff0000] hover:bg-[#d12020] text-white font-medium transition"
                >
                  Back to Home
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
              <a href="/cookie-policy" className="text-white/70 hover:text-white transition">Cookie Policy</a>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;