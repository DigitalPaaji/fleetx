"use client";
import { useState } from "react";
import { CheckCircle, Truck, Clock, Shield, Zap, AlertCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ApplicationLandingPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    licence: "",
    age: "",
    postcode: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  // Validation
  if (!formData.mobile) {
    alert("Please enter your mobile number");
    return;
  }

  if (!formData.licence || !formData.age) {
    alert("Please confirm your licence and age requirements");
    return;
  }

  try {
    // Send form data to your Node API
    const response = await fetch("https://sendmail.digitalpaaji.com/sendmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formdata: formData,  
        sendto: ["contact@fleetxlogistics.co.uk"], 
        subject: "New Delivery Driver Application from Fleex X Logistics",
      }),
    });

    const result = await response.json();

    if (result.success) {
      setIsSubmitted(true);

      // Redirect to thank you page after 1.5 seconds
      setTimeout(() => {
        window.location.href = "/application-thank-you";
      }, 1500);
    } else {
      alert("Failed to send email. Please try again.");
    }
  } catch (err) {
    console.error("Error sending email:", err);
    alert("Something went wrong. Please try again later.");
  }
};


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-black text-white  px-4 md:px-12 lg:px-24 xl:px-40 2xl:px-52 py-4 ">


      <main>
        {/* Hero Section - Above the fold on mobile */}
        <section className="px-4 py-6">
          <div className="max-w-4xl mx-auto">

            
            {/* H1 Headline */}
            <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-3">
              Immediate Starts: Delivery Drivers Needed in Havant
            </h1>
            
            {/* Sub-headline */}
            <p className="text-white/90 mb-6">
              Earn weekly pay. Drive a brand new electric Mercedes Sprinter – provided FREE.
              <br />
              <span className="text-[#ff0000] font-semibold">No previous delivery experience required.</span>
            </p>

            {/* 3 Big Reasons - Icons directly above form */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="text-center">
                <div className="text-2xl mb-1">✅</div>
                <div className="font-bold ">FREE VAN</div>
                <div className="text-xs text-white/70">No rental fees or hidden charges</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">✅</div>
                <div className="font-bold ">WEEKLY PAY</div>
                <div className="text-xs text-white/70">Paid directly to your bank</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">✅</div>
                <div className="font-bold ">FLEXIBLE ROTA</div>
                <div className="text-xs text-white/70">Choose 4-6 days per week</div>
              </div>
            </div>

            {/* APPLICATION FORM - VISIBLE FIRST ON MOBILE */}
            <div className="mb-8">
              <div className="text-center mb-4">
                <h2 className="text-xl font-bold mb-2">Fast-Track Registration</h2>
                <p className="text-white/80 ">
                  Enter your details below. Our recruitment team will call or WhatsApp you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 px-3 py-2.5 focus:outline-none transition placeholder-white/50 "
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 px-3 py-2.5 focus:outline-none transition placeholder-white/50 "
                  />
                </div>

                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Phone Number *"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 px-3 py-2.5 focus:outline-none transition placeholder-white/50 "
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 px-3 py-2.5 focus:outline-none transition placeholder-white/50 "
                />

                <select
                  name="licence"
                  required
                  value={formData.licence}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 px-3 py-2.5 focus:outline-none transition appearance-none "
                >
                  <option value="">UK/EU Licence (1+ year)?</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>

                <select
                  name="age"
                  required
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 px-3 py-2.5 focus:outline-none transition appearance-none "
                >
                  <option value="">21 years or older?</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>

                <input
                  type="text"
                  name="postcode"
                  placeholder="Postcode"
                  value={formData.postcode}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 px-3 py-2.5 focus:outline-none transition placeholder-white/50 "
                />

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full bg-[#ff0000] hover:bg-[#d12020] text-white font-bold py-3.5 px-6 text-lg transition active:scale-[0.98]"
                >
                  {isSubmitted ? "Processing..." : "Get Started Now"}
                </button>
              </form>

              <div className="mt-4 pt-3 border-t border-white/10">
                <p className="text-center text-white/60 text-xs">
                  By applying, you agree to our Privacy Policy. We respect your data.
                </p>
              </div>
            </div>

            {/* WhatsApp Quick Apply */}
            <div className="mb-8">
              <a
                href="https://wa.me/447763618300"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 transition"
              >
                <Phone className="w-4 h-4" />
                <span>Quick Apply via WhatsApp: 07763 618300</span>
              </a>
            </div>

            {/* BELOW THE FOLD CONTENT - Only appears after scrolling */}
            <div className="space-y-6">
              {/* Why Drive With Us */}
              <div>
                <h3 className="text-lg font-bold mb-3">Why Drive With Fleet X Logistics?</h3>
                <p className="text-white/80 mb-4 ">
                  Fleet X Logistics is an official Amazon Delivery Service Partner based in Havant, Hampshire. We focus on fair treatment, clear pay, and long-term driver support.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#ff0000] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 ">No Experience Needed: Full training provided</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#ff0000] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 ">Modern Technology: Automatic electric vans with advanced safety cameras</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#ff0000] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70 ">Real Support: Help with VAT registration and simple invoicing tools</span>
                  </div>
                </div>
              </div>

              {/* Requirements Reminder */}
              <div className="bg-white/5 border border-white/10 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="w-5 h-5 text-[#ff0000]" />
                  <h4 className="font-bold">Requirements Reminder</h4>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#ff0000] rounded-full mt-1.5 flex-shrink-0"></div>
                    <span className="text-white/70 ">Minimum age: 21+</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#ff0000] rounded-full mt-1.5 flex-shrink-0"></div>
                    <span className="text-white/70 ">Maximum 6 penalty points</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#ff0000] rounded-full mt-1.5 flex-shrink-0"></div>
                    <span className="text-white/70 ">Pass background checks</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#ff0000] rounded-full mt-1.5 flex-shrink-0"></div>
                    <span className="text-white/70 ">Pass drug & alcohol tests</span>
                  </div>
                  <div className="col-span-2 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#ff0000] rounded-full mt-1.5 flex-shrink-0"></div>
                    <span className="text-white/70 ">Legal right to work in the UK</span>
                  </div>
                </div>
              </div>

              {/* Quick Call Option */}
              <div className="items-center justify-center flex gap-6 ">
                <div className="inline-flex items-center gap-2 text-white/70 mb-2">
                  <Phone className="w-4 h-4" />
                  <span>Prefer to speak to someone?</span>
                </div>
                <a 
                  href="tel:07763618300" 
                  className="inline-block bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold py-2 px-6 transition"
                >
                  Call: 07763 618300
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-white/10 py-4 px-4 mt-8">
        <div className="max-w-4xl mx-auto text-center">
          <Link className="mb-2" href={'/'}>
            <img 
              src="/logo.webp" 
              alt="Fleet X Logistics" 
              className="h-full w-32 mx-auto opacity-80"
              loading="lazy"
            />
          </Link>
          <div className="text-white/60 text-xs space-y-1">
            <div>Fleet X Logistics – Official Amazon Delivery Service Partner</div>
            <div>© {new Date().getFullYear()} Fleet X Logistics Ltd.</div>
            <div>
              <a 
                href="/privacy-policy" 
                className="hover:text-white transition"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ApplicationLandingPage;