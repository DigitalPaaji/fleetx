'use client';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';

const Navbar = () => {
  return (
    <nav className="w-full bg-black px-4 md:px-12 lg:px-24 xl:px-40 2xl:px-48 py-4 flex items-center justify-between">

      {/* LOGO */}
      <Link href="/">
        <Image
          src="/logo.webp"
          width={180}
          height={60}
          alt="Logo"
          className="h-14 md:h-16 w-auto object-contain"
          priority
        />
      </Link>

      {/* BUTTON */}
       <Link href="/contact" className="mt-2" >
        <div className="bg-white rounded-xl w-fit mx-auto text-gray-900 font-bold font-sans text-lg py-3 px-3 flex items-center ">
          Apply Now <IoIosArrowRoundForward className="w-8 h-8 ml-2" />
        </div>
    </Link>

    </nav>
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