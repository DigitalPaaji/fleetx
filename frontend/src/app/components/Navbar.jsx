'use client';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-white  px-4 md:px-12 lg:px-24 xl:px-40 2xl:px-48 py-4 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
        
        {/* LOGO WITH BLACK BACKGROUND */}
        <Link href="/" className="relative group">
          <div className="relative">
            <Image
              src="/logo.png"
              width={160}
              height={50}
              alt="Logo"
              className="h-12 md:h-14 w-auto object-cover"
              priority
            />
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center space-x-8 font-semibold">
          <div className="flex items-center space-x-8">
            <Link href="/services" className="text-gray-800 hover:text-white  text-sm tracking-wide transition-colors duration-200">
              Services
            </Link>
            <Link href="/fleet" className="text-gray-800 hover:text-white  text-sm tracking-wide transition-colors duration-200">
              Our Fleet
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-white  text-sm tracking-wide transition-colors duration-200">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-white  text-sm tracking-wide transition-colors duration-200">
              Contact
            </Link>
          </div>
          
          {/* SEPARATOR */}
          <div className="h-6 w-px bg-gray-700"></div>
          
          {/* BUTTON */}
          <Link href="/contact">
            <div className="bg-white hover:bg-gray-600 hover:text-white shadow-gray-600 rounded-lg shadow-lg  text-black font-semibold text-sm py-3 px-6 flex items-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ">
              Apply Now 
              <IoIosArrowRoundForward className="w-5 h-5" />
            </div>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button 
          className="md:hidden text-gray-800 hover:text-white transition-colors"
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
      <div className={`fixed top-20 left-0 right-0 bg-black border-b border-gray-800 md:hidden transition-all duration-800 z-40 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="px-6 py-6 space-y-6">
          <Link 
            href="/services" 
            className="block text-gray-800 hover:text-white text-lg font-medium py-2 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            href="/fleet" 
            className="block text-gray-800 hover:text-white text-lg font-medium py-2 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Fleet
          </Link>
          <Link 
            href="/about" 
            className="block text-gray-800 hover:text-white text-lg font-medium py-2 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            href="/contact" 
            className="block text-gray-800 hover:text-white text-lg font-medium py-2 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          
          <div className="pt-4">
            <Link 
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="bg-white hover:bg-gray-600 rounded-lg text-black font-semibold text-sm py-3 px-6 flex items-center justify-center gap-2 transition-all duration-200">
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


// 'use client';
// import Image from 'next/image';
// import Link from 'next/link';
// import { IoIosArrowRoundForward } from 'react-icons/io';

// const Navbar = () => {

//   return (
//     <>
//     <nav className='flex items-center justify-between px-4 md:px-12 lg:px-24 xl:px-40 bg-black py-4  text-white'>
//          <Link href="/" className="">
//             <Image
//               src="/logo.webp"
//               width={180}
//               height={60}
//               alt="Logo"
//               className="w-auto h-20 object-cover "
//               priority
//             />
//           </Link>

// <button
//   class="cursor-pointer 
//   bg-gradient-to-b from-[#7a1f1fc4] to-[#1f3a7ab9]
//   shadow-[0px_4px_24px_0_rgba(31,59,122,.45)]
//   px-6 py-3 rounded-xl 
//   border border-[#2a2a2a] 
//   text-[#f1f1f1] font-medium group"
// >
//   <div class="relative overflow-hidden font-bold font-sans">
//     <p
//       class="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
//     >
//       Apply Now
//     </p>
//     <p
//       class="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
//     >
//       Apply Now
//     </p>
//   </div>
// </button>



   
//     </nav>
//     </>
//   );
// };

// export default Navbar;