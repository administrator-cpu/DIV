import { ArrowRight, Blocks, Rocket, Code2 } from "lucide-react";
import Link from "next/link";
import ProductFeaturedCard from "../../components/products/ProductFeaturedCard";
import { AGENT_PRODUCTS } from "../../lib/constants";
import Hero from "../../components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-zinc-50 text-zinc-900">
           <Hero />
           
    </main>
  );
}