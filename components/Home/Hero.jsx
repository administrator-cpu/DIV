import Scroller from "./Components/Scroller";
import IconGalleryCarousel from "./Components/IconGalleryCarousel";
import TitleCard from "./Components/TitleCard";
import Services from "./Components/Services";
import Filters from "./Components/Filters";
import Features from "./Components/Features";
import Reviews from "./Components/Reviews";
import TechStack from "./Components/TechStack";
import CtaSection from "./Components/CtaSection";
import FaqSection from "./Components/FAQSection";

export default function Hero() {
  return (
    <main className="relative min-h-screen w-full bg-[#fcfcfa] flex flex-col justify-between overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none opacity-40">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-pink-300 to-purple-200 blur-[120px]" />
        <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-bl from-orange-200 to-yellow-100 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-gradient-to-tr from-cyan-100 to-blue-100 blur-[120px]" />
      </div>
      <div className="relative z-10 w-full flex flex-col items-center h-full ">
        <TitleCard />
        <IconGalleryCarousel />
        <TechStack/>
        <Reviews/>
        {/* <Services/> */}
        <Features/>
        <FaqSection/>
        <CtaSection/>
      </div>
    </main>
  );
}

// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';

// export default function HeroSection() {
//   // Card data mapping to control the "fanned out" positioning and rotation
//   const services = [
//     { id: 1, zIndex: 10, rotate: -12, y: 60, x: -300 },
//     { id: 2, zIndex: 20, rotate: -6, y: 30, x: -150 },
//     { id: 3, zIndex: 30, rotate: 0, y: 0, x: 0 }, // Center Card
//     { id: 4, zIndex: 20, rotate: 6, y: 30, x: 150 },
//     { id: 5, zIndex: 10, rotate: 12, y: 60, x: 300 },
//   ];

//   return (
//     <section className="relative min-h-screen w-full overflow-hidden bg-white py-20 flex flex-col items-center">
      
//       {/* Background Mesh/Gradients to simulate the airy wave effect */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none opacity-40">
//         <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-pink-300 to-purple-200 blur-[120px]" />
//         <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-bl from-orange-200 to-yellow-100 blur-[120px]" />
//         <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-gradient-to-tr from-cyan-100 to-blue-100 blur-[120px]" />
//       </div>

//       {/* Hero Content */}
//       <div className="max-w-4xl mx-auto text-center px-4 mt-10 relative z-10">
//         <motion.h1 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-6xl md:text-7xl font-bold tracking-tight mb-6"
//         >
//           <span className="text-pink-500">Innovate</span>{' '}
//           <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
//             With Us
//           </span>
//         </motion.h1>

//         <motion.p 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10"
//         >
//           Join our ecosystem of forward-thinking creators. Turn your concepts into reality or explore what we've already built.
//         </motion.p>

//         {/* Buttons */}
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
//         >
//           <button className="px-8 py-3 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto">
//             Have An Idea?
//           </button>
//           <button className="px-8 py-3 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto">
//             Recent Project
//           </button>
//         </motion.div>

//         {/* Social Proof / Trusted By */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="flex flex-col items-center gap-3"
//         >
//           <div className="flex -space-x-3">
//             {/* Placeholder for avatars */}
//             {[1, 2, 3, 4, 5].map((item) => (
//               <div key={item} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 shadow-sm" />
//             ))}
//           </div>
//           <p className="text-sm text-gray-600 font-medium">
//             Trusted By <span className="font-bold text-black">100,000+ People</span>
//           </p>
//         </motion.div>
//       </div>

//       {/* Fanned Cards Section */}
//       <div className="relative w-full max-w-6xl h-[500px] mt-24 flex justify-center items-start">
//         {services.map((card, index) => (
//           <motion.div
//             key={card.id}
//             initial={{ opacity: 0, y: 150, x: 0, rotate: 0 }}
//             animate={{ 
//               opacity: 1, 
//               y: card.y, 
//               x: card.x, 
//               rotate: card.rotate 
//             }}
//             transition={{ 
//               type: "spring", 
//               stiffness: 60, 
//               damping: 12, 
//               delay: 0.4 + (index * 0.1) 
//             }}
//             style={{ zIndex: card.zIndex }}
//             className={`absolute w-[320px] bg-white rounded-3xl p-8 shadow-2xl shadow-black/5 border border-gray-100 ${
//               card.id === 3 ? 'scale-110 shadow-black/10' : 'scale-90 opacity-90 hover:opacity-100'
//             } transition-opacity duration-300`}
//           >
//             <h3 className="text-xl font-bold text-gray-900 mb-4">Service Heading</h3>
//             <p className="text-gray-500 text-sm leading-relaxed mb-8">
//               Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Expedita Possimus Natus Voluptatibus Vel Minus.
//             </p>
//             <button className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-medium text-sm hover:opacity-90 transition-opacity shadow-md">
//               See More
//             </button>
//           </motion.div>
//         ))}
//       </div>
      
//     </section>
//   );
// }