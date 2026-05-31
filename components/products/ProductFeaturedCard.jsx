"use client";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ProductFeaturedCard({
  title,
  description,
  tags,
  slug,
  imageSrc,
  videoSrc,
  accentColor = "from-emerald-500 to-teal-600",
}) {
  return (<>
  <section className=" h-[60vh] gap-12 w-[83vw] flex mx-auto">
    <div className=" h-full flex-1 flex flex-col gap-2.5">
        <h3 className="text-3xl py-3.5 border-t-2 ">{title}</h3>
        <p className=" text-sm tracking-wider">{description}</p>
    </div>
    <div className="relative h-full flex-[2] w-full bg-zinc-200 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title || slug}
          priority 
          fill 
          sizes="(max-w-1024px) 100vw, 60vw" 
          className="object-cover" 
        />
        <video
            src={videoSrc}
            autoPlay
            loop
            muted          /* CRITICAL: Browsers will block autoplay if not muted */
            playsInline    /* CRITICAL: Prevents iOS from forcing full-screen mode */
            preload="auto" /* Tells the browser to load the video right away */
            className="absolute inset-0 w-full h-full object-cover"
          />
      </div>
    
  </section>
  </>
    
  );
}