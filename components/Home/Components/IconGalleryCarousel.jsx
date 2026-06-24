"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
// Optional: Import a fallback icon in case your DB's iconUrl is null
import { PackageIcon } from "lucide-react"; 
import { useProducts } from "@/components/Product/ProductContext";

// 1. Accept `products` as a prop instead of importing the static DIV_PRODUCTS
export default function IconGalleryCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const router = useRouter();  
  const { products, getServiceProducts } = useProducts();
  
    useEffect(() => {
      getServiceProducts();
    }, [getServiceProducts]);
  

  // 2. Use the length of the dynamic prop
  const len = products.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === len - 1 ? 0 : prev + 1));
  }, [len]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? len - 1 : prev - 1));
  }, [len]);

  useEffect(() => {
    if (isPaused || len === 0) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide, len]);

  const getCardAnimation = (index) => {
    const diff = (index - currentSlide + len) % len;

    if (diff === 0) return { x: 0, y: 0, rotate: 0, scale: 1.1, zIndex: 30, opacity: 1 };
    if (diff === 1) return { x: 180, y: 30, rotate: 6, scale: 0.95, zIndex: 20, opacity: 1 };
    if (diff === len - 1) return { x: -180, y: 30, rotate: -6, scale: 0.95, zIndex: 20, opacity: 1, };
    if (diff === 2) return { x: 340, y: 60, rotate: 12, scale: 0.85, zIndex: 10, opacity: 0.7, };
    if (diff === len - 2) return { x: -340, y: 60, rotate: -12, scale: 0.85, zIndex: 10, opacity: 0.7, };

    return { x: 0, y: 150, rotate: 0, scale: 0.5, zIndex: 0, opacity: 0 };
  };

  // Guard clause: If there is no data yet, don't render the carousel
  if (!products || products.length === 0) {
    return null; // Or a loading spinner
  }

  return (
    <section
      className="relative min-h-[60vh] w-full overflow-hidden py-24 flex flex-col items-center bg-gray-50/50"
      aria-label="Core Business Solutions"
    >
      <div className="">
        <h2 className="sr-only">Our Core Solutions</h2>
        <p className="sr-only">
          Secure, scalable, and intelligent software architecture.
        </p>
      </div>

      <div
        className="relative w-full max-w-6xl flex justify-center items-start h-[400px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {products.map((slide, index) => {
          const animState = getCardAnimation(index);
          const isActive = index === currentSlide;

          return (
            <motion.div
              key={slide._id} // Changed from slide.id to slide._id
              initial={false}
              animate={{
                x: animState.x,
                y: animState.y,
                rotate: animState.rotate,
                scale: animState.scale,
                opacity: animState.opacity,
                zIndex: animState.zIndex,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 16,
                mass: 0.8,
              }}
              onClick={() => {
                const diff = (index - currentSlide + len) % len;
                if (diff === 0) {
                  // If it's the active center slide, navigate to its page
                  router.push(`/products/${slide.slug || slide._id}`);
                } else if (diff === 1 || diff === 2) {
                  nextSlide();
                } else if (diff === len - 1 || diff === len - 2) {
                  prevSlide();
                }
              }}
              aria-hidden={!isActive}
              className={`absolute w-[320px] bg-white rounded-3xl p-8 shadow-xl shadow-black/5 border border-gray-100 ${
                isActive
                  ? "cursor-pointer hover:shadow-2xl hover:shadow-black/10"
                  : "cursor-pointer"
              }`}
            >
              {!isActive && (
                <div className="absolute inset-0 bg-white/40 rounded-3xl z-10 pointer-events-none transition-colors duration-300" />
              )}

              {/* 3. Updated Icon Logic to use DB 'iconUrl' or fallback */}
              <div className="w-12 h-12 rounded-full bg-pink-50 text-pink-500 flex items-center justify-center mb-6 overflow-hidden">
                {slide.iconUrl ? (
                  <img src={slide.iconUrl} alt={slide.title} className="w-6 h-6 object-contain" />
                ) : (
                  <PackageIcon className="w-6 h-6" /> // Fallback icon since iconUrl is null in DB
                )}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {slide.title}
              </h3>
              
              {/* 4. Changed from shortDesc to description, added line-clamp to keep card size uniform */}
              <p className="text-gray-500 text-sm leading-relaxed mb-8 h-20 line-clamp-3">
                {slide.description}
              </p>

              <Link
                // 5. Using slug (preferable for SEO) or _id as a fallback
                href={`/products/${slide.slug || slide._id}`}
                aria-label={`Learn more about ${slide.title}`}
                className={`px-6 py-2 inline-block text-center rounded-full font-medium text-sm transition-all shadow-md ${
                  isActive
                    ? "bg-gradient-to-r from-pink-500 to-yellow-400 text-white hover:opacity-90 hover:scale-105 cursor-pointer"
                    : "bg-gray-100 text-gray-400 pointer-events-none" 
                }`}
                tabIndex={isActive ? 0 : -1}
              >
                {isActive ? "See More" : "View"}
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}