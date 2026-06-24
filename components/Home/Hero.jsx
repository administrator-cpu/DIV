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
        {/* <Reviews/> */}
        {/* <Services/> */}
        <Features/>
        <FaqSection/>
        <CtaSection/>
      </div>
    </main>
  );
}
