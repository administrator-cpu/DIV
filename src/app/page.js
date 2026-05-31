import { ArrowRight, Blocks, Rocket, Code2 } from "lucide-react";
import Link from "next/link";
import ProductFeaturedCard from "../../components/products/ProductFeaturedCard";
import { AGENT_PRODUCTS } from "../../lib/constants";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-zinc-50 text-zinc-900">
           
      {AGENT_PRODUCTS?.map((e,i)=>
      <ProductFeaturedCard 
      key={i} 
      title={e?.title}
      description={e?.description}
      tags={e?.tags}
      slug={e?.slug}
      imageSrc={e?.imageSrc}
      accentColor= {e?.accentColor}
      />
      )}



    </main>
  );
}