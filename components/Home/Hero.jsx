import Scroller from "./Components/Scroller";
import IconGalleryCarousel from "./Components/IconGalleryCarousel";
import TitleCard from "./Components/TitleCard";
import Services from "./Components/Services";
import Filters from "./Components/Filters";
import Features from "./Components/Features";
import Reviews from "./Components/Reviews";
import TechStack from "./Components/TechStack";

export default function Hero() {
  return (
    <main className="relative min-h-screen w-full bg-[#fcfcfa] flex flex-col justify-between overflow-hidden">
      
      {/* Shifted inward from the top-left */}
      {/* <div className="absolute top-[10%] left-[20%] w-[50%] max-w-2xl h-[40%] rounded-full bg-[#fff19f]/20 blur-[120px] pointer-events-none" /> */}
      
      {/* Shifted inward from the middle-right */}
      {/* <div className="absolute top-[40%] right-[20%] w-[40%] max-w-xl h-[40%] rounded-full bg-[#ff67e6]/10 blur-[120px] pointer-events-none" /> */}
      
      {/* Shifted inward from the bottom-left toward the bottom-center */}
      {/* <div className="absolute bottom-[15%] left-[30%] w-[40%] max-w-xl h-[30%] rounded-full bg-[#ffec7e]/20 blur-[120px] pointer-events-none" /> */}
      
      <div className="relative z-10 w-full flex flex-col items-center h-full ">
        <Scroller />
        <TitleCard />
        <Services/>
        <Filters/>
        <Features/>
        <Reviews/>
        <TechStack/>
        {/* <IconGalleryCarousel /> */}
      </div>
    </main>
  );
}