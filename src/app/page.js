import Hero from "../../components/Home/Hero";
import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-[#FAFAFC] flex flex-col justify-between overflow-hidden">
      <div className="h-[12vh] pointer-events-none" aria-hidden="true"></div>

      {/* <div className="absolute top-[-10%] left-[-10%] w-[50%] max-w-2xl h-[40%] rounded-full bg-[#fff19f]/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-[35%] right-[-10%] w-[40%] max-w-xl h-[40%] rounded-full bg-[#ffba67]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[5%] w-[40%] max-w-xl h-[30%] rounded-full bg-[#ffec7e]/15 blur-[120px] pointer-events-none" /> */}
      <div className="relative z-10 w-full flex flex-col items-center  h-full ">
        <Hero />
      </div>
    </main>
  );
}
