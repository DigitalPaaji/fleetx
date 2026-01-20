'use client';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-black border-b border-gray-800  px-4 md:px-12 lg:px-24 xl:px-40 2xl:px-52 py-4 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
        
        {/* LOGO WITH BLACK BACKGROUND */}
        <Link href="/" className="relative group">
          <div className="relative">
            <Image
              src="/logo.webp"
              width={120}
              height={16}
              alt="Logo"
              className="w-full lg:w-32 h-full object-cover"
              priority
            />
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden lg:flex items-center space-x-8 font-semibold">
          <div className="flex items-center space-x-8">
            <Link href="/careers" className="text-gray-300  text-md tracking-wide transition-colors duration-200">
              Careers
            </Link>
            <Link href="/faqs" className="text-gray-300  text-md tracking-wide transition-colors duration-200">
              Driver FAQs
            </Link>
            <Link href="/about" className="text-gray-300  text-md tracking-wide transition-colors duration-200">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-300  text-md tracking-wide transition-colors duration-200">
              Contact
            </Link>
          </div>
          
          {/* SEPARATOR */}
          <div className="h-6 w-px bg-gray-200"></div>
          
          {/* BUTTON */}
          <Link href="/contact">
            <div 
                        className=" flex items-center gap-2 border border-[#f0e5e5] hover:border-[#a7a5a5] text-white font-semibold px-6 py-2 transition"

            >
              Apply Now 
              <IoIosArrowRoundForward className="w-5 h-5" />
            </div>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          className="lg:hidden text-gray-300 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="space-y-1.5">
            <div className={`w-6 h-0.5 bg-current transition-all duration-800 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-current transition-all duration-800 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className={`w-6 h-0.5 bg-current transition-all duration-800 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </div>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div className={`fixed top-20 left-0 right-0 bg-black border-b border-gray-200/10 lg:hidden transition-all duration-800 z-40 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="px-6 py-6 space-y-3">
          <Link 
            href="/careers" 
            className="block text-gray-300 text-lg font-medium py-2 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Careers
          </Link>
          <Link 
            href="/faqs" 
            className="block text-gray-300 text-lg font-medium py-2 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Driver FAQs
          </Link>
          <Link 
            href="/about" 
            className="block text-gray-300 text-lg font-medium py-2 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            href="/contact" 
            className="block text-gray-300 text-lg font-medium py-2 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          
          <div className="pt-4">
            <Link 
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="border-2 border-gray-200 text-gray-300   text-md font-semibold text-sm py-3 px-6 flex items-center justify-center gap-2 ">
                Apply Now 
                <IoIosArrowRoundForward className="w-5 h-5" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
